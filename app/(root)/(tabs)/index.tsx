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


export default function HomeScreen() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string, filter?: string }>();

  const { data: latestProperties, loading: latestPropertiesLoading } = useAppwrite({ fn: getLatestProperties });

  const { data: properties, loading, refetch } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });
  const handleCardPress = (id: string) => router.push(`/properties/${id}`);
  useEffect(() => {
    refetch(
      {
        filter: params.filter!,
        query: params.query!,
        limit: 6,
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
              <View className='flex flex-row items-center'>
                <Image source={user?.avatar ? { uri: user.avatar } : images.avatar} className='size-12 rounded-full' />
                <View className='flex flex-col items-start ml-2 justify-center'>
                  <Text className='text-xs text-black-200'>Have a great day</Text>
                  <Text className='text-lg font-medium text-black-300'>{user?.name}</Text>
                </View>
              </View>
              <Image source={icons.bell} className='size-6 ml-2' />
            </View>
            <Search />
            <View className='my-5'>
              <View className='flex flex-row items-center justify-between'>
                <Text className='text-xl font-semibold text-black-300'>Features</Text>
                <TouchableOpacity onPress={() => console.log('See All')}>
                  <Text className='text-base text-primary-300 font-bold'>See All</Text>
                </TouchableOpacity>
              </View>
              {latestPropertiesLoading ? (
                <ActivityIndicator size='large' className='text-primary-300 mt-5' />
              ) : (!latestProperties || latestProperties.length === 0) ? (
                <NoResult />
              ) : (
                <FlatList
                  data={latestProperties}
                  keyExtractor={(item) => item.$id}
                  horizontal
                  bounces={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerClassName='flex gap-5 mt-5'
                  renderItem={({ item }) => <FeaturedCard item={item} onPress={() => handleCardPress(item.$id)} />}
                />
              )}
              <View className='flex flex-row items-center justify-between mt-5'>
                <Text className='text-xl font-semibold text-black-300'>Our Recomment</Text>
                <TouchableOpacity onPress={() => console.log('See All')}>
                  <Text className='text-base text-primary-300 font-bold'>See All</Text>
                </TouchableOpacity>
              </View>
              <Filter />
            </View>
          </View>
        }
      />

    </SafeAreaView>
  );
}
