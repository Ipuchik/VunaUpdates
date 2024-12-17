import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Saved({ navigation }) {

  const [posts, setPosts] = useState([]);
  
  const getSaved = () => {
    fetch("http://192.168.182.201/Project/myApp/API/getSaved.php")
      .then((response) => response.json())
      .then((Ibrahim) => {
        if (Ibrahim.msg === "Refreshed") {
          const updatedPosts = [...Ibrahim.Spost.reverse(), ...posts];
          setPosts(updatedPosts);
        } else {
          alert("please check your internet connection");
        }
      })
      .catch((error) => {
        //alert(error);
      });
  };
  useEffect(() => {
    getSaved();
    const interval = setInterval(getSaved, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // const gotoCom = (selectedPost) => {
  //   navigation.navigate("Comment", { selectedPost: selectedPost });
  // };
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
          <ImageBackground
            source={require("../assets/first.png")}
            style={styles.backgroundImage}
            //resizeMode="repeat"
            >
            <SafeAreaView>
            <View style={styles.contentContainer}>
              <TouchableOpacity onPress={getSaved}>
                <View style={styles.iconContainer}>
                  <Icon
                    name="refresh"
                    size={20}
                    color="#C48DC6"
                    style={styles.icons}
                  />
                </View>
                <Text style={styles.title}>Refresh</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.commentsContainer}>
              {posts.map((Spost, index) => (
                //<TouchableOpacity onPress={() => gotoCom(Spost)} key={Spost.id}>
                <View
                  //source={{ uri: post.image }}
                  style={[
                    styles.postContainer,
                    index === 0 && styles.firstPostContainer,
                  ]}
                  key={Spost.id}
                >
                  <Text style={styles.postText}>{Spost.post}</Text>
                </View>
                // </TouchableOpacity>
              ))}
            </View>

            <View style={styles.contentFiller} />
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
  commentsContainer: {
    paddingTop: 50,
    marginTop: 100,
  },
  postContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 20,
  },
  postText: {
    fontSize: 22,
    alignSelf: "center",
    marginVertical: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -5,
    color: "black",
  },
  firstPostContainer: {
    marginTop: -100,
  },
  scrollContent: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
  },
  contentFiller: {
    flex: 1,
  },
  contentContainer: {
    position: "absolute",
    top: -15,
    zIndex: 2,
    alignItems: "center",
    paddingVertical: 20,
    alignSelf: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#EBDCEE",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    marginTop: -2,
  },
});
