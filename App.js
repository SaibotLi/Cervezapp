import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
  // Import fonts
  useFonts({
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "poppins-medium": require("../assets/fonts/Poppins-Medium.ttf"),
    poppinssemibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    trainOne: require("../assets/fonts/TrainOne-Regular.ttf"),
    allertaStencil: require("../assets/fonts/AllertaStencil-Regular.ttf"),
  });

  // Run app
  return (
    <SafeAreaProvider>
      {/* Welcome Screen */}

      {/* Login Screen */}

      {/* Register Screen */}
      <Stack />
      {/* Beer Recipes Screen */}

      {/* RecipeDetail Screen */}

      {/* Process */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
