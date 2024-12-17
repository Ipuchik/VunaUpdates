import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Post() {
  const [post, setPost] = useState("");
  const [imageURL, setImageURL] = useState("");

  const unpack = useRoute();
  const username = unpack.params?.Ibrahim.username;
  const password = unpack.params?.Ibrahim.password;
  const age = unpack.params?.Ibrahim.age;
  const email = unpack.params?.Ibrahim.email;

  const submit = () => {
    fetch("http://172.20.10.2/Project/myApp/API/post.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: post,
        image: imageURL,
      }),
    })
      .then((response) => response.json())
      .then((Ibrahim) => {
        if (Ibrahim.msg == "Sent successfully") {
          alert("Sent successfully");
        } else {
          alert("Failed to send");
        }
      })
      .catch((error) => {
        //alert(error);
      });
  };

  return (
    <ImageBackground style={styles.container}>
      <View>
        <Text
          style={{
            textAlign: "center",
            marginTop: -100,
            marginBottom: 10,
            alignSelf: 'center',
            fontSize: 28,
            paddingLeft: 5,
            paddingRight: 5,
            color: 'white',
            fontWeight: "bold"
          }}
        >
          WELCOME BACK {username}
        </Text>
      </View>
      <View style={styles.text}>
        <TextInput
          onChangeText={setPost}
          style={styles.TextInput}
          multiline={true}
          placeholder="Type what you want to post..."
        />
        <TextInput
          onChangeText={setImageURL}
          style={styles.TextInput}
          multiline={true}
          placeholder="Enter image url"
        />
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  TextInput: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    alignSelf: "center",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    textAlign: "justify",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "white",
    marginTop: 20,
    width: 100,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});