import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonPurple(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.meConnecter}>
        {props.meConnecter || "Créer un compte gratuit"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(111,120,189,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
    flexWrap: "nowrap"
  },
  meConnecter: {
    color: "rgba(255,255,255,1)",
    fontSize: 17
  }
});

export default CupertinoButtonPurple;
