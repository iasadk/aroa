import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { cn } from '../../utils/cn'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import CustomAlert from '../../components/Alert'
const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
  };

  const handleSubmit = ()=>{
    if(!data.email.trim() || !data.password.trim()){
      // Add toast.
      CustomAlert(`Email and password is required.`)
    }

    if(!validateEmail(data.email)){
      CustomAlert('Please enter a valid email.')
    }
  }
  return (
    <SafeAreaView>
      <View className="h-full p-4">
        <StatusBar style='inverted' />
        <View className=" gap-y-3">
          <Text className="text-4xl mt-8 font-semibold">Let's Sign You In</Text>
          <Text className="text-2xl font-semibold text-gray-400">Welcome Back</Text>
        </View>
        <View className="mt-6 gap-y-5">
          <View className="gap-y-1">
            <Text className="text-lg">
              <Text className="text-red-500">*</Text>
              Email
            </Text>
            <TextInput
              inputMode='email'
              className="border border-gray-300 rounded-lg px-2"
              placeholder='Enter your email'
              onChangeText={(e) => {
                setData({ ...data, email: e })
              }}
            />
          </View>
          <View className="gap-y-1">
            <Text className="text-lg">
              <Text className="text-red-500">*</Text>
              Password
            </Text>
            <View className="flex-row items-center border border-gray-300 rounded-lg px-2 ">
              <TextInput
                className="flex-1 py-[0.6rem]"
                placeholder="Enter your password"
                onChangeText={(e) => {
                  setData({ ...data, password: e })
                }}
                secureTextEntry={!isPasswordVisible} // Toggle secureTextEntry
              />
              <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <Ionicons
                  name={isPasswordVisible ? "eye" : "eye-off"}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="bg-primary rounded-lg" onPress={handleSubmit}>
            <Text className="text-center py-2 text-2xl font-medium text-white">Sign In</Text>
          </TouchableOpacity>
          <Text className="text-center underline text-xl" onPress={() => {
            router.push('sign-up')
          }}>or create new account</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn