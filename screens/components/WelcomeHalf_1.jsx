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
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo_img: {
    width: 134,
    height: 150,
    marginBottom: 5,
    marginLeft: 20,
  },
  logo_title: {
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "trainOne",
    textAlign: "center",
    marginBottom: 5,
  },
  logo_subtitle: {
    fontSize: 18,
    fontFamily: "poppins",
    textAlign: "center",
  },
});
