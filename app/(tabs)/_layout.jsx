import { Tabs } from 'expo-router'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
const RootLayout = () => {
    return <Tabs screenOptions={{
        headerShown: false
    }}>
        <Tabs.Screen name="index" options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={20} color={color} />
            ),
        }}/>
        <Tabs.Screen name="AddNew" options={{
            title: "Add New",
            tabBarIcon:({color, size}) => (
                <Ionicons name='add-circle-outline' size={20} color={color}/>
            )
        }}/>
        <Tabs.Screen name="Profile" options={{
            title: "Profile",
            tabBarIcon:({color, size}) => (
                <Ionicons name='person-outline' size={20} color={color}/>
            )
        }}/>
    </Tabs>
}

export default RootLayout
