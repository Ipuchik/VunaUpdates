import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function First() {
  
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]); // State to store the posts
  const [refreshing, setRefreshing] = useState(false); // State to manage refreshing
  const [isFetching, setIsFetching] = useState(false); // State to track fetch process

  const gotoCom = (selectedPost) => {
    navigation.navigate("Comment", {
      selectedPost: selectedPost,
    });
  };

  const fetchPosts = () => {
    if (isFetching) {
      return; // Return if already fetching data
    }
    setIsFetching(true); // Set isFetching to true to prevent multiple fetches

    fetch("http://172.20.10.2/Project/myApp/API/get.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.msg === "Successful") {
          const updatedPosts = [...data.post.reverse(), ...posts]; // Combine new posts with existing posts
          setPosts(updatedPosts); // Update the posts state with combined posts
        } else {
          alert(data.msg);
        }
        setIsFetching(false); // Set isFetching back to false after fetching
      })
      .catch((error) => {
        setIsFetching(false); // Set isFetching back to false on error
        //alert("PLEASE CHECK YOUR INTERNET CONNECTION");
      });
  };

  const handleRefresh = () => {
    if (isFetching) {
      return; // Return if already fetching data
    }

    setRefreshing(true); // Set refreshing state to true
    fetchPosts(); // Fetch posts
    setRefreshing(false); // Set refreshing state back to false after fetching
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts

    const interval = setInterval(fetchPosts, 10); // Fetch posts at regular intervals (every 1 seconds)

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  const save = (selectedPost) => {
    fetch("http://172.29.20.65/Project/myApp/API/saved.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: selectedPost.id,
      }),
    })
      .then((response) => response.json())
      .then((Ibrahim) => {
        if (Ibrahim.msg === "Saved") {
          alert("Saved");
        } else {
          alert("please check your internet connection");
        }
      })
      .catch((error) => {
        //alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
          <ImageBackground
            source={require("../assets/first2.png")}
            style={styles.backgroundImage}
          >
            <SafeAreaView>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 28,
                color: "white",
                position: "absolute",
                left: 5,
              }}
            >
              HOMEPAGE
            </Text>
            <Image
              source={require("../assets/badge.png")}
              style={{ width: 50, height: 50, position: "absolute", right: 60 }}
            />
            <View style={styles.contentContainer}>
              <TouchableOpacity onPress={fetchPosts} disabled={isFetching}>
                <View style={styles.iconContainer}>
                  <Icon
                    name="refresh"
                    size={20}
                    color="#C48DC6"
                    style={styles.icons}
                  />
                </View>
                <Text style={styles.title}>Latest Updates</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.commentsContainer}>
              {posts.map((post, index) => (
                <TouchableOpacity onPress={() => gotoCom(post)} key={post.id}>
                  <ImageBackground
                    source={{ uri: post.image }}
                    style={[
                      styles.postContainer,
                      index === 0 && styles.firstPostContainer,
                    ]}
                    key={post.id}
                    blurRadius={3}
                  >
                    <Text style={styles.postText}>{post.post}</Text>
                    <TouchableOpacity
                      onPress={() => save(post)}
                      //key={post.id}
                      style={styles.saveIcon}
                    >
                      <Icon name="bookmark" size={24} color="#C48DC6" />
                    </TouchableOpacity>
                  </ImageBackground>
                </TouchableOpacity>
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
  scrollContent: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    position: "absolute",
    top: -10,
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
  postText: {
    fontSize: 22,
    alignSelf: "center",
    marginVertical: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -5,
    color: "white",
    fontWeight: "bold",
  },
  contentFiller: {
    flex: 1,
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
  firstPostContainer: {
    //marginTop: 200,
  },
  commentsContainer: {
    paddingTop: 50,
    //marginTop: 100,
  },
  saveIcon: {
    paddingTop: 15,
    alignSelf: "center",
  },
});
