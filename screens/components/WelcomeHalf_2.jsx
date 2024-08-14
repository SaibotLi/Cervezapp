import { useRouter } from "expo-router";
import { Link } from "expo-router";
import { StyleSheet, View, Pressable, Text } from "react-native";
// MANAGE PRESSABLES WITH EXPO-ROUTER ELIMINATE LINKS
const WelcomeHalf_2 = () => {
  const router = useRouter();
  return (
    <View style={styles.container_half_2}>
      <Text style={styles.welcome_text}>¡Bienvenido!</Text>
      <Text style={styles.description_text}>
        Séptima te acompaña en el elaborado de tu cerveza artesanal con recetas
        que podrían ayudarte a conseguir la textura y el sabor que estabas
        persiguiendo.
      </Text>
      <View style={styles.button_container}>
        <Pressable
          style={styles.pressable_link}
          onPress={() => router.push("login")}
        >
          <Text style={styles.link_login}>Iniciar sesión</Text>
        </Pressable>
        <Pressable
          style={styles.pressable_link}
          onPress={() => router.push("register")}
        >
          <Text href="/register" style={styles.link_register}>
            Registrarse
          </Text>
        </Pressable>
      </View>
      <Link href="/home" style={styles.link_guest}>
        Continuar como invitado
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  container_half_2: {
    flex: 1,
    width: "100%",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  welcome_text: {
    fontSize: 25,
    fontFamily: "poppins",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    paddingBottom: 15,
  },
  description_text: {
    fontSize: 20,
    fontFamily: "poppins",
    textAlign: "center",
    marginBottom: 15,
    width: "90%",
  },
  button_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pressable_link: {
    margin: 10,
    backgroundColor: "black",
    width: 175,
    height: 60,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  link_login: {
    color: "white",
    fontSize: 16,
  },
  link_register: {
    color: "white",
    fontSize: 16,
  },
  link_guest: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: "10%",
  },
});

export default WelcomeHalf_2;
