import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, id, description }) => {
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
        <RestaurantCard
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="japanese"
          address="123 Main St"
          shortDescription="This is a Test"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="japanese"
          address="123 Main St"
          shortDescription="This is a Test"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="japanese"
          address="123 Main St"
          shortDescription="This is a Test"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
