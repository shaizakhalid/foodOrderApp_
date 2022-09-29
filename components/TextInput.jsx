import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../Colors/Colors";

const MyTextInput = ({ text, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={text}
    />
  );
};

export { MyTextInput };

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    marginVertical: 5,
    borderColor: COLORS.PrimaryDark,
    padding: 10,
    borderRadius: 10,
    fontSize:16,
  },
});
