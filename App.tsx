import { StatusBar } from "expo-status-bar";

import { Component, useEffect } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Svg, { Ellipse } from "react-native-svg";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import PagerView from "react-native-pager-view";
import Swiper from "react-native-swiper";

//import CupertinoButtonPurple from "./components/CupertinoButtonPurple";
//import MaterialButtonViolet from "./components/MaterialButtonViolet";
// import MaterialButtonSuccess from "./components/MaterialButtonSuccess";
// import ButtonCroyances from "./components/ButtonCroyances";
// import MaterialButtonPurple from "./components/MaterialButtonPurple";

import MaterialButtonViolet1 from "./components/MaterialButtonViolet1";
import MaterialButtonViolet3 from "./components/MaterialButtonViolet3";

import IoniconsIcon from "react-native-vector-icons/Ionicons";

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

export default function App() {
  //* ------------------------------------------------------------
  //* A CONSERVER GESTION SPLASHSCREEN ET FONTS
  //* ------------------------------------------------------------

  const [fontsLoaded] = useFonts({
    // Lemon: require("./assets/fonts/lemon-regular.ttf"),
    roboto: require("./assets/fonts/roboto-regular.ttf"),
    // roboto700: require("./assets/fonts/roboto-700.ttf"),
    // "roboto-700": require("./path-to-fonts/Roboto-700.ttf"),
    // "roboto-regular": require("./path-to-fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  //* ------------------------------------------------------------
  //* FIN DE A CONSERVER
  //* ------------------------------------------------------------

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      {/* 2/3 of the screen *********************************************************/}

      <View style={{ flex: 2 }}>
        <Swiper
          showsButtons={false}
          showsPagination={true}
          dotColor="#dcdeeb"
          activeDotColor="#6f78bd"
          loop={false}
        >
          {/* Each child view of Swiper represents a page */}
          <LinearGradient
            colors={["yellow", "#f8fcff"]}
            //colors={["#e9f6ff", "#f8fcff"]}
            style={styles.page}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            key="1"
          >
            <Text style={styles.pageTitle}>Page 1</Text>
            <Text style={styles.pageContent}>
              Ceci est un exemple de contenu pour la première page.
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={["#e9f6ff", "#f8fcff"]}
            style={styles.page}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            key="2"
          >
            <Text style={styles.pageTitle}>Page 2</Text>
            <Text style={styles.pageContent}>
              Ceci est un exemple de contenu pour la deuxième page.
            </Text>
          </LinearGradient>
          {/* Add more views as needed */}
          <LinearGradient
            colors={["#e9f6ff", "#f8fcff"]}
            style={styles.page}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            key="3"
          >
            <Text style={styles.pageTitle}>Page 3</Text>
            <Text style={styles.pageContent}>
              Ceci est un exemple de contenu pour la troisième page.
            </Text>
          </LinearGradient>
        </Swiper>
      </View>

      {/* 1/3 of the screen *********************************************************/}

      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(111,120,189,1)"
        />

        <MaterialButtonViolet1
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet1>
        <MaterialButtonViolet3
          style={styles.materialButtonViolet3}
        ></MaterialButtonViolet3>
      </View>
    </View>
  );
}

//-----------------------------------------------------------------
// LES STYLES
//-----------------------------------------------------------------

const styles = StyleSheet.create({
  //* Style du conteneur ------------------------------------------
  container: {
    flex: 1,
    //backgroundColor: "#f9fdff",
  },

  //* Style du haut slide 2/3 -------------------------------------

  //* Style du bas fixe 1/3 ---------------------------------------
  materialButtonViolet1: {
    height: 55,
    width: 312,
    backgroundColor: "rgba(111,120,189,1)",
    //shadowColor: "rgba(0,0,0,1)",
    // shadowOffset: {
    //   width: 3,
    //   height: 3,
    // },
    //elevation: 5,
    // shadowOpacity: 0.01,
    // shadowRadius: 0,
    borderRadius: 11,
    marginTop: 40,
    alignSelf: "center",
  },
  materialButtonViolet3: {
    height: 55,
    width: 312,
    backgroundColor: "rgba(255,255,255,1)",
    //shadowColor: "rgba(225,228,235,1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 11,
    marginTop: 21,
    alignSelf: "center",
  },

  page: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "100%",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pageContent: {
    fontSize: 16,
    marginTop: 10,
  },
});
