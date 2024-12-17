import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Front from "./Screens/front";
import Welcome from "./Screens/welcome";
import Register from "./Screens/register";
import Login from "./Screens/login";
import Policy from "./Screens/policy";
import Service from "./Screens/service";
import Join from "./Screens/join";
import Verify from "./Screens/verify";
import Account from "./Screens/account";
import Settings from "./Screens/settings";
import Faq from "./Screens/faq";
import Forgot from "./Screens/forgot";
import * as stack from "@react-navigation/stack";
import PasswordVerify from "./Screens/passwordVerify";
import Npassword from "./Screens/Npassword";
import Comment from "./Screens/comments";
import AdminLogin from "./Screens/adminL";
import Split from "./Screens/split";
import Edit from "./Screens/edit";
const Nav = stack.createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Group screenOptions={{ headerShown: false }}>
          {/* <Nav.Screen component={Front} name="Front" /> */}
          {/* <Nav.Screen component={Welcome} name="Welcome" /> */}
          {/* <Nav.Screen component={Register} name="Register" /> */}
          <Nav.Screen component={Login} name="Login" />
        </Nav.Group>

        <Nav.Group>
          {/* <Nav.Screen component={Verify} name="Verify" /> */}
          {/* <Nav.Screen component={Forgot} name="Forgot" /> */}
          {/* <Nav.Screen component={PasswordVerify} name="Password Verification" /> */}
          {/* <Nav.Screen component={Npassword} name="Npassword" /> */}
          {/* <Nav.Screen component={Policy} name="Policy" /> */}
          {/* <Nav.Screen component={Service} name="Service" /> */}
          {/* <Nav.Screen component={Account} name="Account" /> */}
          {/* <Nav.Screen component={Faq} name="Faq" /> */}
          <Nav.Screen component={Settings} name="Settings" />
          {/* <Nav.Screen component={AdminLogin} name="AdminLogin" /> */}
        </Nav.Group>

        <Nav.Group screenOptions={{ headerShown: false }}>
          <Nav.Screen component={Join} name="Join"/>
          <Nav.Screen component={Split} name="Split" />
        </Nav.Group>

        <Nav.Screen name="Edit" component={Edit} />
        <Nav.Screen component={Comment} name="Comment" />
      </Nav.Navigator>
    </NavigationContainer>
  );
}
