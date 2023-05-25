import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nom d'utilisateur" style={styles.input} />
      <TextInput
        placeholder="Mot de passe"
        style={styles.input}
        secureTextEntry
      />
      <Button
        title="Se connecter"
        onPress={() => {
          /* Mettre la logique de connexion ici */
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default LoginScreen;
