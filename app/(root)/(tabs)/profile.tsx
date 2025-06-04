import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType, Alert, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { settings } from '@/constants/data'
import { useGlobalContext } from '@/lib/global-provider'
import { logout } from '@/lib/appwrite'

interface SettingItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}
const SettingItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingItemProps) => (
  <TouchableOpacity
    className='flex flex-row items-center justify-between py-3'
    onPress={onPress}
  >
    <Image source={icon} className='size-6' />
    <View className='flex-1 flex flex-row items-center justify-between ml-3'>
      <Text className={`text-lg text-black-300 font-medium ${textStyle ?? ''}`}>{title}</Text>
      {showArrow && <Image source={icons.rightArrow} className='size-5 ml-2' />}
    </View>
  </TouchableOpacity>
)
const Profile = () => {

  const { user, refetch } = useGlobalContext();
  const handLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert('Logout Successful', 'You have been logged out successfully.');
      refetch();
    }
    else {
      Alert.alert('Logout Failed\nAn error occurred while logging out. Please try again.');
    }

  }
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='pb-32 px-7'
      >
        <View className='flex flex-row items-center justify-between mt-5'>
          <Text className='text-xl font-bold'>Profile</Text>
          <Image source={icons.bell} className='size-5' />
        </View>
        <View className='flex flex-col items-center relative mt-5'>
          <Image source={user?.avatar ? { uri: user.avatar } : images.avatar}
            className='size-44 relative rounded-full' />
          <TouchableOpacity
            className='absolute bottom-10 right-28 bg-white rounded-full p-1'
            onPress={() => console.log('Change Avatar')}
          >
            <Image source={icons.bed} className='size-9' />
          </TouchableOpacity>
          <Text className='text-2xl font-bold mt-2'>{user?.name}</Text>
        </View>
        <View className='flex flex-col mt-10'>
          <SettingItem icon={icons.calendar} title='My Booking' />
          <SettingItem icon={icons.wallet} title='Payment' />
        </View>

        <View className='flex flex-col mt-5 border-t pt-5'>
          {settings.slice(2).map((item, index) => (
            <SettingItem key={index} {...item} />
          ))}

        </View>
        <View>
          <SettingItem icon={icons.logout} title='Logout' onPress={handLogout} textStyle='text-red-500' showArrow={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
