import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAuth } from '@/providers/AuthContext'

const LogoutButton = () => {
    const { logout } = useAuth()

    return (
        <TouchableOpacity onPress={() => {
            logout()
        }} className="bg-primary ">
            <Text className="text-2xl text-white p-2 text-center">Logout</Text>
        </TouchableOpacity>
    )
}

export default LogoutButton;
