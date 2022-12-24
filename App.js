import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#FDE633", "#FDBD2C"]}
        style={styles.background}
      />
      <View style={[styles.autowidth, styles.header]}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View style={[styles.autowidth, styles.content]}>
        <Button
          title="Phonics Book 1"
          buttonStyle={{ borderRadius: 50 }}
          onPress={() => navigation.navigate("Phonics 1")}
        />{" "}
      </View>
      <View style={[styles.autowidth, styles.footer]}></View>

      <StatusBar style="auto" />
    </View>
  );
}

function Phonics_1() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Phonics 1</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Phonics 1" component={Phonics_1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
