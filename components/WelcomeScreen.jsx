import { Link } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

export const Welcome = () => {
  return (
    <View>
      <Image source={require("../assets/BeerIcon.png")} />
      <Text style={styles.title}>Séptima</Text>
      <Text>Cocina Artesanal</Text>

      <Link href="/login">Iniciar sesión</Link>
      <Link href="/register">Registrarse</Link>
      <Link href="/home">Continuar como invitado</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
fontWeight: "bold",
fontSize: 30,
fontFamily: "trainOne"
  }
})

export default Welcome;
