import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images';
import icons from '@/constants/icons';
import { Models } from 'react-native-appwrite';

interface Props {
    item: Models.Document;
    onPress?: () => void;
}
export const FeaturedCard = ({item: {image, rating, name , address,price }, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-60 h-80 relative border-2 border-black rounded-2xl">
            <Image source={{uri:image}} className="size-full rounded-2xl" />
            <Image source={images.map} className="size-full absolute rounded-2xl bottom-0" />
            <View className='flex flex-row items-center absolute bg-white rounded-full top-5 right-5 px-3 py-1.5'>
                <Image source={images.onboarding} className="size-3.5" />
                <Text className='text-xs font-bold text-primary-300 ml-1'>{rating}</Text>
            </View>
            <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
                <Text className='text-xl font-extrabold text-white' numberOfLines={1}>{name}</Text>
                <Text className='text-base text-white'>{address}</Text>
                 <View className='flex flex-row items-center justify-between w-full'>
                <Text className='text-xl font-extrabold text-white'>
                    {"$ "+price}
                </Text>
                <Image source={icons.heart} className='size-6' />
            </View>
            </View>
           
        </TouchableOpacity>
    )
}

export const Card = ({item: {image, rating, name , address,price }, onPress} : Props) => {
    return (
        <TouchableOpacity className="flex-1 w-full mt-5 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative ">
            <View className='flex flex-row items-center absolute px-5 top-5 right-5 bg-white/90 p-1 rounded-full z-50 '>
                <Image source={images.onboarding} className="size-2.5" />
                <Text className='text-xs font-bold text-primary-300 ml-0.5'>{rating}</Text>
            </View>
            <Image source={{uri:image}} className="size-full rounded-lg w-full h-40" />
            <View className='flex flex-col items-start mt-2'>
                <Text className='text-base font-bold text-black-300'>{name}</Text>
                <Text className='text-xs text-black-200'>{address}</Text>
            </View>
            <View className='flex flex-row items-center justify-between mt-2'>
                <Text className='text-xl font-extrabold text-primary-300'>
                    {"$ "+price}
                </Text>
                <Image source={icons.heart} className='size-6'tintColor={'#191d31'}/>
            </View>
        </TouchableOpacity>
    )
}
