import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const TabIndex = () => {
  return (
    <View>
      <Text className="bg-red-500">TabIndex</Text>
      <Redirect href={"login"}/>
    </View>
  )
}

export default TabIndex

const styles = StyleSheet.create({})