import React, { useState, useEffect, useRef } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Edit({ route }) {
  const [Tposts, setTposts] = useState(route.params.selectedPost || []);

  const submit = () => {
    if (post.trim() !== "") {
      fetch("http://localhost/Project/myApp/API/updatePost.php", {
        method: "POST",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: post,
          post_id: post_id,
        }),
      })
        .then((response) => response.json())
        .then((Ibrahim) => {
          if (Ibrahim.msg == "Sent successfully") {
            inputRef.current.clear();
          } else {
            alert("please check your internet connection");
          }
        })
        .catch((error) => {
          //alert(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          source={require("../assets/first2.png")}
          style={styles.backgroundImage}
        >
          <SafeAreaView>
            <View>
              <View style={styles.headContainer} key={Tposts.id}>
                <Text style={styles.postText}>{Tposts.post}</Text>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  postText: {
    fontSize: 40,
    alignSelf: "center",
    marginVertical: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -5,
  },
  contentFiller: {
    flex: 1,
  },

  postContainer: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
  },

  input: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  headContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 20,
    marginTop: 30,
  },
  sendB: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: "grey",
  },
  sendBT: {
    fontWeight: "bold",
    color: "white",
  },
});
