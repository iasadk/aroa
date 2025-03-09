import { Stack, usePathname, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import "../global.css"
import { AuthProvider, useAuth } from '@/providers/AuthContext';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
const AuthenticatedLayout = () => {
    const { isAuthorize, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        console.log('isAuth: ',isAuthorize, isLoading, pathname)
        if(!isLoading){
            if(!isAuthorize){
                router.replace('/login');
            }else if(pathname === '/login' || pathname === '/sign-up' || pathname === '/sign-in'){
                router.replace('/(tabs)')
            }

        }
    }, [router, isLoading, isAuthorize]);

    // if (isCheckingAuth) {
    //     return null; // Prevent rendering the stack until auth is determined
    // }

    if (isLoading) {
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      }
    return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="sign-in/index" />
        <Stack.Screen name="sign-up/index" />
    </Stack>
}

const RootLayout = ()=>{
    return (
        <AuthProvider >
            <AuthenticatedLayout/>
        </AuthProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default RootLayout
