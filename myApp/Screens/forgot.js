import { useState } from "react";
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Forgot({ navigation }) {
  const gotoLog = () => {
    navigation.navigate("Login");
  };
  const [email, setEmail] = useState("");

  const submit = () => {
    fetch("http://localhost/Project/myApp/API/forgot.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((Ibrahim) => {
        if (Ibrahim == "Invalidemail") {
          alert("Invalid email");
        } else if (Ibrahim.message == "Sent_successfully") {
          alert("An email with a code was sent to your mail");
          navigation.navigate("passwordVerify", { Ibrahim });
        } else if (Ibrahim.message == "Email_not_found") {
          alert("Email not found");
        } else if (Ibrahim.message == "retype") {
          alert("Please go back and retype your email");
        }
      })
      .catch((error) => {
      });
  };

  return (
    <ImageBackground
      style={styles.bImage}
      source={require("../assets/first.png")}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>
            Ops! please type in your email so we can help you recover your
            account
          </Text>
          <TextInput
            placeholder="Enter email address"
            style={styles.textInput}
            onChangeText={setEmail}
          ></TextInput>
        </View>
        <View>
          <TouchableOpacity style={styles.input} onPress={gotoLog}>
            <Text style={styles.input_text}>Remembered password?</Text>
          </TouchableOpacity>
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
  color: 'white'
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
