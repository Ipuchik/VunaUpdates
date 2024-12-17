import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Profile from "./profile";
import Saved from "./saved";
import First from "./first";


export default function Join({ Ibrahim }) {
  const navigation = useNavigation();
  const Tab = createMaterialBottomTabNavigator();

  React.useEffect(() => {
    // Navigate to the First page
    navigation.navigate("First");
  }, []);

  return (
    <Tab.Navigator shifting={true} sceneAnimationEnabled={false}>
      <Tab.Screen
        name="First"
        component={First}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        component={() => <Profile Ibrahim={Ibrahim} />}
      />
    </Tab.Navigator>
  );
}
