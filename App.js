import React, { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
} from "react-native";
import LoginComponent from "./Login/LoginComponent";
import SignupComponent from "./Signup/SignupComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getAuth } from "firebase/auth";
import { firebase } from "./firebase_config";
import BottomTabs from "./Navigation/BottomTabs";
import SinglePostScreen from "./Screens/SinglePostScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  // const [loading, setLoading] = useState(true)
  // const [user, setUser] = useState(null)

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginComponent}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignupComponent}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Homepage"
            component={BottomTabs}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SinglePost"
            component={SinglePostScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
