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
// * imports pour le bas
import MaterialButtonViolet1 from "./components/screenLancement/bottompart/MaterialButtonViolet1";
import MaterialButtonViolet3 from "./components/screenLancement/bottompart/MaterialButtonViolet3";

// * imports pour le haut p1
import MaterialButtonSuccess from "./components/screenLancement/swiper1/MaterialButtonSuccess";
import MaterialButtonPurple from "./components/screenLancement/swiper1/MaterialButtonPurple";
import MaterialButtonSuccess1 from "./components/screenLancement/swiper1/MaterialButtonSuccess1";

import IoniconsIcon from "react-native-vector-icons/Ionicons";

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

export default function App() {
  //* ------------------------------------------------------------
  //* A CONSERVER GESTION SPLASHSCREEN ET FONTS
  //* ------------------------------------------------------------

  const [fontsLoaded] = useFonts({
    lemon: require("./assets/fonts/lemon-regular.ttf"),
    roboto: require("./assets/fonts/roboto-regular.ttf"),
    roboto700: require("./assets/fonts/roboto-700.ttf"),
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

      <View style={{ flex: 3 }}>
        <Swiper
          showsButtons={false}
          showsPagination={true}
          dotColor="#dcdeeb"
          activeDotColor="#6f78bd"
          loop={false}
        >
          {/* Each child view of Swiper represents a page */}
          {/*  // ! *********** swiper volet 1 ********** */}
          <LinearGradient
            //colors={["yellow", "#f8fcff"]}
            colors={["#e9f6ff", "#f8fcff"]}
            style={styles.page}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            key="1"
          >
            <View style={styles.container}>
              <Text style={styles.titrePrincipal}>
                Sortez d&#39;une émotion {"\n"}inconfortable
              </Text>
              <Text style={styles.sousTitre}>
                Des questions pour vous aider à vous désifdentifier de vos
                croyances et désamorcer vos pensées et émotions limitantes
              </Text>
              <View style={styles.ellipseMStackStackStack}>
                <View style={styles.ellipseMStackStack}>
                  <View style={styles.ellipseMStack}>
                    <Svg viewBox="0 0 60.48 60.48" style={styles.ellipseM}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(220,235,254,1)"
                        cx={30}
                        cy={30}
                        rx={30}
                        ry={30}
                      ></Ellipse>
                    </Svg>
                    <Svg
                      viewBox="0 0 36.82 36.82"
                      style={[styles.ellipseP, { marginTop: -50 }]}
                    >
                      <Ellipse
                        strokeWidth={0}
                        fill="rgba(220,235,254,1)"
                        cx={18}
                        cy={18}
                        rx={18}
                        ry={18}
                      ></Ellipse>
                    </Svg>
                    <View style={styles.groupBoutonEmotions}>
                      <MaterialButtonSuccess
                        style={styles.materialButtonSuccess}
                      ></MaterialButtonSuccess>
                    </View>
                  </View>
                  <View style={styles.groupBoutonPensees}>
                    <MaterialButtonPurple
                      style={styles.boutonPensees}
                    ></MaterialButtonPurple>
                  </View>
                </View>
                <View style={styles.ellipseGStack}>
                  <Svg viewBox="0 0 145.95 145.95" style={styles.ellipseG}>
                    <Ellipse
                      strokeWidth={0}
                      fill="rgba(220,235,254,0.67)"
                      cx={73}
                      cy={73}
                      rx={73}
                      ry={73}
                    ></Ellipse>
                  </Svg>
                  <View style={styles.groupBoutonCroyances}>
                    <MaterialButtonSuccess1
                      style={styles.boutonCroyances}
                    ></MaterialButtonSuccess1>
                  </View>
                  <View style={styles.groupRestart}>
                    <View style={styles.re3Row}>
                      <Text style={styles.re3}>re·</Text>
                      <Text style={styles.start}>start</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>

          {/*  // ! *********** swiper volet 2 ********** */}
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

          {/*  // ! *********** swiper volet 3 ********** */}
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
    justifyContent: "center", // Centrer horizontalement
    alignItems: "center",
  },

  //* Style du haut slide 2/3 -------------------------------------
  // ! swiper1 *****************************
  titrePrincipal: {
    fontFamily: "roboto700",
    color: "rgba(50,56,106,1)",
    fontSize: 22,
    textAlign: "center",
    marginTop: 130,
    //marginLeft: 73,
  },
  sousTitre: {
    fontFamily: "roboto",
    color: "rgba(151,155,180,1)",
    width: 300,
    height: 60,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 6,
    //marginLeft: 25,
  },
  ellipseM: {
    top: 54,
    left: 105,
    width: 60,
    height: 60,
    position: "absolute",
  },
  groupBoutonEmotions: {
    top: 0,
    left: 0,
    width: 123,
    height: 116,
    position: "absolute",
  },
  materialButtonSuccess: {
    height: 89,
    width: 100,
    transform: [
      {
        rotate: "-18.00deg",
      },
    ],
    borderRadius: 16,
    marginTop: 55,
    marginLeft: 31,
  },
  ellipseMStack: {
    top: 54,
    left: 0,
    width: 165,
    height: 116,
    position: "absolute",
  },
  ellipseP: {
    top: 112,
    left: 3,
    width: 37,
    height: 37,
    position: "absolute",
  },
  groupBoutonPensees: {
    top: 0,
    left: 122,
    width: 116,
    height: 108,
    position: "absolute",
  },
  boutonPensees: {
    height: 89,
    width: 100,
    transform: [
      {
        rotate: "25.00deg",
      },
    ],
    borderRadius: 16,
    backgroundColor: "rgba(126,134,199,1)",
    marginTop: 9,
    marginLeft: -19,
  },
  ellipseMStackStack: {
    top: 92,
    left: 52,
    width: 238,
    height: 170,
    position: "absolute",
  },
  ellipseG: {
    top: 0,
    left: 0,
    width: 146,
    height: 146,
    position: "absolute",
  },
  groupBoutonCroyances: {
    top: 40,
    left: 45,
    width: 111,
    height: 102,
    position: "absolute",
  },
  boutonCroyances: {
    height: 89,
    width: 100,
    transform: [
      {
        rotate: "-2.00deg",
      },
    ],
    backgroundColor: "rgba(59,173,199,1)",
    borderRadius: 16,
    marginTop: 60,
    marginLeft: -18,
  },
  groupRestart: {
    top: 28,
    left: 59,
    width: 174,
    height: 52,
    position: "absolute",
    flexDirection: "row",
  },
  re3: {
    fontFamily: "lemon",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
  },
  start: {
    fontFamily: "lemon",
    color: "#121212",
    fontSize: 40,
  },
  re3Row: {
    height: 52,
    flexDirection: "row",
    flex: 1,
    marginTop: -10,
  },
  ellipseGStack: {
    top: 0,
    left: 0,
    width: 233,
    height: 146,
    position: "absolute",
  },
  ellipseMStackStackStack: {
    width: 290,
    height: 262,
    marginTop: -437,
    marginLeft: 34,
  },

  // ! swiper2 *****************************
  // ! swiper3 *****************************

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
    marginTop: 5,
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
