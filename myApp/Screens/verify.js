import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Verify({ navigation }) {
  const gotoReg = () => {
    navigation.navigate("Register");
  };
  const gnote = () => {
    alert(
      "Please check your email for a code, if no code is seen, retype your email and request another code"
    );
  };

  const unpack = useRoute();
  const email = unpack.params?.Ibrahim.email;

  const [code, setCode] = useState("");
  const submit = () => {
    fetch("http://localhost/Project/myApp/API/verify.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        code: code,
      }),
    })
      .then((response) => response.json())
      .then((ibbi) => {
        //alert(Ibrahim)
        if (ibbi == "Verified") {
          alert("Verified successfully");
          navigation.navigate("Login");
        } else {
          alert("Wrong verification code");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/welcome.png")}
    >
      <View>
        <Text style={styles.header}>EMAIL VERIFICATION</Text>
      </View>

      <View>
        <TextInput
          style={{
            backgroundColor: "#fefe",
            height: 50,
            width: "70%",
            position: "absolute",
            alignSelf: "center",
            borderColor: "#43164A",
            borderWidth: 1,
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRadius:  20,
            marginTop: -130,
            fontSize: 20
          }}
          onChangeText={setCode}
          keyboardType="numeric"
          maxLength={6}
          placeholder="Enter 6 digit verification code"
        />
      </View>

      <View>
        <TouchableOpacity
          style={{
            position: "absolute",
            alignSelf: "center",
            backgroundColor: "lightgray",
            width: 140,
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            backgroundColor: "#fefe",
            top: 100,
          }}
          onPress={submit}
        >
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              marginTop: 7,
              fontSize: 20
            }}
          >
            VERIFY
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={gnote}>
          <Text style={{ position: "absolute", left: 20, fontSize: 18 }}>
            Code not received?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={gotoReg}>
          <Text style={{ position: "absolute", right: 20, fontSize: 18 }}>Change email</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    position: "absolute",
    alignSelf: "center",
    fontSize: 32,
    marginTop: -300,
  },
});
