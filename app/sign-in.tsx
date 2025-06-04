import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const SignIn = () => {
  const {refetch, loading, isLoggedIn} = useGlobalContext();

  const handleLogin = async() => {
    
    // if (!loading && !isLoggedIn ) return <Redirect href='/' />;
    if (loading || isLoggedIn) return;
    // Handle Google login here
    const result = await login();

    if (result) {
      await refetch();
      // Navigate to the next screen
      console.log('Login successful');
    } else {
      // Handle login error
      Alert.alert('Error','Login failed');
    }
  };
  if (isLoggedIn) {
    return <Redirect href='/' />;
  }
  
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }} showsVerticalScrollIndicator={false}>
        <Image source={images.onboarding} style={{ width: 300, height: 400, alignSelf: 'center' }} resizeMode='contain' />
        <View className='px-10'>
          <Text className='text-base text-center uppercase text-black-200'>Welcome Estate</Text>
          <Text className='text-3xl text-center text-black-300 mt-2'>
            Let's Get You Closer to {'\n'}
            <Text className='text-primary-300'>Your Dream Home</Text>
          </Text>
          <Text className='text-lg text-center text-black-200 mt-12'>
            Login to Restate with Google
          </Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white-300 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
            <View className='flex flex-row items-center  justify-center'>
              <Image source={icons.google} className='w-6 h-6' resizeMode='contain' />
              <Text className='text-lg text-black-300 ml-2'>Login with Google</Text>
            </View>

          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn;

const styles = StyleSheet.create({})
