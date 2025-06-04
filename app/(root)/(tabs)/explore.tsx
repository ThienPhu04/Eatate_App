import { Card, FeaturedCard } from '@/components/Cards';
import Filter from '@/components/Filter';
import NoResult from '@/components/NoResult';
import Search from '@/components/Search';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { getLatestProperties, getProperties } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import seed from '@/lib/seed';
import { useAppwrite } from '@/lib/useAppwrite';
import { Link, router, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Explore() {
  const params = useLocalSearchParams<{ query?: string, filter?: string }>();

  const { data: properties, loading, refetch } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 20,
    },
    skip: true,
  });
  const handleCardPress = (id: string) => router.push(`/properties/${id}`);
  useEffect(() => {
    refetch(
      {
        filter: params.filter!,
        query: params.query!,
        limit: 20,
      }
    );
  }, [params.filter, params.query]);

  return (
    <SafeAreaView className='bg-white h-full'>
      <FlatList
        data={properties}
        renderItem={({ item }) => <Card item={item} onPress={() => handleCardPress(item.$id)} />}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        contentContainerClassName='pb-32'
        columnWrapperClassName='flex gap-5 px-5'
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size='large' color='#000' className='text-primary-300 mt-5' />
          ) : (
            <NoResult />
          )
        }
        ListHeaderComponent={
          <View className='px-5'>
            <View className='flex flex-row items-center justify-between mt-5'>
              <TouchableOpacity onPress={() => router.back()} className='flex flex-row bg-primary-200 size-11 rounded-full items-center justify-center'>
                <Image source={icons.backArrow} className='size-5 ' />
              </TouchableOpacity>
              <Text className='text-base text-center font-medium mr-2 text-black-300 pl-5'>Search your home idea</Text>
              <Image source={icons.bell} className='w-6 h-6' resizeMode='contain' />
            </View>
            <Search />
            <View className='mt-5'>
              <Filter />
              <Text className='text-xl font-bold text-black-300 mt-5'>
                Found {properties?.length} properties
              </Text>
            </View >
          </View>
        }
      />

    </SafeAreaView>
  );
}
