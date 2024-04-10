import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../component/Categories";
import FeaturedRow from "../component/FeaturedRow";
import SanityClient from "../sanity";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == 'featured'] {
      ...,
      restaurants[] ->{
        ...,
        dishes[] ->
      }
    }`
    ).then((data) => setFeaturedCategories(data));
  }, []);

  // console.log(featuredCategories);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row  pb-3 items-center mx-4 space-x-2 px-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1 ml-2">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center ">
            <Text className="font-bold text-xl">Current Location</Text>
            <View className="ml-1 mt-1">
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategories?.map((category) => {
          return (
            <FeaturedRow
              id={category._id}
              title={category.name}
              description={category.description}
              key={category._id}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
