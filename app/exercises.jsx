import { View, Text, TouchableOpacity,Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodypart } from './api/exercisesDB'
import { demoExercises } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons'
import ExercisesList from '../components/ExercisesList'
import { ScrollView } from 'react-native-virtualized-view'



export default function Exercises() {
    const router = useRouter()
    const [exercises, setExercises] = useState([])
    const item = useLocalSearchParams()
    // console.log('got item',item)


    useEffect(() =>{
        if(item) getExercises(item.name)
    },[item]);

    const getExercises = async(bodypart) =>{
        let data = await fetchExercisesByBodypart(bodypart)
        console.log('got data:', data)
        setExercises(data)
    }
  return (
    <ScrollView>
        <StatusBar style='light'/>
        <Image
            source={item.image}
            style={{width: wp(100), height: hp(45)}}
            className='rounded-b-[40px]'
        />
        <TouchableOpacity 
            onPress={() => router.back()}
        className='bg-rose-500 mx-4 justify-center items-center pr-1 absolute rounded-full '
            style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        >
        <Ionicons name='caret-back-outline' size={hp(4)} color='white'/>
        </TouchableOpacity>

        <View className='mx-4 space-y-3 mt-4'>
            <Text style={{fontSize: hp(3)}} className='font-semibold text-neutral-700'>
                    {item.name} exercises
            </Text>
            <View className='mb-10'>
                    <ExercisesList data={exercises}/>
            </View>
        </View>
    </ScrollView>
  )
}

// 