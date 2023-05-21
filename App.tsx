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

import CupertinoButtonPurple from "./components/CupertinoButtonPurple";
import MaterialButtonViolet from "./components/MaterialButtonViolet";
import MaterialButtonSuccess from "./components/MaterialButtonSuccess";
import MaterialButtonSuccess1 from "./components/MaterialButtonSuccess1";
import MaterialButtonPurple from "./components/MaterialButtonPurple";

import IoniconsIcon from "react-native-vector-icons/Ionicons";

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

export default function App() {
  //* ------------------------------------------------------------
  //* A CONSERVER GESTION SPLASHSCREEN ET FONTS
  //* ------------------------------------------------------------
  const [fontsLoaded] = useFonts({
    Lemon: require("./assets/fonts/lemon-regular.ttf"),
    Roboto: require("./assets/fonts/roboto-regular.ttf"),
    Roboto700: require("./assets/fonts/roboto-700.ttf"),
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
      {/* 2/3 of the screen */}
      <View style={{ flex: 2 }}>
        <PagerView style={{ flex: 1 }} initialPage={0}>
          {/* Each child view of PagerView represents a page */}
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
        </PagerView>
      </View>

      {/* 1/3 of the screen */}
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          // backgroundColor="rgba(255,255,255,1)"
          backgroundColor="red"
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,252,255,1)",
  },
  cupertinoButtonPurple: {
    height: 44,
    width: 312,
    borderRadius: 11,
    marginTop: 10,
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
