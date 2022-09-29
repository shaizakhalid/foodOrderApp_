import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { MyTextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";
import { Social } from "../../components/Social";
import { COLORS } from "../../Colors/Colors";
import { Password } from "../../components/Password";
import Loading from "../../components/Loading";
import { firestore } from "../../services/firebaseHelper";
import { attemptoRegisterNewUser } from "../../services/firebaseAuthHelper";

const RegisterScreen = ({ navigation }) => {
  const [securePassword, setSecurePassword] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailName] = useState("");
  const [password, setPasswordName] = useState("");
  const [loading, setLoading] = useState("");

  const onRegisterButtonPress = () => {
    if (
      firstName === "" ||
      lastName === " " ||
      email === "" ||
      password === "" 
    ) {
      alert("Please fill all fields");
    } else {
      attemptoRegisterNewUser(email, password, firstName, lastName, navigation);

    }
  };

  const onEyePressed = () => {
    setSecurePassword(!securePassword);
  };
  const onLoginButtonPress = () => {
    navigation.replace("Login");
  };
  return (
    <>
      <View style={styles.mainCon}>
        <View style={styles.heading}>
          <Text style={styles.headingtext}>Register Yourself!</Text>
          <Text style={styles.paraText}>Register Yourself and get Started</Text>
        </View>
        <ScrollView style={{ paddingTop: 20 }}>
          <View style={styles.infoCon}>
            <View style={styles.nameCon}>
              <View style={{ width: "45%" }}>
                <Text>FirstName</Text>
                <MyTextInput onChangeText={setFirstName} />
              </View>
              <View style={{ width: "45%" }}>
                <Text>LastName</Text>
                <MyTextInput onChangeText={setLastName} />
              </View>
            </View>
            <Text>Email</Text>
            <MyTextInput onChangeText={setEmailName} />
            <Text>Password</Text>
            <Password
              securePassword={securePassword}
              onEyePress={onEyePressed}
              onChangeText={setPasswordName}
            />
            <Button
              text="Sign Up"
              primary
              onRegisterPress={onRegisterButtonPress}
            />

            <TouchableOpacity>
              <Text style={styles.forgetButton}> Forget Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.Social}>
          <Social />
        </View>
        <View style={styles.signUpCon}>
          <Button text="Sign In" secondary onLoginPress={onLoginButtonPress} />
        </View>
      </View>
    </>
  );
};

export { RegisterScreen };

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: COLORS.PrimaryLight,
  },
  heading: {
    flex: 2,
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
  nameCon: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  signUpCon: {
    flex: 2,
  },
  Social: {
    flex: 1,
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
