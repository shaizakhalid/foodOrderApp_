import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../../Colors/Colors";
import { Button } from "../../components/Button";
import logo from "../../assets/images/Logo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WelcomeScreen = ({ navigation }) => {
  const onRegisterButtonPress = () => {
    navigation.navigate("Register");
  };

  const onLoginButtonPress = () => {
    navigation.navigate("Login");
  };

  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem("@isUserLoggedIn");
      console.log(value);
      if (value === "true") {
        console.log(value);
        navigation.replace("Home");
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  }, []);
  return (
    <View style={styles.mainCon}>
      <View style={styles.imgCon}>
        <Image style={styles.img} source={logo} />
      </View>
      <View style={styles.textCon}>
        <Text style={styles.headingtext}>Welcome!</Text>
        <Text style={styles.paraText}>
          Log in with your data that you entered duing Your Registration.
        </Text>
      </View>
      <View style={styles.buttonCon}>
        <Button
          text="Sign Up"
          primary
          onRegisterPress={onRegisterButtonPress}
        />
        <Button text="Sign In" secondary onLoginPress={onLoginButtonPress} />
      </View>
    </View>
  );
};

export { WelcomeScreen };

const styles = StyleSheet.create({
  mainCon: {
    flex: 5,
    color: COLORS.PrimaryLight,
  },
  imgCon: {
    flex: 2.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textCon: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonCon: {
    flex: 1.5,
    alignItems: "center",
  },
  img: {
    width: 250,
    height: 300,
    resizeMode: "center",
  },
  headingtext: {
    fontSize: 30,
    fontWeight: "bold",
  },
  paraText: {
    fontSize: 15,
  },
});
