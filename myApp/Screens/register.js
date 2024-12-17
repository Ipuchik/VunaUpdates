import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register({ navigation }) {
  const gotoLogin = () => {
    navigation.navigate("Login");
  };
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  //to get data from the api
  // const [response, setResponse] = useState("");
  //const [fname, setFname] = useState("");

  const submit = () => {
    
if (!username || !password || !email || !age) {
  alert("Please fill in all details");
  return;
}

fetch("http://localhost/Project/myApp/API/register.php", {
  method: "POST",
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: username,
    email: email,
    password: password,
    age: age,
  }),
})
  .then((response) => response.json())
  .then((Ibrahim) => {
    //to use the data sent on this screen...
    //setResponse(Ibrahim.msg);
    //setFname(Ibrahim.name);
    if (Ibrahim == "Invalidemail") {
      alert("Invalid email");
    } else {
      alert("Registered Successfully");
      navigation.navigate("Verify", { Ibrahim });
    }
  })
  .catch((error) => {
    //alert(error);
  });
  };

  return (
    <ImageBackground
    style={styles.container}
    source={require("../assets/register.png")}
    >
        <SafeAreaView>
        <View>
          <Text style={styles.header}>Register</Text>
        </View>

        <View>
          <TouchableOpacity>
            <TextInput
              placeholder="Enter Username"
              style={styles.textInput}
              onChangeText={setName}
            ></TextInput>
          </TouchableOpacity>
          <TouchableOpacity>
            <TextInput
              placeholder="Enter Password"
              style={styles.textInput}
              onChangeText={setPassword}
              secureTextEntry={true}
            ></TextInput>
          </TouchableOpacity>
          <TouchableOpacity>
            <TextInput
              placeholder="Enter email"
              style={styles.textInput}
              onChangeText={setEmail}
            ></TextInput>
          </TouchableOpacity>
          <TouchableOpacity>
            <TextInput
              placeholder="DD / MM / YYYY"
              style={styles.textInput}
              onChangeText={setAge}
              //keyboardType="numeric"
            ></TextInput>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ left: 20, top: -10 }} onPress={gotoLogin}>
            <Text style={{ color: "black", fontSize: 18 }} onPress={gotoLogin}>
              Already registered?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "absolute",
              //left: 150,
              backgroundColor: "#EBDCEE",
              width: 130,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              alignSelf: "center",
              marginTop: 50,
            }}
            onPress={submit}
          >
            <Text
              style={{
                textAlign: "center",
                alignSelf: "center",
                marginTop: 7,
                fontSize: 18,
              }}
              onPress={submit}
            >
              Verify Email
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  header: {
    textAlign: "center",
    marginTop: -80,
    marginBottom: -10,
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "bold",

  },
  textInput: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    color: "black",
    width: '80%',
    height: 50,
    alignSelf: "center"
  },
});
