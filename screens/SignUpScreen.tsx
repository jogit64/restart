import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";

const SignUpScreen = ({ navigation }) => {
  // Définition des états
  const [activeInput, setActiveInput] = useState("");
  const [isButtonActive, setButtonActive] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  // Fonction pour gérer le focus sur les différents inputs
  // Elle réinitialise aussi l'état isInputValid à false lors du focus
  const handleFocus = (name) => {
    setActiveInput(name);
    setIsInputValid(false);
  };
  // Fonction pour valider le mot de passe
  // Elle vérifie si le mot de passe a au moins 8 caractères
  const validatePassword = (password) => {
    const isValid = password.length >= 8;

    if (isValid) {
      setPasswordError("");
      setIsPasswordValid(true);
    } else {
      setPasswordError("Le mot de passe doit comporter au moins 8 caractères");
      setIsPasswordValid(false);
    }
  };

  // Fonction pour valider l'email
  // Elle vérifie si l'email respecte le format correct
  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValid) {
      setEmailError("");
      setIsEmailValid(true);
    } else {
      setEmailError("Veuillez entrer une adresse e-mail valide");
      setIsEmailValid(false);
    }
  };

  // Fonction pour valider le prénom
  // Elle vérifie si le prénom est non vide
  const validateFirstName = (firstName) => {
    const isValid = firstName !== "";

    if (isValid) {
      setIsFirstNameValid(true);
    } else {
      setIsFirstNameValid(false);
    }
  };

  // Effect pour mettre à jour l'état isButtonActive chaque fois que l'état de validation des champs est modifié
  useEffect(() => {
    setButtonActive(isEmailValid && isPasswordValid && isFirstNameValid);
  }, [isEmailValid, isPasswordValid, isFirstNameValid]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid
      extraScrollHeight={150}
    >
      <LinearGradient
        colors={["#e9f6ff", "#f8fcff"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        key="1"
      >
        <View style={styles.scrollViewContainer}>
          {/* // ! icone man haut */}
          <View style={styles.iconContainer}>
            <Icon name="account" style={styles.icon} />
          </View>

          {/* // ! titre Créer une cpte gratuit */}
          <Text style={styles.titrePrincipal}>Créer un compte gratuit</Text>

          {/* // ! label Prénom + INPUT */}
          <Text style={styles.label}>Prénom</Text>

          <TextInput
            placeholder="Entrez un prénom / pseudo"
            style={[
              styles.input,
              activeInput === "firstName" && styles.activeInput,
              isFirstNameValid && styles.inputValid,
            ]}
            onFocus={() => handleFocus("firstName")}
            onChangeText={(text) => {
              validateFirstName(text);
            }}
          />

          {/* // ! label Email + INPUT */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Entrez une adresse email valide"
            style={[
              styles.input,
              activeInput === "email" && styles.activeInput,
              isEmailValid && styles.inputValid,
            ]}
            onFocus={() => handleFocus("email")}
            onChangeText={(text) => {
              setEmail(text);
              validateEmail(text);
            }}
            value={email}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}

          {/* // ! label Mot de passe + INPUT */}
          <Text style={styles.label}>Mot de passe</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Mot de passe (8 caractères et +)"
              style={[
                styles.input,
                activeInput === "password" && styles.activeInput,
                isPasswordValid && styles.inputValid,
              ]}
              secureTextEntry={!isPasswordVisible}
              onFocus={() => handleFocus("password")}
              onChangeText={(text) => {
                setPassword(text);
                validatePassword(text);
              }}
              value={password}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setPasswordVisibility(!isPasswordVisible)}
            >
              <Icon
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={24}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}

          {/* // ! bouton Créer un cpte gratuit */}
          <TouchableOpacity
            style={[styles.buttonCreer, isButtonActive && styles.buttonActive]}
            onPress={() => {
              /* Mettre la logique d'inscription ici */
            }}
          >
            <Text style={styles.buttonText}>Créer un compte gratuit</Text>
          </TouchableOpacity>

          {/* // ! text Vous avez déjà un cpte */}
          <View>
            <Text style={styles.textDeja}>Vous avez déjà un compte ?</Text>
          </View>

          {/* // ! lien Me connecter */}
          <View>
            <Text
              style={styles.meConnecter}
              onPress={() => navigation.navigate("Login")}
            >
              Me connecter
            </Text>
          </View>

          {/* // ! text et liens CGU */}
          <Text style={styles.textCGU}>
            En vous connectant, vous acceptez nos{"\n"}conditions générales et
            politique de confidentialité
          </Text>
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: 60,
    alignSelf: "center",
  },

  iconContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
    marginVertical: 20,
  },
  label: {
    fontFamily: "roboto700",
    color: "rgba(50,56,106,1)",
    fontSize: 14,
    marginTop: 25,
  },
  input: {
    fontFamily: "roboto",
    color: "#121212",
    height: 55,
    width: 260,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(220,222,235,1)",
    borderRadius: 14,
    padding: 10,
    marginTop: 10,
  },

  activeInput: {
    borderColor: "#6f78bd",
  },

  inputValid: {
    backgroundColor: "#fffac3",
  },

  buttonCreer: {
    width: 260,
    height: 44,
    backgroundColor: "#6f78bd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 20,
  },

  buttonActive: {
    backgroundColor: "blue",
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
    marginTop: 0,
  },

  meConnecter: {
    fontFamily: "roboto700",
    color: "#7078b9",
    fontSize: 14,
    //marginTop: -20,
    textAlign: "center",
    marginVertical: 5,
  },

  textCGU: {
    fontFamily: "roboto",
    color: "rgba(151,155,180,1)",
    fontSize: 11,
    textAlign: "center",
    marginTop: 45,
  },

  errorText: {
    color: "#e95120",
    fontSize: 10,
    paddingLeft: 5,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eyeButton: {
    position: "absolute",
    right: 10,
  },
});

export default SignUpScreen;
