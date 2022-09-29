import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../Colors/Colors";

const Password = ({ securePassword, onEyePress, onChangeText }) => {
  return (
    <View style={styles.input}>
      <TextInput secureTextEntry={securePassword} onChangeText= {onChangeText}/>
      <TouchableOpacity onPress={onEyePress}>
        <Ionicons
          style={styles.socialButton}
          name={securePassword === true ? "eye-off-outline" : "eye-outline"}
          size={18}
          color={COLORS.PrimaryLightColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export { Password };

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    marginVertical: 5,
    borderColor: COLORS.PrimaryDark,
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
