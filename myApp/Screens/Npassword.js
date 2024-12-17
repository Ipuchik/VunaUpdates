import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Npassword({ navigation }) {
    const unpack = useRoute();
    const email = unpack.params?.Ibrahim.email;
  const [password, setPassword] = useState("");

  const submit = () => {
    fetch("http://localhost/Project/myApp/API/password.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((Ibrahim) => {
        if (Ibrahim) {
          alert("Password changed successfully");
          navigation.navigate("Login");
        } else {
          alert(Ibrahim);
        }
      })
      .catch((error) => {
        alert("Please enter a new password");
      });
  };

  return (
    <ImageBackground
      style={styles.bImage}
      source={require("../assets/first.png")}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Please type in your new password</Text>
          <TextInput
            placeholder="Enter new password"
            style={styles.textInput}
            onChangeText={setPassword}
          ></TextInput>
        </View>
        <View style={styles.contain}>
          <TouchableOpacity style={styles.submit} onPress={submit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bImage: {
    justifyContent: "center",
    flex: 1,
  },
  container: {
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: -160,
    marginBottom: 20,
    color: "white",
  },
  textInput: {
    alignSelf: "center",
    position: "absolute",
    top: "150%",
    width: "80%",
    height: 50,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 20,
    backgroundColor: "white",
    fontSize: 18,
  },
  input: {
    position: "absolute",
    left: 20,
    top: 100,
  },
  input_text: {
    fontSize: 18,
    color: "white",
  },
  submit: {
    width: "30%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#EBDCEE",
    textAlign: "center",
    justifyContent: "center",
    bottom: -180,
  },
  contain: {
    alignItems: "center",
  },  
});
