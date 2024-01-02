import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [workerInfo, setWorkerInfo] = useState({
    task: "Çiftlikte Çalışan İşçi",
    age: 25,
    workingHours: "09:00 - 17:00",
  });

  useEffect(() => {
    const auth = FIREBASE_AUTH;
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser({
        email: currentUser.email,
        uid: currentUser.uid,
      });
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
    } catch (error) {
      console.log("Logout Error: ", error.message);
    }
  };

  const getProfilePicture = () => {
    if (user?.email === "ismailemirr54@gmail.com") {
      return require("../../assets/profile_picture.png");
    } else if (user?.email === "tugceergunn0@gmail.com") {
      return require("../../assets/profile_picture2.png");
    } else {
      // Varsayılan profil resmi
      return require("../../assets/default_profile_picture.png");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={getProfilePicture()} style={styles.profileImage} />
      <Text style={styles.email}>{user?.email}</Text>

      {/* İşçi bilgileri */}
      <Text style={styles.workerInfo}>{`Görev: ${workerInfo.task}`}</Text>
      <Text style={styles.workerInfo}>{`Yaş: ${workerInfo.age}`}</Text>
      <Text
        style={styles.workerInfo}
      >{`Çalışma Saatleri: ${workerInfo.workingHours}`}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dde5b6",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
  },
  workerInfo: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#6a994e",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#dde5b6",
    fontSize: 18,
  },
});

export default Profile;
