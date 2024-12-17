import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }) {
  
  const gotoForgot = () => {
    navigation.navigate("Forgot");
  };
  const gotoAdmin = () => {
    navigation.navigate("AdminLogin");
  };
  const gotoReg = () => {
    navigation.navigate("Register");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    fetch("http://172.20.10.2/Project/myApp/API/login.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((Ibrahim) => {
        //alert(Ibrahim)
        if (Ibrahim.msg === "Successful") {
          /*navigation.navigate("Join", {
            screen: "First",
            params: {
              screen: "Comment",
              params: { Ibrahim },
            },
          });*/
          //it neglects this one up
          navigation.navigate("Join", {
            screen: "Profile",
            params: { Ibrahim },
          });
        } else {
          alert("Incorrect details");
        }
      })
      .catch((error) => {
        alert("Please check your internet connection");
      });
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/login.png")}
    >
      <SafeAreaView>
        <View>
          <Text style={styles.header}>Welcome! Please Log in to continue</Text>
        </View>
        <View>
          <TextInput
            placeholder="Enter Email"
            style={styles.textInput}
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            placeholder="Enter Password"
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={setPassword}
          ></TextInput>
        </View>
        <View>
          <TouchableOpacity
            style={{ position: "absolute", left: 10, top: 20 }}
            onPress={gotoReg}
          >
            <Text style={{ color: "black", fontSize: 12 }}>
              Not registered?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ position: "absolute", right: 10, top: 20 }}
            onPress={gotoForgot}
          >
            <Text style={{ color: "black", fontSize: 12 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 105,
              backgroundColor: "#DDD3DD",
              width: 160,
              height: 50,
              borderRadius: 20,
              alignItems: "center",
              alignSelf: "center",
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
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 0,
              paddingTop: 0,
              alignSelf: "center",
              top: 40,
            }}
            onPress={gotoAdmin}
          >
            <Text style={{ fontSize: 20 }}>Log in as an admin</Text>
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
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    color: "black",
    width: 280,
    height: 50,
    alignSelf: "center",
    fontSize: 18  
  },
});
