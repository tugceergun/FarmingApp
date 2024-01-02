import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Login from "./app/screens/Login";

import HomeScreen from "./app/screens/Home";
import CropScreen from "./app/screens/Crops";
import StorageScreen from "./app/screens/Storage";
import ProfileScreen from "./app/screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Crops" component={CropScreen} />
        <Stack.Screen name="Storage" component={StorageScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
