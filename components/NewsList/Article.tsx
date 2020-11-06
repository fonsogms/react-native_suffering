import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Article } from "./news.interface";
import something from "@react-navigation/native";
const NewInfo = (props: { article: Article; navigation: any }) => {
  return (
    <View
      style={{
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 10,

        elevation: 3,
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
        }}
        onPress={() => {
          props.navigation.navigate("Details", {
            url: props.article.url,
          });
        }}
      >
        <Image
          style={{
            flex: 1,
            marginTop: 10,
            width: "100%",
            height: 100,
            borderRadius: 10,
          }}
          resizeMode="contain"
          source={{ uri: props.article.urlToImage || "http://google.com" }}
        />
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            {props.article.title}
          </Text>
          <Text style={{ textAlign: "center" }}>
            {props.article.description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewInfo;
