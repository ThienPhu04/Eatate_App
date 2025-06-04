import { View, Text, ScrollViewComponent, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filter = () => {
    const params = useLocalSearchParams<{ query?: string }>();
    const [selectCategory, setSelectCategory] = useState(params.query || 'All');

    const handleCategoryChange = (category: string) => {
        if (selectCategory === category) {
            setSelectCategory('All');
            router.setParams({filter : 'All' });
            return ;
        }
        setSelectCategory(category);
        router.setParams({ filter: category });
    };
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3 mb-2">
            {categories.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handleCategoryChange(item.title)}
                    className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${selectCategory === item.title ? 'bg-primary-300' : 'bg-primary-100 border border-primary-200'
                        }`}
                >
                    <Text
                        className={`text-base font-bold ${selectCategory === item.category ? 'text-white' : 'text-black-300'
                            }`}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default Filter