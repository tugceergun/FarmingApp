// HomeScreen.jsx

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { db, ref, onValue } from "../../FirebaseConfig";

const backgroundColor = "#dde5b6";

function HomeScreen({ navigation }) {
  const [temperature, setTemperature] = useState(23);
  const [humidity, setHumidity] = useState(10);
  const [pressure, setPressure] = useState(20);

  useEffect(() => {
    const data = ref(db);
    onValue(data, (snapshot) => {
      setTemperature(snapshot.val().temperature);
      setHumidity(snapshot.val().humid);
      setPressure(snapshot.val().pressure);
    });
  }, [db]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image
        source={require("../../assets/image.png")}
        style={{ width: 350, height: 300 }}
      />
      <View style={styles.tempWrapper}>
        <Text style={{ textAlign: "center", marginLeft: 20, fontSize: 28 }}>
          Temperature
        </Text>
        <Text style={styles.text}>{temperature}</Text>
      </View>
      <View style={styles.data}>
        <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.humid}>
            <Text styles={styles.dataText}>{humidity}%</Text>
            <Text style={styles.title}>Humidity</Text>
          </View>
          <View style={styles.pressure}>
            <Text styles={styles.dataText}>{pressure}</Text>
            <Text style={styles.title}>Pressure</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Crops")}
        >
          <Text style={styles.buttonText}>Crops</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStorage}
          onPress={() => navigation.navigate("Storage")}
        >
          <Text style={styles.buttonText}>Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonProfile}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempWrapper: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 0,
  },
  text: {
    fontSize: 100,
    fontWeight: "100",
    textAlign: "right",
    color: "white",
    paddingRight: 35,
    marginLeft: 50,
    marginBottom: 0,
  },
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  spacer: {
    height: "30%",
  },
  dataWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 50,
  },
  humid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressure: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dataText: {
    fontSize: 20,
    fontWeight: "200",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#606c38",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
    color: "white",
  },
  buttonStorage: {
    backgroundColor: "#606c38",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  buttonProfile: {
    backgroundColor: "#606c38",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
});

export default HomeScreen;
