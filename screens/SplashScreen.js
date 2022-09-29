import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../Colors/Colors";
import logo from "../assets/images/Logo.png";
import { Button } from "../components/Button";
import firebase from "firebase";

const SplashScreen = ({ navigation }) => {
  /**
   * to make the user login once and then navigate to home
   * when user open app for 2nd time
   *
   * asyncStorage is a option for that:
   * https://react-native-async-storage.github.io/async-storage/docs/install
   */
  //  firebase own function to check if user already login
  // if(firebase.auth().currentUser !== null){
  //   navigation.replace('Home')
  // }
  return (
    <TouchableOpacity
      style={styles.mainCon}
      onPress={() => {
        navigation.replace("Welcome");
      }}
    >
      <View style={styles.bgCon}>
        <Image source={logo} style={styles.img} />
        <Button text={"Get Started!"} />
      </View>
    </TouchableOpacity>
  );
};

export { SplashScreen };

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
  },
  bgCon: {
    flex: 1,
    backgroundColor: COLORS.PrimaryLight,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 200,
  },
});
