// Crops.jsx

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const cropsData = [
  {
    id: 1,
    image: require("../../assets/crop1.png"),
    status: "İyi",
    harvestDate: "10 Ocak 2024",
  },
  {
    id: 2,
    image: require("../../assets/crop2.png"),
    status: "Orta",
    harvestDate: "15 Ocak 2024",
  },
  {
    id: 3,
    image: require("../../assets/crop3.png"),
    status: "Kötü",
    harvestDate: "20 Ocak 2024",
  },
  {
    id: 4,
    image: require("../../assets/crop4.png"),
    status: "İyi",
    harvestDate: "25 Ocak 2024",
  },
  {
    id: 5,
    image: require("../../assets/crop5.png"),
    status: "Orta",
    harvestDate: "30 Ocak 2024",
  },
];

const Crops = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Crops</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cropsData.map((crop) => (
          <View key={crop.id} style={styles.card}>
            <Image source={crop.image} style={styles.cropImage} />
            <Text style={styles.statusText}>{`Durum: ${crop.status}`}</Text>
            <Text
              style={styles.harvestDateText}
            >{`Hasat Tarihi: ${crop.harvestDate}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde5b6",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(0, 128, 0, 0.3)",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  cropImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  statusText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },
  harvestDateText: {
    fontSize: 14,
    color: "#000",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
  },
  buttonStyle: {
    width: 100,
    backgroundColor: "#6a994e",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
});

export default Crops;
