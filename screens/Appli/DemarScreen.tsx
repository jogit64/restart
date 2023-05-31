import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { auth } from "../../firebase.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { LinearGradient } from "expo-linear-gradient";

const DemarScreen = () => {
  const [user, setUser] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Récupérer le document de l'utilisateur depuis Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          // Extraire le prénom de l'utilisateur du document
          const userData = userDocSnapshot.data();
          const firstName = userData.firstName;
          setUser({ ...user, firstName });
        } else {
          setUser(user);
        }
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#e9f6ff", "#f8fcff"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        key="1"
      >
        <Image
          source={require("../../assets/images/go11.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        {user ? (
          <Text style={styles.text}>Bonjour, {user.firstName}!</Text>
        ) : (
          <Text style={styles.text}>Pas d'utilisateur connecté.</Text>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    flex: 1,
    fontSize: 20,
  },
  image: {
    flex: 1,
    width: "100%",
  },

  gradient: {
    flex: 1,
    width: "100%",
  },
});

export default DemarScreen;
