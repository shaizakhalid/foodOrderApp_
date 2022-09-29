import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Social = () => {
  return (
    <View style={styles.socialCon}>
      <TouchableOpacity style={styles.socialTouchable}>
        <AntDesign
          style={styles.socialButton}
          name="facebook-square"
          size={24}
          color="blue"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialTouchable}>
        <AntDesign
          style={styles.socialButton}
          name="google"
          size={24}
          color="tomato"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialTouchable}>
        <AntDesign
          style={styles.socialButton}
          name="twitter"
          size={24}
          color="purple"
        />
      </TouchableOpacity>
    </View>
  );
};

export { Social };

const styles = StyleSheet.create({
  socialCon: {
    flex: 1,
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignSelf: "center",
  },

  socialTouchable: {
    justifyContent: "center",
  },
  socialButton: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
  },
});
