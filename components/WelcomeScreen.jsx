import { Link } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
{/* COVERS HALF SCREEN */}
    <View>
      <Image source={require("../assets/BeerIcon.png")} />
      <Text style={styles.logo_title}>Séptima</Text>
      <Text style={styles.logo_subtitle}>Cocina Artesanal</Text>
      </View>
      {/* COVERS THE OTHER HALF */}
      <View>
<Text>¡Bienvenido!</Text>
<Text>Séptima te acompaña en el elaborado de tu cerveza artesanal con recetas que podrían ayudarte a conseguir la textura y el sabor que estabas persiguiendo.</Text>
      <Link href="/login">Iniciar sesión</Link>
      <Link href="/register">Registrarse</Link>
      <Link href="/home">Continuar como invitado</Link>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo_title: {
fontWeight: "bold",
fontSize: 40,
fontFamily: "trainOne"
  },
  logo_subtitle: {
    fontSize: 25,
    fontFamily: "poppins"
  }
})

export default Welcome;
