import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  LocationMarkerIcon,
  ChevronRightIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import DishRow from "../component/DishRow";
const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          className="absolute top-10 left-5 bg-gray-100 rounded-full p-1"
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={24}
            color="#00CCBB"
          />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="p-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-green-500">
                {rating} ~ {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <Octicons name="location" size={22} color="gray" />
              <Text className="text-gray-500">Nearby ~ {address}</Text>
            </View>
          </View>

          <Text className="text-gray-400 mt-2 pb-4">{shortDescription}</Text>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <MaterialCommunityIcons
              name="map-marker-question-outline"
              size={20}
              color="gray"
            />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy
            </Text>
            <ChevronRightIcon color="green" />
          </TouchableOpacity>
        </View>

        <View>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* Dishes */}
          {dishes.map((dish) => {
            return (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.shortDescription}
                price={dish.price}
                image={dish.image}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
