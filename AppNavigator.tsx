// AppNavigator.tsx
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import HomeScreen from "./screens/Home/HomeScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import SignUpScreen from "./screens/Auth/SignUpScreen";
import CGUScreen from "./screens/Conditions/CGUScreen";
import PolitiqueScreen from "./screens/Conditions/PolitiqueScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS, // Utiliser l'effet de transition iOS par défaut sur toutes les plateformes
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CGU"
        component={CGUScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Politique"
        component={PolitiqueScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
