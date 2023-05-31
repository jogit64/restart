import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { authStyles } from "./authStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const LoginScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    Keyboard.dismiss(); // ferme le clavier
    try {
      setIsLoading(true); // démarre l'indicateur de chargement

      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Demar");
      // Naviguer vers la prochaine page ou faire quelque chose avec l'utilisateur
      // Par exemple, vous pouvez récupérer plus d'informations sur l'utilisateur à partir de Firestore
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        // Vous pouvez utiliser ces informations comme vous le souhaitez
        // Par exemple, vous pouvez naviguer vers un autre écran avec ces informations
      } else {
        // Gérer le cas où l'utilisateur est null
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);

      var errorCode = error.code;
      var errorMessage = error.message;

      // Gestion d'erreur spécifique pour un email non trouvé
      if (errorCode === "auth/user-not-found") {
        setEmailError(
          "Il n'y a pas d'utilisateur correspondant à cet identifiant.\nL'utilisateur peut avoir été supprimé."
        );
      }
      // Gestion d'erreur pour un mot de passe invalide
      else if (errorCode === "auth/wrong-password") {
        setPasswordError(
          "Le mot de passe est invalide\nou l'utilisateur n'a pas de mot de passe."
        );
      }
      // Gestion d'erreur pour un e-mail invalide
      else if (errorCode === "auth/invalid-email") {
        setEmailError("L'adresse e-mail n'est pas valide.");
      }
    }
    setIsLoading(false); // arrête l'indicateur de chargement
  };

  // Définition des états
  const [activeInput, setActiveInput] = useState("");
  const [isButtonActive, setButtonActive] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  //const [isFirstNameValid, setIsFirstNameValid] = useState(false);

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

  useEffect(() => {
    setButtonActive(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  return (
    <View style={authStyles.container}>
      <ScrollView>
        <LinearGradient
          colors={["#e9f6ff", "#f8fcff"]}
          style={authStyles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          key="1"
        >
          <View style={authStyles.scrollViewContainer}>
            {/* // ! icone man haut */}
            <View style={authStyles.iconContainer}>
              <Icon name="login" style={authStyles.icon} />
            </View>

            {/* // ! titre Créer une cpte gratuit */}
            <Text style={authStyles.titrePrincipal}>
              Connectez-vous{"\n"}à votre compte
            </Text>

            {/* // ! label Email + INPUT */}
            <Text style={authStyles.label}>Email</Text>
            <TextInput
              placeholder="Entrez une adresse email valide"
              style={[
                authStyles.input,
                activeInput === "email" && authStyles.activeInput,
                isEmailValid ? authStyles.inputValid : null,
              ]}
              onFocus={() => handleFocus("email")}
              onChangeText={(text) => {
                setEmail(text);
                validateEmail(text);
              }}
              value={email}
            />

            {emailError ? (
              <Text style={authStyles.errorText}>{emailError}</Text>
            ) : null}

            {/* // ! label Mot de passe + INPUT */}
            <Text style={authStyles.label}>Mot de passe</Text>
            <View style={authStyles.passwordContainer}>
              <TextInput
                placeholder="Mot de passe (8 caractères et +)"
                style={[
                  authStyles.input,
                  activeInput === "password" && authStyles.activeInput,
                  isPasswordValid && authStyles.inputValid,
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
                style={authStyles.eyeButton}
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
              <Text style={authStyles.errorText}>{passwordError}</Text>
            ) : null}

            {/* // ! Mot de passe oublié  ?*/}
            <View>
              <Text style={authStyles.passForgot}>Mot de passe oublié ?</Text>
            </View>

            {/* // ! bouton Créer un cpte gratuit */}
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : null}
            <TouchableOpacity
              style={[
                authStyles.buttonCreer,
                isButtonActive ? authStyles.buttonActive : null,
              ]}
              onPress={handleLogin}
            >
              <Text style={authStyles.buttonText}>Me connecter</Text>
            </TouchableOpacity>

            {/* // ! text Pas de cpte  ?*/}
            <View>
              <Text style={authStyles.textDeja}>Pas de compte ?</Text>
            </View>

            {/* // ! lien Inscrivez-vous */}
            <View>
              <Text
                style={authStyles.meConnecter}
                onPress={() => navigation.navigate("SignUp")}
              >
                Inscrivez-vous
              </Text>
            </View>

            {/* // ! text et liens CGU */}
            <TouchableOpacity onPress={() => navigation.navigate("CGU")}>
              <Text style={authStyles.textCGU}>
                En vous connectant, vous acceptez nos{"\n"}
                <Text
                  style={authStyles.linkText}
                  onPress={() => navigation.navigate("CGU")}
                >
                  conditions générales
                </Text>{" "}
                et{" "}
                <Text
                  style={authStyles.linkText}
                  onPress={() => navigation.navigate("Politique")}
                >
                  politique de confidentialité
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
