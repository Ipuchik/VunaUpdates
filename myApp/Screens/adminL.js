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

export default function AdminLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    fetch("http://localhost/Project/myApp/API/adminLogin.php", {
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
         navigation.navigate("Split", {
           screen: "Profile",
           params: { Ibrahim },
         });
        } else {
          alert("Incorrect details");
        }
      })
      .catch((error) => {
        //alert(error);
      });
  };
  return (
    <ImageBackground
    style={styles.container}
    source={require("../assets/login.png")}
    >
        <SafeAreaView>
        <View>
          <Text style={styles.header}>
            Welcome ADMIN! Please Log in to continue
          </Text>
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

        <TouchableOpacity
          style={{
            top: 45,
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
              marginTop: 8,
              fontSize: 18,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
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
    marginTop:-10,
    fontSize: 28,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  textInput: {

    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    color: "black",
    width: '70%',
    height: 50,
    alignSelf: "center",
    fontSize: 18
  },
});
