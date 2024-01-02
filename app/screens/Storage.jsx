// Storage.jsx

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

const seedData = [
  {
    id: 1,
    name: "Buğday",
    quantity: "100 kg",
    image: require("../../assets/seed1.png"),
  },
  {
    id: 2,
    name: "Mısır",
    quantity: "80 kg",
    image: require("../../assets/seed2.png"),
  },
  {
    id: 3,
    name: "Pamuk",
    quantity: "120 kg",
    image: require("../../assets/seed3.png"),
  },
  {
    id: 4,
    name: "Arpa",
    quantity: "60 kg",
    image: require("../../assets/seed4.png"),
  },
  {
    id: 5,
    name: "Yulaf",
    quantity: "90 kg",
    image: require("../../assets/seed5.png"),
  },
  {
    id: 6,
    name: "Pirinç",
    quantity: "110 kg",
    image: require("../../assets/seed6.png"),
  },
  {
    id: 7,
    name: "Ayçiçeği",
    quantity: "75 kg",
    image: require("../../assets/seed7.png"),
  },
  {
    id: 8,
    name: "Şeker Pancarı",
    quantity: "85 kg",
    image: require("../../assets/seed8.png"),
  },
];

const Storage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Storage</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {seedData.map((seed) => (
          <View key={seed.id} style={styles.card}>
            <Image source={seed.image} style={styles.seedImage} />
            <Text style={styles.seedName}>{seed.name}</Text>
            <Text
              style={styles.quantityText}
            >{`Quantity: ${seed.quantity}`}</Text>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "rgba(0, 128, 0, 0.3)",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: "column",
    alignItems: "center",
    width: "48%",
  },
  seedImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  seedName: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5,
  },
  quantityText: {
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

export default Storage;
