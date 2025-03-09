import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { cn } from '../../utils/cn'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
const Login = () => {
  const router = useRouter();
  return (
    <View className="h-full">
      <StatusBar style='inverted'/>
      <View className="flex items-center h-full">
        <Image source={require('../../assets/images/login.png')} className="w-3/4 h-3/4 mt-8 rounded-xl" />
        <View className="bg-primary w-full p-6 absolute bottom-0 h-[40%] rounded-t-3xl gap-y-4 ">
            <Text className="text-white font-semibold text-4xl text-center">Stay on Track, Stay Healthy</Text>
            <Text className="text-white text-center text-lg">Track your meds, take control of your health. Stay consistent, staty confident!</Text>

          <TouchableOpacity className={cn("border border-dashed  border-blue-600  rounded-full bg-white py-4 mt-8")} 
          onPress={()=>router.replace('sign-in')}
          >
              <Text className={cn("text-primary text-center text-2xl")}>Continue</Text>
          </TouchableOpacity>
          <Text className="text-center text-white">*By continuing you agree to our terms and condition</Text>
        </View>

      </View>

    </View>
  )
}

export default Login