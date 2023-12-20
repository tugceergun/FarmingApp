import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import background from "../../assets/background1.png"

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground 
       source={background}
       style={styles.container}>
        <View style={styles.tempWrapper}>
          <Text style={styles.text}>75</Text>
        </View>
      </ImageBackground>
      <Button title="Log Out" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent:"center",
  },
  tempWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 150,
    fontWeight: "100",
    textAlign: "center",
    color:"white",
  },
});
