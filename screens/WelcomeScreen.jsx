import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeHalf_1 from "./components/WelcomeHalf_1";
import WelcomeHalf_2 from "./components/WelcomeHalf_2";

export const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeHalf_1 />
      <WelcomeHalf_2 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome;
