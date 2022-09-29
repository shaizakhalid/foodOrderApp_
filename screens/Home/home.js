import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Text,
  Button,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { Card } from "../../components/card";
import { AddNewBookModel } from "../../components/addBookModel";

const HomeScreen = () => {
  const [show, setShow] = useState(false);

  function onClosePressed() {
    setShow(!show);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <FloatingAction
          color="purple"
          onPressMain={() => {
            setShow(!show);
          }}
        />
      </View>
      <AddNewBookModel show={show} onAddPressed={onClosePressed} />
    </SafeAreaView>
  );
};

export { HomeScreen };
const styles = StyleSheet.create({});
