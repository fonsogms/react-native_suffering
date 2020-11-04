import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Navbar from "./components/Navbar";
import { WebView } from "react-native-webview";
export default function App() {
  return (
    <View style={{ marginTop: StatusBar.currentHeight, height: "100%" }}>
      <Navbar></Navbar>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
      <WebView source={{ uri: "https://reactnative.dev/" }} />
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
