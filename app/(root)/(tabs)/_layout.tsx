import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabLayout from '@/app-example/app/(tabs)/_layout'


const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => {
    return (
        <View className='flex-1 mt-3 flex flex-col items-center '>
            <Image
                source={icon} tintColor={focused ? '#0061ff' : '#666876'} resizeMode='contain' className='size-6'
            />
            <Text className={`text-xs w-full text-center mt-1 ${focused ? 'text-primary-300' : 'text-black-200'}`}>
                {title}
            </Text>
        </View>
    )
}
const TapLayOut = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#ffffff',
                borderTopColor: '#0061ff1a',
                borderTopWidth: 1,
                minHeight: 70,
                elevation: 0,

            }
        }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={require('@/assets/icons/home.png')}
                            title='Home'
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='explore'
                options={{
                    title: 'Explore',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={require('@/assets/icons/search.png')}
                            title='Explore'
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={require('@/assets/icons/person.png')}
                            title='Profile'
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

export default TapLayOut;