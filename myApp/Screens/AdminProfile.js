import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
export default function AdminProfile() {
  let [username, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [id, setId] = useState("");

  const unpack = useRoute();
  const username1 = unpack.params?.Ibrahim.username;
  const password1 = unpack.params?.Ibrahim.password;
  const email1 = unpack.params?.Ibrahim.email;

  const submit = () => {
    fetch("http://localhost/Project/myApp/API/updateAdmin.php", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username ? username : username1,
        password: password ? password : password1,
        age: age ? age : age1,
        email: email ? email : email1,
        id: id1,
      }),
    })
      .then((response) => response.json())
      .then((Ibrahim) => {
        if (Ibrahim.id) {
          alert("Updated Successfully ");
          username1 = Ibrahim.username;
          password1 = Ibrahim.password;
          age1 = Ibrahim.age;
          email1 = Ibrahim.email;

          navigation.navigate("Profile", { Ibrahim });
        } else {
          alert("Error updating user data ");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
        underlineColorAndroid="transparent" 
          style={styles.textInput}
          placeholder={username1}
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInput}
          placeholder={email1}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder={password1}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>
      <View>
        <Text style={styles.btnUpdate}>Update</Text>
        <Text style={styles.btnLogout}>Log out</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    paddingTop: "30%",
  },
  textInput: {
    alignSelf: "center",
    backgroundColor: "transparent",
    marginTop: 30,
    width: "80%",
    height: 50,
    fontSize: 20,
    padding: 10,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    outlineStyle: 'none'
  },
  btnUpdate: {
    backgroundColor: "blue",
    width: "60%",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 2,
    fontWeight: 500,
    fontSize: 25,
    marginTop: 25,
  },
  btnLogout: {
    backgroundColor: "red",
    width: "60%",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 2,
    fontWeight: 500,
    fontSize: 25,
    marginTop: 25,
  },
});
