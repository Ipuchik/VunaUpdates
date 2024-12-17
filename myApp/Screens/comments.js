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
import { TouchableOpacity } from "react-native";
import { PanResponder } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Comment({ route }) {
  const inputRef = useRef(null);
  const panResponderRef = useRef(null);
  const scrollViewRef = useRef(null);
  let [post, setPost] = useState("");
  const [posts, setPosts] = useState([]); // State to store the posts
  const [post_id, setpostID] = useState(route.params.selectedPost.id);
  const [refreshing, setRefreshing] = useState(false); // State to manage refreshing
  const [Tposts, setTposts] = useState(route.params.selectedPost || []);
  const [activeSlideIndex, setActiveSlideIndex] = useState(-1);

  useEffect(() => {
    // Create the pan responder
    panResponderRef.current = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // Reset the active slide index when a new gesture starts
        setActiveSlideIndex(-1);
      },
      onPanResponderMove: (_, gestureState) => {
        const { dx } = gestureState;
        const slideThreshold = 100; // Adjust this threshold as per your needs

        // Check if the gesture is sliding to the right
        if (dx > slideThreshold) {
          const index = Math.floor(dx / slideThreshold);

          // Update the active slide index if it's different
          if (activeSlideIndex !== index) {
            setActiveSlideIndex(index);
          }
        }
      },
      onPanResponderRelease: () => {
        // Handle the reply action based on the active slide index
        if (activeSlideIndex >= 0) {
          // Perform the reply action for the corresponding message
          handleReply(posts[activeSlideIndex].id);
        }

        // Reset the active slide index
        setActiveSlideIndex(-1);
      },
    });
  }, []);

  const submit = () => {
    if (post.trim() !== "") {
      fetch("http://172.20.10.2/Project/myApp/API/postComments.php", {
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
            setPost("");
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
  const fetchPosts = () => {
    fetch("http://172.20.10.2/Project/myApp/API/getComments.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_id: post_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg === "Successful") {
          setPosts(data.post); // Update the posts state with fetched posts
        } else {
          alert(data.msg);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleRefresh = () => {
    setRefreshing(true); // Set refreshing state to true
    fetchPosts(); // Fetch posts
    setTimeout(() => {
      scrollViewRef.current.scrollToEnd({ animated: true });
      setRefreshing(false); // Set refreshing state back to false after fetching
    }, 100);
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts

    const interval = setInterval(fetchPosts, 1000); // Fetch posts at regular intervals (every 10 seconds)
    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);
  const handleContentSizeChange = () => {
    scrollViewRef.current.scrollToEnd({
      animated: true,
    });
    // Scroll to the bottom when content size changes
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        onContentSizeChange={handleContentSizeChange}
      >
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

            <View style={styles.commentsContainer}>
              {posts.map((post) => (
                <View
                  style={[
                    styles.messageBubble,
                    post.sender === "user1"
                      ? styles.user1Bubble
                      : styles.user2Bubble,
                  ]}
                  key={post.id}
                  {...panResponderRef.current.panHandlers}
                >
                  <Text style={styles.commentText}>{post.post}</Text>
                </View>
              ))}
            </View>

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.input}>
                <TextInput
                  style={styles.TextInput}
                  multiline={true}
                  onChangeText={setPost}
                  ref={inputRef}
                  placeholder="Type a message..."
                />
                <TouchableOpacity onPress={submit} style={styles.sendB}>
                  <Text style={styles.sendBT}>Send</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
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
    fontSize: 22,
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

  commentText: {
    fontSize: 16,
  },
  firstPostContainer: {
    marginTop: -200,
  },
  commentsContainer: {
    flex: 1,
    padding: 10,
  },
  contentFiller: {
    flex: 1,
  },
  TextInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    borderRadius: 7,
    padding: 10,
    marginRight: 10,
    backgroundColor: "white",
  },
  icons: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 240,
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
  username: {
    fontSize: 14,
    paddingTop: 5,
  },
  messageBubble: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: "70%",
  },
  user1Bubble: {
    alignSelf: "flex-start",
    backgroundColor: "#d5e8d4",
  },
  user2Bubble: {
    alignSelf: "flex-end",
    backgroundColor: "#ebebeb",
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
