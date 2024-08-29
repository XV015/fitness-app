import { View, Text, LogBox } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

LogBox.ignoreLogs(["Warning: Failed prop type"]);

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exercises"
        options={{
          presentation: 'fullScreenModal',
        }}
      />
      <Stack.Screen
        name='exercisesDetail'
        options={{
          presentation: 'containedModal',
        }}
      />
      
    </Stack>
  );
}
