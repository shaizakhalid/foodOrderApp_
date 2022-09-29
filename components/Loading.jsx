import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const Loading = ({ Loading }) => {
  return (
    <View style={styles.box}>
      <ActivityIndicator />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(92, 0, 122, 0.7)",
    zIndex: 30,
    position: "absolute",
  },
});
