import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Article } from "./news.interface";
import something from "@react-navigation/native";
const NewInfo = (props: { article: Article; navigation: any }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Details", {
            url: props.article.url,
          });
        }}
      >
        <Image
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
          source={{ uri: props.article.urlToImage }}
        />
        <Text>{props.article.title}</Text>
        <Text>{props.article.description}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewInfo;
