import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function Phonics() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("./assets/png/phonics_1_5.png")}
      />
    </View>
  );
}

export default Phonics;

const styles = StyleSheet.create({
  tinyLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  headerTextTitle: {
    fontFamily: "Lexend-Medium",
    fontSize: 48,
    textAlign: "center",
  },
  headerTextSubtitle: {
    fontFamily: "Lexend-Black",
    fontSize: 36,
    textAlign: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#333",
  },
  autowidth: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 2,
    border: "1px solid #f00",
  },
  content: {
    flex: 5,
    border: "1px solid #0f0",
  },
  footer: {
    flex: 1,
    border: "1px solid #00f",
  },
});
