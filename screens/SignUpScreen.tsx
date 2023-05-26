import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        //colors={["yellow", "#f8fcff"]}
        colors={["#e9f6ff", "#f8fcff"]}
        style={styles.page}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        key="1"
      >
        <View style={styles.iconContainer}>
          <Icon name="account" style={styles.icon} />
        </View>
        <Text style={styles.titrePrincipal}>Créer un compte gratuit</Text>

        <Text style={styles.label}>Prénom</Text>
        <TextInput
          placeholder="Entrez un prénom / pseudo"
          style={styles.input}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Entrez une adresse email valide"
          style={styles.input}
        />

        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          placeholder="Mot de passe (8 caractères et +)"
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttonCreer}
          onPress={() => {
            /* Mettre la logique d'inscription ici */
          }}
        >
          <Text style={styles.buttonText}>Créer un compte gratuit</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.textDeja}>Vous avez déjà un compte ?</Text>
        </View>
        <View>
          <Text style={styles.meConnecter}>Me connecter</Text>
        </View>
        <Text style={styles.textDeja}>
          En vous connectant, vous aaceptez nos{"\n"}conditions générales et
          politique de confidentialité
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 25,
  },
  page: {
    flex: 1,
    justifyContent: "space-around", // Distribue uniformément les éléments
    paddingBottom: 70,
    paddingTop: 55,
    paddingHorizontal: 40,
  },

  iconContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    //shadowColor: "rgba(253,205,1,0.5)",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 1,
    // shadowRadius: 2,
    // elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center", // Pour centrer l'icône
    marginBottom: -20,
  },
  icon: {
    color: "rgba(253,205,1,1)",
    fontSize: 35,
    padding: 3,
  },
  titrePrincipal: {
    fontFamily: "roboto700",
    color: "rgba(50,56,106,1)",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 10, // Ajoute un peu d'espace au-dessus et en dessous du texte
  },
  label: {
    fontFamily: "roboto700",
    color: "rgba(50,56,106,1)",
    fontSize: 14,
    marginBottom: -30,
    //textAlign: "center",
  },
  input: {
    fontFamily: "roboto",
    color: "#121212",
    height: 45,
    width: 260,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(220,222,235,1)",
    borderRadius: 7,
    padding: 10,
  },

  buttonCreer: {
    width: 260,
    height: 44,
    backgroundColor: "rgba(220,222,235,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "roboto",
  },
  textDeja: {
    fontFamily: "roboto",
    color: "rgba(151,155,180,1)",
    fontSize: 14,
    textAlign: "center",
  },

  meConnecter: {
    fontFamily: "roboto700",
    color: "rgba(50,56,106,1)",
    fontSize: 14,
    marginTop: -20,
    textAlign: "center",
  },
});

export default SignUpScreen;
