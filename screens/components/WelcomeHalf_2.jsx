import { Link } from "expo-router";
import { StyleSheet, View, Pressable, Text } from "react-native";

const WelcomeHalf_2 = () => {
  return (
    <View style={styles.container_half_2}>
      <Text style={styles.welcome_text}>¡Bienvenido!</Text>
      <Text style={styles.description_text}>
        Séptima te acompaña en el elaborado de tu cerveza artesanal con recetas
        que podrían ayudarte a conseguir la textura y el sabor que estabas
        persiguiendo.
      </Text>
      <View style={styles.button_container}>
        <Pressable style={styles.pressable_link}>
          <Link href="/login" style={styles.link_login}>
            Iniciar sesión
          </Link>
        </Pressable>
        <Pressable style={styles.pressable_link}>
          <Link href="/register" style={styles.link_register}>
            Registrarse
          </Link>
        </Pressable>
      </View>
      <Link href="/home" style={styles.link_guest}>
        Continuar como invitado{" "}
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  container_half_2: {
    height: "50dvh",
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
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
  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  pressable_link: {
    padding: 4,
    margin: 8,
    backgroundColor: "black",
    width: "25%",
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  link_login: {
    color: "white",
    fontSize: 16,
    marginTop: 6,
  },
  link_register: {
    color: "white",
    fontSize: 16,
    marginTop: 6,
  },
  link_guest: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 12,
  },
});

export default WelcomeHalf_2;
