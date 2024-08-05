import { View, Text, Button, Image } from "react-native-web";

export const Welcome = ({ navigation }) => {
  return (
    <View>
      <Text> Bienvenido a Cervezapp</Text>
      <Image source={require("../assets/BeerIcon.png")} />
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
