import { Link } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeButtons from "./components/WelcomeButtons";
export const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* COVERS HALF SCREEN */}
      <View style={styles.container_half_1}>
        <Image
          source={require("../assets/BeerIcon.png")}
          style={styles.logo_img}
        />
        <Text style={styles.logo_title}>Séptima</Text>
        <Text style={styles.logo_subtitle}>Cocina Artesanal</Text>
      </View>
      {/* COVERS THE OTHER HALF */}
      <View style={styles.container_half_2}>
        <Text style={styles.welcome_text}>¡Bienvenido!</Text>
        <Text style={styles.description_text}>
          Séptima te acompaña en el elaborado de tu cerveza artesanal con
          recetas que podrían ayudarte a conseguir la textura y el sabor que
          estabas persiguiendo.
        </Text>
        <WelcomeButtons />
        <Link href="/home" style={styles.link_guest}>
          Continuar como invitado{" "}
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo_title: {
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "trainOne",
    textAlign: "center",
    marginBottom: 10,
  },
  logo_subtitle: {
    fontSize: 18,
    fontFamily: "poppins",
    textAlign: "center",
    marginBottom: 20,
  },
  link_guest: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 12,
  },
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container_half_1: {
    height: "50dvh",
    width: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container_half_2: {
    height: "50dvh",
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo_img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcome_text: {
    fontSize: 25,
    fontFamily: "poppins",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description_text: {
    fontSize: 16,
    fontFamily: "poppins",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default Welcome;
