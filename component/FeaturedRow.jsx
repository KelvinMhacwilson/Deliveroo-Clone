import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import SanityClient from "../sanity";

const FeaturedRow = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type == 'featured' && _id == $id] {
        ...,    
        restaurants[] ->{
              ...,
              dishes[] -> {
                ...,
                  _type -> {
                    name
                  }
              }
            },
          }[0]`,
      { id }
    ).then((data) => setRestaurants(data?.restaurants));
  }, []);

  return (
    <View>
      <View className="flex-row mt-4 items-center justify-center px-4">
        <Text className="font-bold text-lg flex-1">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4 mb-3">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {/* RestaurantCard */}
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              address={restaurant.address}
              shortDescription={restaurant.shortDescription}
              dishes={restaurant.dishes}
              long={restaurant?.long}
              lat={restaurant?.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
