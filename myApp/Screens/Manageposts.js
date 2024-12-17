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

export default function Manageposts() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]); // State to store the posts
  const [refreshing, setRefreshing] = useState(false); // State to manage refreshing
  const [isFetching, setIsFetching] = useState(false); // State to track fetch process

  const gotoEdit = (selectedPost) => {
    navigation.navigate("Edit", {
      selectedPost: selectedPost,
    });
  };

  const fetchPosts = () => {
    if (isFetching) {
      return; // Return if already fetching data
    }
    setIsFetching(true); // Set isFetching to true to prevent multiple fetches

    fetch("http://localhost/Project/myApp/API/get.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.msg === "Successful") {
          const updatedPosts = [...data.post.reverse(), ...posts];
          setPosts(updatedPosts);
        } else {
          alert(data.msg);
        }
        setIsFetching(false); 
      })
      .catch((error) => {
        setIsFetching(false);
      });
  };

  const handleRefresh = () => {
    if (isFetching) {
      return; 
    }

    setRefreshing(true); 
    fetchPosts(); 
    setRefreshing(false);
  };

  useEffect(() => {
    fetchPosts(); 

    const interval = setInterval(fetchPosts, 10); 
    return () => {
      clearInterval(interval);
    };
  }, []);

  const save = (selectedPost) => {
    fetch("http://localhost/Project/myApp/API/delete.php", {
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
        if (Ibrahim.msg === "Deleted") {
          alert("Deleted successfully");
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
              Manage Posts
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
                <TouchableOpacity onPress={() => gotoEdit(post)} key={post.id}>
                  <ImageBackground
                    source={{ uri: post.image }}
                    style={[
                      styles.postContainer,
                      index === 0 && styles.firstPostContainer,
                    ]}
                    key={post.id}
                    blurRadius={3}
                  >
                    <Text style={styles.postText}>{post.id} - {post.post}</Text>
                    <TouchableOpacity
                      onPress={() => save(post)}
                      key={post.id}
                      style={styles.saveIcon}
                    >
                      <Icon name="remove" size={28} color="#C48DC6" />
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
  commentsContainer: {
    paddingTop: 50,
  },
  saveIcon: {
    paddingTop: 10,
    alignSelf: "flex-end",
  },
});
