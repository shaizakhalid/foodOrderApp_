import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../Colors/Colors";

const Button = ({
  text,
  primary,
  secondary,
  onAddPress,
  onLoginPress,
  onRegisterPress,
}) => {
  return (
    <TouchableOpacity
      onPress={
        primary ? onRegisterPress : secondary ? onLoginPress : onAddPress
      }
      style={
        primary
          ? styles.primaryCon
          : secondary
          ? styles.secondaryCon
          : styles.primaryCon
      }
    >
      <Text
        style={
          primary
            ? styles.upPressableText
            : secondary
            ? styles.inPressableText
            : styles.upPressableText
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };

const styles = StyleSheet.create({
  primaryCon: {
    alignSelf: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.PrimaryDark,
    backgroundColor: COLORS.PrimaryDark,
  },
  secondaryCon: {
    alignSelf: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.PrimaryDark,
  },
  upPressableText: {
    margin: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.Greyish,
  },
  inPressableText: {
    margin: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.PrimaryDark,
  },
});
