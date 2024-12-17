import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Welcome({ navigation }) {
  const gotoServ = () => {
    navigation.navigate("Service");
  };
  const gotoPol = () => {
    navigation.navigate("Policy");
  };
  const gotoReg = () => {
    navigation.navigate("Register");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/first2.png")}
    >
      <View>
        <View style={styles.text}>
          <Text style={styles.headText}>Welcome to VUNA UPDATES!</Text>

          <Text style={styles.textBody}>
            Read our{" "}
            <TouchableOpacity style={{ color: "white" }} onPress={gotoPol}>
              <Text style={{ color: "white" }}>privacy policy </Text>
            </TouchableOpacity>
            <Text>Tap accept and continue to accept our</Text>
            <TouchableOpacity style={{ color: "white" }} onPress={gotoServ}>
              <Text style={{ color: "white" }}> Terms of service</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <TouchableOpacity
          onPress={gotoReg}
          style={{
            width: 280,
            height: 50,
            backgroundColor: "white",
            borderRadius: 20,
            alignSelf: "center",
            alignContents: "center",
            top: 90,
            textAlign: "center",
            alignItems: "center",
            paddingTop: 10,
            alignContent: "center",
          }}
        >
          <Text style={{ fontSize: 22 }}>Accept and Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  headText: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -10,
    marginBottom: 20,
    width: '60%',
    alignSelf: "center"
  },
  textBody: {
    textAlign: "center",
    paddingTop: 20,
    width: "60%",
    alignSelf: "center",
    fontSize: 20,
  },
  text: {
    //justifyContent: "center",
  },
});
