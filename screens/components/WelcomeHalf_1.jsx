import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const WelcomeHalf_1 = () => {
  return (
    <View style={styles.container_half_1}>
      <Image
        source={require("../../assets/BeerIcon.png")}
        style={styles.logo_img}
      />
      <Text style={styles.logo_title}>Séptima</Text>
      <Text style={styles.logo_subtitle}>Cocina Artesanal</Text>
    </View>
  );
};

export default WelcomeHalf_1;

const styles = StyleSheet.create({
  container_half_1: {
    height: "50dvh",
    width: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo_img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  logo_title: {
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "trainOne",
    textAlign: "center",
    marginBottom: 10,
  },
  logo_subtitle: {
    fontSize: 18,
    fontFamily: "poppins",
    textAlign: "center",
    marginBottom: 20,
  },
});
