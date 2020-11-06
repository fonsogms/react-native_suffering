import React from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

const ArticleDetails = ({ route }) => {
  console.log(route.params);
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: route.params.url }} />
    </View>
  );
};

export default ArticleDetails;
