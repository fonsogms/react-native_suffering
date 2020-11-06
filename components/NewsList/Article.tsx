import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Article } from "./news.interface";
const NewInfo = (props: { article: Article; navigation: any }) => {
  return (
    <View
      style={{
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

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
            marginTop: 10,
            width: 200,
            height: 150,
            borderRadius: 10,
          }}
          source={{
            uri: props.article.urlToImage
              ? props.article.urlToImage
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
          }}
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
