import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// Main component
export default function Profile() {
  const navigation = useNavigation();
  const gotoAcct = () => {
    navigation.navigate("Account", unpack.params);
  };
  const unpack = useRoute();
  const username = unpack.params?.Ibrahim.username;
  const password = unpack.params?.Ibrahim.password;
  const age = unpack.params?.Ibrahim.age;
  const email = unpack.params?.Ibrahim.email;

  const gotoSett = () => {
    navigation.navigate("Settings");
  };
  const gotoSupp = () => {
    const phoneNumber = "+2349021659980";
    const message = "Hello, what do you need support with? ";
    Linking.openURL(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  };
  const gotoRate = () => {
    const packageName = "com.yourpackagename";
    // Replace with your app's package name
    Linking.openURL(`market://details?id=${packageName}`);
  };
  const gotoFaq = () => {
    navigation.navigate("Faq");
  };
  const gotoLog = () => {
    alert("Logged out successfully");
    navigation.navigate("Login");
  };
  const invite = () => {
    const appLink =
      "https://play.google.com/store/apps/details?id=com.yourpackagename"; // Replace with your app's Play Store link
    const message = `Psst...Youuu YES You🫵🏿! Heard the news? Want to be the first to know what's happening in VUNA💣? Look no further than the VUNA UPDATES APP!📣 Get the juiciest gossip📲💥, hottest events👊🥳, and the freshest news (even partiess🤘🏻😍) Download it ASAP 🚀 @ : ${appLink}`;
    Linking.openURL(`https://wa.me/?text=${encodeURIComponent(message)}`);
  };
  const report = () => {
    const phoneNumber = "+2349021659980";
    const message = "Hello, what do you want to report? ";
    Linking.openURL(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <View style={styles.top}>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../assets/front.png")}
        >
          <SafeAreaView>
            <View>
              <TouchableOpacity>
                <View style={styles.pro}>
                  <Ionicons
                    Icon
                    name="person-outline"
                    size={100}
                    color="#000"
                  />

                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "white",
                      position: "absolute",
                      left: "53.5%",
                      top: 75,
                      borderRadius: 90,
                      alignItems: "center",
                      paddingTop: 5,
                    }}
                  >
                    <Ionicons name="camera" size={30} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.wel}>
              <Text style={styles.text}>
                Welcome! {username} to your Profile page
              </Text>
            </View>

            <TouchableOpacity onPress={gotoAcct}>
              <View style={styles.acct}>
                <TouchableOpacity>
                  <Icon
                    name="pencil"
                    size={35}
                    color="#FFA500"
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <Text style={styles.proText}>Edit Account</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={gotoSett}>
              <View style={styles.sett}>
                <TouchableOpacity>
                  <Ionicons
                    name="md-settings"
                    size={35}
                    color="#555"
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <Text style={styles.proText}>Settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={gotoSupp}>
              <View style={styles.supp}>
                <TouchableOpacity>
                  <Ionicons
                    name="md-chatbox-ellipses"
                    size={35}
                    color="#AD00FF"
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <Text style={styles.proText}>Support</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={gotoFaq}>
              <View style={styles.faq}>
                <TouchableOpacity>
                  <Icon
                    name="question"
                    size={35}
                    color="#999"
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <Text style={styles.proText}>FAQ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={gotoRate}>
              <View style={styles.rate}>
                <TouchableOpacity>
                  <Icon
                    name="star"
                    size={35}
                    color="#FFD700"
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <Text style={styles.proText}>Rate Us</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={invite}>
              <View style={styles.invi}>
                <TouchableOpacity>
                  <Ionicons
                    name="md-person-add"
                    size={35}
                    color="#FF5722"
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <Text style={styles.proText}>Invite a friend</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={report}>
              <View style={styles.repo}>
                <TouchableOpacity>
                  <Ionicons
                    name="md-alert-circle"
                    size={35}
                    color="#FF0000"
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <Text style={styles.proText}>Report an issue</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={gotoLog}>
              <View style={styles.log}>
                <TouchableOpacity>
                  <Ionicons
                    name="md-log-out"
                    size={35}
                    color="#00D1FF"
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <Text style={styles.proText}>Log out</Text>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
// the external styling that comes with react native
const styles = StyleSheet.create({
  top: {
    flex: 1,
  },
  wel:{
    marginBottom: 30,
  },
  container: {
    flexGrow: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  pro: {
    height: 120,
    width: 130,
    backgroundColor: "white",
    position: "absolute",
    left: "32%",
    top: 10,
    borderRadius: 90,
    alignItems: "center",
    paddingTop: 5,
    alignSelf: "center",
  },
  text: {
    position: "absolute",
    left: "7%",
    top: 148,
    fontSize: 16,
    fontWeight: "bold",
    width: 320,
  },
  acct: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 240,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  sett: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 240,
    marginTop: 70.5,
    backgroundColor: "#fff",
  },
  supp: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 240,
    marginTop: 141,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  rate: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 240,
    marginTop: 212,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  invi: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 240,
    marginTop: 282.5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  repo: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 240,
    marginTop: 353,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  faq: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 240,
    marginTop: 424,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  log: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 240,
    marginTop: 494.5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  bio: {
    width: "60%",
    height: 60,
    position: "absolute",
    top: 175,
    left: "20%",
  },
  proText: {
    fontSize: 22,
    marginTop: 25,
    marginLeft: 18,
  },
  line: {
    width: "100%",
    backgroundColor: "black",
    height: 0.5,
    marginTop: 18,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 5,
  },
  icons: {
    position: "absolute",
    left: "83%",
    paddingTop: 12,
    paddingRight: 50,
  },
});
