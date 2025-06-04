import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

const NoResult = () => {
    return (
        <View className="flex-1 items-center my-5">
            <Image source={images.noResult} className="w-11/12 h-80" />
            <Text className="text-2xl text-black-300 font-bold mt-5">NoResult</Text>
            <Text className="text-base text-black-200 mt-2">Try changing your search</Text>
        </View>
    )
}

export default NoResult