import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button.jsx";
import { MyTextInput } from "../../components/TextInput.jsx";
import { COLORS } from "../../Colors/Colors";
import { Social } from "../../components/Social.jsx";
import { Password } from "../../components/Password.jsx";
import { loginWithFirebase } from "../../services/firebaseAuthHelper.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInScreen = ({ navigation }) => {
  const [securePassword, setSecurePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEyePressed = () => {
    setSecurePassword(!securePassword);
  };
  const onRegisterButtonPress = () => {
    navigation.replace("Register");
  };

  const onLoginButtonPress = () => {
    if (email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      loginWithFirebase(email, password, navigation);
    }
  };


  
  return (
    <>
      <View style={styles.mainCon}>
        <View style={styles.heading}>
          <Text style={styles.headingtext}>Welcome!</Text>
          <Text style={styles.paraText}>Sign in and get Started </Text>
        </View>
        <ScrollView style={{ flex: 0.8, paddingTop: 30 }}>
          <View style={styles.infoCon}>
            <Text>Username</Text>
            <MyTextInput onChangeText={setEmail} />
            <Text>Password</Text>
            <Password
              securePassword={securePassword}
              onEyePress={onEyePressed}
              onChangeText={setPassword}
            />

            <Button
              text="Sign In"
              secondary
              onLoginPress={onLoginButtonPress}
            />

            <TouchableOpacity>
              <Text style={styles.forgetButton}> Forget Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Social}>
            <Social />
          </View>

          <View style={styles.signUpCon}>
            <Button
              text="Sign Up"
              primary
              onRegisterPress={onRegisterButtonPress}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export { SignInScreen };

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: COLORS.PrimaryLight,
  },
  heading: {
    flex: 0.2,
    justifyContent: "center",
    backgroundColor: "white",
    paddingLeft: 20,
    borderBottomRightRadius: 60,
    borderWidth: 1,
    borderColor: COLORS.PrimaryLightColor,
  },
  infoCon: {
    flex: 5,
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
  },
  Social: {
    padding: 20,
    flex: 2,
  },
  signUpCon: {
    padding: 20,
    flex: 2,
  },
  headingtext: {
    fontSize: 27,
    fontWeight: "bold",
    color: COLORS.PrimaryDark,
  },
  paraText: {
    fontSize: 15,
  },
  forgetButton: {
    color: COLORS.PrimaryDark,
    alignSelf: "center",
  },
});
