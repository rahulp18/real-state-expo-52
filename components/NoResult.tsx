import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const NoResult = () => {
  return (
    <View className="flex items-center my-5 ">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />

      <Text className="text-2xl font-rubik-bold">
        We Could not find any result
      </Text>
    </View>
  );
};

export default NoResult;
