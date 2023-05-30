import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { auth } from "../../firebase.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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
      {user ? (
        <Text style={styles.text}>Bonjour, {user.firstName}!</Text>
      ) : (
        <Text style={styles.text}>Pas d'utilisateur connecté.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default DemarScreen;
