import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Log Out" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

export default HomeScreen;
