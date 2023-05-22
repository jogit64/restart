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

import Svg, { Ellipse } from "react-native-svg";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import PagerView from "react-native-pager-view";
import Swiper from "react-native-swiper";

import CupertinoButtonPurple from "./components/CupertinoButtonPurple";
import MaterialButtonViolet from "./components/MaterialButtonViolet";
import MaterialButtonSuccess from "./components/MaterialButtonSuccess";
import ButtonCroyances from "./components/ButtonCroyances";
import MaterialButtonPurple from "./components/MaterialButtonPurple";

import IoniconsIcon from "react-native-vector-icons/Ionicons";

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

export default function App() {
  //* ------------------------------------------------------------
  //* A CONSERVER GESTION SPLASHSCREEN ET FONTS
  //* ------------------------------------------------------------

  const [fontsLoaded] = useFonts({
    // Lemon: require("./assets/fonts/lemon-regular.ttf"),
    // Roboto: require("./assets/fonts/roboto-regular.ttf"),
    Roboto700: require("./assets/fonts/roboto-700.ttf"),
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
          <View style={styles.page} key="1">
            <Text style={styles.pageTitle}>Page 1</Text>
            <Text style={styles.pageContent}>
              Ceci est un exemple de contenu pour la première page.
            </Text>
          </View>
          <View style={styles.page} key="2">
            <Text style={styles.pageTitle}>Page 2</Text>
            <Text style={styles.pageContent}>
              Ceci est un exemple de contenu pour la deuxième page.
            </Text>
          </View>
          {/* Add more views as needed */}
          <View style={styles.page} key="3">
            <Text style={styles.pageTitle}>Page 3</Text>
            <Text style={styles.pageContent}>
              Ceci est un exemple de contenu pour la troisième page.
            </Text>
          </View>
        </Swiper>
      </View>

      {/* 1/3 of the screen *********************************************************/}

      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(111,120,189,1)"
        />

        <CupertinoButtonPurple
          caption="Créer un compte gratuit"
          style={styles.cupertinoButtonPurple}
        ></CupertinoButtonPurple>

        <MaterialButtonViolet
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet>
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
    backgroundColor: "rgba(233,246,255,1)",
  },

  //* Style du haut slide 2/3 -------------------------------------

  //* Style des dots ----------------------------------------------

  dots: {
    height: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  activeDot: {
    backgroundColor: "blue",
  },
  inactiveDot: {
    backgroundColor: "gray",
  },

  //* Style du bas fixe 1/3 ---------------------------------------
  cupertinoButtonPurple: {
    height: 44,
    width: 312,
    borderRadius: 11,
    marginTop: 80,
    marginLeft: 24,
  },
  materialButtonViolet: {
    height: 44,
    width: 312,
    backgroundColor: "#fff",
    borderRadius: 11,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 22,
    marginBottom: 50,
    marginLeft: 24,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
