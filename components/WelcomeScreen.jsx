import { View, Text, Button, Image, StyleSheet } from "react-native";

export const Welcome = ({ navigation }) => {
  return (
    <View>
      {/* Add an animation that takes the IMG above and adds text and buttons below. */}
      <Image source={require("../assets/BeerIcon.png")} />
      <Text> Séptima - Cocina Artesanal </Text>

      <Button
        title="Iniciar Sesión"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Registrarse"
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        title="Continuar como invitado"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
