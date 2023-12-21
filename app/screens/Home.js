import { useEffect, useState } from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import background from "../../assets/background1.png";
import database from "@react-native-firebase/database";

import { db, ref, onValue } from "../../FirebaseConfig";

function HomeScreen({ navigation }) {
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);

  useEffect(() => {
    const data = ref(db);
    onValue(data, (snapshot) => {
      setTemp(snapshot.val().temp);
      setHumidity(snapshot.val().humid);
      setPressure(snapshot.val().pressure);
    });
  }, [db]);

  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.tempWrapper}>
        <Text style={styles.text}>{temp}</Text>
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
      <Button title="Log Out" onPress={() => navigation.navigate("Login")} />
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  tempWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 150,
    fontWeight: "100",
    textAlign: "right",
    color: "white",
    paddingRight: 35,
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
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
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
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
});
