import { Link } from "expo-router";
import { View, Text, Image } from "react-native";

export const Welcome = () => {
  return (
    <View>
      <Image source={require("../assets/BeerIcon.png")} />
      <Text> Séptima - Cocina Artesanal </Text>

      <Link href="/login">Iniciar sesión</Link>
      <Link href="/register">Registrarse</Link>
      <Link href="/home">Continuar como invitado</Link>
    </View>
  );
};

export default Welcome;
