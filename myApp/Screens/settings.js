import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { ImageBackground } from "react-native";

const languageData = [
  { id: 1, language: "English" },
  { id: 2, language: "More languages to come..." },
];

export default function Settings({navigation}) {
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [emailNotificationEnabled, setEmailNotificationEnabled] =
    useState(true);
  const [deviceNotificationEnabled, setDeviceNotificationEnabled] =
    useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [preferredLanguage, setPreferredLanguage] = useState("English");
  const [fontSize, setFontSize] = useState("Medium");
  const [displaySettings, setDisplaySettings] = useState("Standard");
  const [modalVisible, setModalVisible] = useState(false);

  const handleNotificationToggle = () => {
    setNotificationEnabled((prevValue) => !prevValue);
  };

  const handleEmailNotificationToggle = () => {
    setEmailNotificationEnabled((prevValue) => !prevValue);
  };

  const handleDeviceNotificationToggle = () => {
    setDeviceNotificationEnabled((prevValue) => !prevValue);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled((prevValue) => !prevValue);
  };

  const handleLanguagePress = () => {
    setModalVisible(true);
  };
  
  const handleLanguageSelect = (language) => {
    setPreferredLanguage(language);
    setModalVisible(false);
  };

  const handleFontSizePress = () => {
    // to implement font size adjustment functionality
  };

  const handleDisplaySettingsPress = () => {
    // to implement display settings adjustment functionality
  };

  const save = () =>{
    alert("Saved successfully")
    navigation.navigate("Profile")
  }
  return (
    <ImageBackground
      source={require("../assets/register.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Preferred Language</Text>
            <FlatList
              data={languageData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageItem}
                  onPress={() => handleLanguageSelect(item.language)}
                >
                  <Text>{item.language}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity onPress={handleLanguagePress}>
          <Text style={styles.section}>
            Preferred Language: {preferredLanguage}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFontSizePress}>
          <Text style={styles.section}>Adjust Font Size: {fontSize}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDisplaySettingsPress}>
          <Text style={styles.section}>
            Display Settings: {displaySettings}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNotificationToggle}>
          <Text style={styles.section}>Notification Settings</Text>
        </TouchableOpacity>

        <View style={styles.option}>
          <Text>Enable Notifications</Text>
          <Switch
            value={notificationEnabled}
            onValueChange={handleNotificationToggle}
          />
        </View>
        {notificationEnabled && (
          <>
            <View style={styles.option}>
              <Text>Email Notifications</Text>
              <Switch
                value={emailNotificationEnabled}
                onValueChange={handleEmailNotificationToggle}
              />
            </View>
            <View style={styles.option}>
              <Text>Device Notifications</Text>
              <Switch
                value={deviceNotificationEnabled}
                onValueChange={handleDeviceNotificationToggle}
              />
            </View>
          </>
        )}

        <TouchableOpacity onPress={handleDarkModeToggle}>
          <Text style={styles.section}>Dark Mode</Text>
        </TouchableOpacity>

        <View style={styles.option}>
          <Text>Enable Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={handleDarkModeToggle}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={save}>
          <Text style={styles.buttonText} onPress={save}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 5,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  languageItem: {
    paddingVertical: 10,
  },
  modalCloseButton: {
    marginTop: 20,
  },
  modalCloseButtonText: {
    fontSize: 18,
    color: "blue",
  },
  button: {
    backgroundColor: "#EBDCEE",
    padding: 10,
    borderRadius: 15,
    marginTop: 40,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
