import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { router, usePathname } from 'expo-router'
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks';
import icons from '@/constants/icons';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
    const path = usePathname();
    const param = useLocalSearchParams<{ query?: string }>();
    const [search, setSearch] = useState(param.query);

    const debouncedSearch = useDebouncedCallback((text: string) => router.setParams({ query: text }), 500);

    const handleSearch = (text: string) => {
        setSearch(text);
        debouncedSearch(text);
    }

    return (
        <View className='flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 boder border-primary-100 mt-5 py-2'>
            <View className='flex flex-1 flex-row items-center justify-start z-50'>
                <Image source={icons.search} className='size-5 ml-2' />
                <TextInput
                    value={search}
                    onChangeText={handleSearch}
                    placeholder='Search'
                    placeholderTextColor='#666876'
                    className='text-sm text-black-300 ml-2 flex-1'
                />
            </View>
            <TouchableOpacity
                className='flex flex-row items-center justify-center bg-primary-100 rounded-lg px-3 py-1'
                onPress={() => {
                    console.log('Search for:', search);
                }}
            >
                <Image source={icons.filter} className='size-5' />
                {/* You can add a search icon or text here if needed */}
            </TouchableOpacity>
        </View>
    )
}

export default Search