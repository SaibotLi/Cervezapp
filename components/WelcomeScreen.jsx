import { Link } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
{/* COVERS HALF SCREEN */}
    <View style={styles.container_half_1}>
      <Image source={require("../assets/BeerIcon.png")}
    />
      <Text style={styles.logo_title}>Séptima</Text>
      <Text style={styles.logo_subtitle}>Cocina Artesanal</Text>
      </View>
      {/* COVERS THE OTHER HALF */}
      <View style={styles.container_half_2}>
<Text style={styles.logo_subtitle}>¡Bienvenido!</Text>
<Text style={styles.logo_subtitle}>Séptima te acompaña en el elaborado de tu cerveza artesanal con recetas que podrían ayudarte a conseguir la textura y el sabor que estabas persiguiendo.</Text>

<Pressable style={styles.pressable_link}>
      <Link href="/login" style={styles.link_login}>Iniciar sesión</Link>
</Pressable>
<Pressable style={styles.pressable_link}>
      <Link href="/register" style={styles.link_register}>Registrarse</Link>
      </Pressable>
      <Link href="/home" style={styles.link_guest}>Continuar como invitado</Link>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo_title: {
fontWeight: "bold",
fontSize: 40,
fontFamily: "trainOne",
textAlign: "center"
  },
  logo_subtitle: {
    fontSize: 25,
    fontFamily: "poppins",
    textAlign: "center"
  },
  pressable_link: {
    padding: 4,
    margin: 8,
    backgroundColor: "black",
    width: "10%",
    borderRadius: 14,
    // JOIN THEM IN THE SAME X-AXIS AND SPACE-BETWEEN THEM
  },
  link_login: {
    textAlign: "center",
    color: "white"
  },
  link_register: {
        textAlign: "center",
    color: "white"
  },
  link_guest: {
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    width: "100%",
 alignItems: "center",
 justifyContent: "center"
  },
  container_half_1: {
height: "50dvh"
  },
  container_half_2: {
    height: "50dvh",
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // APPLY BORDER
      }
})

export default Welcome;
