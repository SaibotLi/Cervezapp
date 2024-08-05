import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";
import { Welcome } from "./components/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./components/LoginScreen";
import { RegisterScreen } from "./components/RegisterScreen";
import { BeerScreen } from "./components/BeerScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Welcome Screen */}
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ title: "Bienvenido" }}
          />

          {/* Login Screen */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Iniciar Sesión" }}
          />
          {/* Register Screen */}
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "Registrarse" }}
          />
          {/* Beer Recipes Screen */}
          <Stack.Screen
            name="Home"
            component={BeerScreen}
            options={{ title: "Cervezas" }}
          />
          {/* RecipeDetail Screen */}

          {/* Process */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
