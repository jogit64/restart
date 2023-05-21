import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.re5Row}>
        <Text style={styles.re5}>re·</Text>
        <Text style={styles.start}>Start</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.manbStack}>
          <Image
            source={require("../assets/images/manb.png")}
            resizeMode="contain"
            style={styles.manb}
          ></Image>
          <Image
            source={require("../assets/images/sil1.png")}
            resizeMode="contain"
            style={styles.man0}
          ></Image>
        </View>
      </View>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 104.57 104.57" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={52}
            cy={52}
            rx={52}
            ry={52}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/images/sil1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(74,144,226,1)"
  },
  re5: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 46,
    transform: [
      {
        rotate: "-9.00deg"
      }
    ],
    lineHeight: 30,
    marginTop: 29
  },
  start: {
    fontFamily: "lemon-regular",
    color: "#121212",
    fontSize: 67,
    marginLeft: 2
  },
  re5Row: {
    height: 87,
    flexDirection: "row",
    marginTop: 140,
    marginLeft: 55,
    marginRight: 56
  },
  group: {
    width: 204,
    height: 200,
    marginTop: 167,
    marginLeft: 38
  },
  manb: {
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  man0: {
    top: 0,
    left: 4,
    width: 200,
    height: 200,
    position: "absolute"
  },
  manbStack: {
    width: 204,
    height: 200
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 109,
    height: 109,
    position: "absolute",
    opacity: 0.35
  },
  image: {
    top: 19,
    left: 12,
    width: 70,
    height: 70,
    position: "absolute",
    opacity: 0.47
  },
  ellipseStack: {
    width: 109,
    height: 109,
    marginTop: -333,
    marginLeft: 195
  }
});

export default Untitled;
