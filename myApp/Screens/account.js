import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account({ navigation }) {
  let [username, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [age, setAge] = useState("");
  let [id, setId] = useState("");

  // const array = [username, password, email, age]

  const unpack = useRoute();
  //console.log(unpack);
  let username1 = unpack.params?.Ibrahim.username;
  let password1 = unpack.params?.Ibrahim.password;
  let age1 = unpack.params?.Ibrahim.age;
  let email1 = unpack.params?.Ibrahim.email;
  let id1 = unpack.params?.Ibrahim.id;

  const submit = () => {
    fetch("http://localhost/Project/myApp/API/update.php", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username ? username : username1,
        // TENARY OPERATOR - this is like an if else... password has value use the value, else use the new value
        password: password ? password : password1,
        age: age ? age : age1,
        email: email ? email : email1,
        id: id1,
      }),
    })
      .then((response) => response.json())
      .then((Ibrahim) => {
        if (Ibrahim.id) {
          alert("Updated Successfully ");
          username1 = Ibrahim.username;
          password1 = Ibrahim.password;
          age1 = Ibrahim.age;
          email1 = Ibrahim.email;

          navigation.navigate("Profile", { Ibrahim });
        } else {
          alert("Error updating user data ");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <ImageBackground
    style={styles.container}
    source={require("../assets/login.png")}
    >
        <SafeAreaView>
        <View style={styles.head}>
          <Text style={styles.headText}>Account Details</Text>
        </View>
        <View>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            placeholder={username1}
            onChangeText={setName}
          />
        </View>
        <View>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder={password1}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View>
          <Text style={styles.label}>Date of Birth:</Text>
          <TextInput
            style={styles.input}
            placeholder={age1}
            onChangeText={setAge}
          />
        </View>
        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder={email1}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.buttonText} onPress={submit}>
            Save
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  head: {
    marginTop: -50,
  },
  headText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  input: {
    fontSize: 18,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 10,
    padding: 5,
  },
  button: {
    backgroundColor: "#EBDCEE",
    padding: 10,
    borderRadius: 15,
    marginTop: 40,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
