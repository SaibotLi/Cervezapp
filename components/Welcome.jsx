import { View, Text, Button } from "react-native-web";
export const Welcome = ({ navigation }) => {
  return (
    <View>
      <Text> Bienvenido a Cervezapp</Text>
      <Button
        title="Iniciar Sesión"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};
