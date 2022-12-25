import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

function HomeScreen({ navigation }) {
  SplashScreen.preventAutoHideAsync();

  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts
        await Font.loadAsync({
          "Lexend-Medium": require("./assets/fonts/Lexend-Medium.ttf"),
          "Lexend-Black": require("./assets/fonts/Lexend-Black.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <LinearGradient
        colors={["#FDE633", "#FDBD2C"]}
        style={styles.background}
      />
      <View style={[styles.autowidth, styles.header]}>
        <Text style={styles.headerTextTitle}>English World</Text>
        <Text style={styles.headerTextSubtitle}>Online</Text>
      </View>
      <View style={[styles.autowidth, styles.content]}>
        <Button
          title="Phonics Book 1"
          buttonStyle={{ borderRadius: 50 }}
          onPress={() => navigation.navigate("Phonics 1")}
        />
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
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Phonics 1" component={Phonics_1} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
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
