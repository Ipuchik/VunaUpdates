import React, { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Front() {
const navigation = useNavigation();

useEffect(() => {
  const timer = setTimeout(() => {
    navigation.navigate("Welcome"); // Navigate to 'OtherScreen' after 3 seconds
  }, 3000);
  // use  Effect is used to navigate to the first page immediately after the component emulates, ensuring that the navigation happens before the component is rendered to the screen.

  // Clean up the timer when the component unmounts
  return () => clearTimeout(timer);
}, [navigation]);
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/front.png")}
    >
      <Text style={styles.text}>VUNA UPDATES</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
