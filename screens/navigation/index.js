import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../welcomScreen/WelcomeScreen";
import { SplashScreen } from "../SplashScreen";
import { SignInScreen } from "../SignIn/SignInScreen";
import { RegisterScreen } from "../Register/RegisterScreen";
import { HomeScreen } from "../Home/home";
import { Profile } from "../Profile/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
//this will be stack component who will register screens in it
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#fff",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          bottom: 10,
          fontWeight: "bold",
          fontSize: 13,
        },
        tabBarStyle: {
          position: "relative",
          margin: 10,
          height: 70,
          borderRadius: 15,
          backgroundColor: "purple",
          bottom: 10,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "ios-home-outline"}
              size={24}
              color={focused ? "#ffffff" : "#fff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? "#ffffff" : "#fff"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Home"
          component={HomeNav}
          // options={{  }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Nav };

// steps for stack navigation
// first we will make a main NAVIGATION CONTAINER
// it will have a STACK CONTAINER
// and that stack container will register our screen in it.

/***
 * in order to take pic from assets the follow:
 *  https://www.youtube.com/watch?v=gPaBicMaib4&t=390s
 */

/**
 * just like material Material Top Tabs Navigator on whatsapp follow:
 * https://reactnavigation.org/docs/material-top-tab-navigator/
 */
