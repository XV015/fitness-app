import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function exercisesDetail() {
  const router = useRouter()
    const item = useLocalSearchParams()
  return (
    <View className='flex flex-1'>
      <View className='shadow-md bg-neutral-200 rounded-b-[40px] pt-3'>
            <Image 
                source={{uri: item.gifUrl}}
                contentFit='cover'
                style={{width: wp(100), height: wp(100)}}
                className='rounded-b-[40px]'
            />
            <TouchableOpacity 
            onPress={() => router.back()}
        className='bg-rose-500 mx-4 justify-center items-center pr-1 absolute rounded-full '
            style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        >
        <Ionicons name='caret-back-outline' size={hp(4)} color='white'/>
        </TouchableOpacity>
      </View>

      <ScrollView className='mx-4 space-y-2 mt-3' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
          <Animated.Text 
            entering={FadeInDown.delay(100).duration(300).springify()}
          style={{fontSize: hp(3.5)}}
          className='font-semibold text-neutral-800 tracking-wide'
          >
                {item.name}
          </Animated.Text>
          <Animated.Text 
            entering={FadeInDown.delay(200).duration(300).springify()}style={{fontSize: hp(2)}}
          className='text-neutral-700 tracking-wide'
          >
                Equipment <Text className='font-bold text-neutral-700'>
                  {item?.equipment}
                </Text>
          </Animated.Text>
          <Animated.Text 
            entering={FadeInDown.delay(300).duration(300).springify()}style={{fontSize: hp(2)}}
          className='text-neutral-700 tracking-wide'
          >
                Secondary Muscles <Text className='font-bold text-neutral-700'>
                  {item?.secondaryMuscles}
                </Text>
          </Animated.Text>
          <Animated.Text 
            entering={FadeInDown.delay(400).duration(300).springify()} style={{fontSize: hp(2)}}
          className='text-neutral-700 tracking-wide'
          >
                Target <Text className='font-bold text-neutral-700'>
                  {item?.target}
                </Text>
          </Animated.Text>
          <Animated.Text 
            entering={FadeInDown.delay(500).duration(300).springify()} style={{fontSize: hp(3)}}
          className='font-semibold text-neutral-800 tracking-wide'
          >
                Instructions
          </Animated.Text>
          {
            item.instructions.split(',').map((instruction, index) =>{
              return(
                <Animated.Text 
                entering={FadeInDown.delay((index+6)*100).duration(300).springify()}
                  key={instruction}
                  style={{fontSize: hp(1.7)}}
                  className='text-neutral-800'
                >
                  {instruction}
                </Animated.Text>
              )
            })
          }
      </ScrollView>
    </View>
  )
}