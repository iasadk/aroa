import { Stack, Tabs } from 'expo-router'
import React from 'react'
import "../global.css"
const RootLayout = () => {
    return <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="sign-in/index"/>
        <Stack.Screen name="sign-up/index"/>
    </Stack>
}

export default RootLayout
