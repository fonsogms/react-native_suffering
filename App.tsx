import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import NewsList from "./components/NewsList/NewsList";
import ArticleDetails from "./components/ArticleDetails";
export default function App() {
  console.log("wassup!");
  console.log(useDimensions());
  const Stack = createStackNavigator();

  return (
    <View
      onLayout={() => console.log("waddp")}
      style={{ marginTop: StatusBar.currentHeight, flex: 1 }}
    >
      {/*       <Navbar></Navbar>
       */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => <NewsList {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Details">
            {(props) => <ArticleDetails {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      {/*       <WebView source={{ uri: "https://reactnative.dev/" }} />
       */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
