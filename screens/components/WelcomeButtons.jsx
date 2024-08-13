import { Link } from "expo-router";
import { StyleSheet, View, Pressable } from "react-native";

const WelcomeButtons = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
});

export default WelcomeButtons;
