import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Post from "./post";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import AdminProfile from "./AdminProfile";
import Manageposts from "./Manageposts";

export default function Split({ Ibrahim }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        component={() => <AdminProfile Ibrahim={Ibrahim} />}
      />
      <Tab.Screen name="Posts" component={Manageposts} />
      <Tab.Screen name="Post Updates" component={Post} />
    </Tab.Navigator>
  );
}
