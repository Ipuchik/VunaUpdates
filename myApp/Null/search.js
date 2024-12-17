import { ImageBackground, View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
export default function Search() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ImageBackground
            source={require("../assets/register.png")}
            style={styles.backgroundImage}
            resizeMode="repeat"
          >
            <TextInput style={styles.search} placeholder="Search for updates" />
            <TouchableOpacity>
              <Ionicons
                Icon
                name="search"
                size={30}
                color="grey"
                style={{ left: "80%", position: "absolute", top: -30 }}
              />
            </TouchableOpacity>
            <View style={styles.contentFiller} />
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
  },
  contentFiller: {
    flex: 1,
  },
  search: {
    backgroundColor: "white",
    width: "80%",
    height: "8%",
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 50,
  },
});