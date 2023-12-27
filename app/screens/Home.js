import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

import { db, ref, onValue } from "../../FirebaseConfig";

const backgroundColor = "#dde5b6";

function HomeScreen({ navigation }) {
  const [temp, setTemp] = useState(23);
  const [humidity, setHumidity] = useState(10);
  const [pressure, setPressure] = useState(20);

  useEffect(() => {
    const data = ref(db);
    onValue(data, (snapshot) => {
      setTemp(snapshot.val().temp);
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
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginLeft: 50,
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
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
