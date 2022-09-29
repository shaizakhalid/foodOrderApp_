import Modal from "react-native-modal";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { MyTextInput } from "../components/TextInput";
import { Picker } from "@react-native-picker/picker";
import { COLORS } from "../Colors/Colors";
import * as ImagePicker from "expo-image-picker";
import firebase from "../services/firebaseHelper";

function AddNewBookModel({ show, onClosePressed }) {
  const [selectedDish, setSelectedDish] = useState();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      // aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    } else {
      console.log("image not getting");
    }
  };

  const uploadTheImage = async () => {
    console.log("inside upload");
    let storageDishRef = firebase.storage().ref("dishes/");

    let img = await fetch(image);
    let imgBlob = await img.blob();

    storageDishRef
      .child(name)
      .put(imgBlob)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Modal isVisible={show}>
      <ScrollView
        style={{ height: "80%", backgroundColor: "white", padding: 20 }}
      >
        <Text style={styles.heading}> Add a New Dish</Text>
        <MyTextInput text={"Dish Name"} onChangeText={setName} />
        <MyTextInput text={"Description"} onChangeText={setDescription} />
        <MyTextInput text={"Price"} onChangeText={setPrice} />
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedDish}
            dropdownIconColor={"purple"}
            onValueChange={(itemValue, itemIndex) => setSelectedDish(itemValue)}
          >
            <Picker.Item label="Select a category" value="0" color="grey" />
            <Picker.Item label="Pizza" value="pizze" />
            <Picker.Item label="Rice" value="rice" />
            <Picker.Item label="Salad" value="salad" />
            <Picker.Item label="Drinks" value="drinks" />
          </Picker>
        </View>
        <View style={styles.imgPicker}>
          <TouchableOpacity
            onPress={pickImage}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text> Pick an image</Text>
            <Ionicons name="image" size={22} color="purple" />
          </TouchableOpacity>

          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
          {console.log(name, description, price)}
        </View>

        <Button text={"ADD"} onAddPress={uploadTheImage} />
      </ScrollView>
    </Modal>
  );
}

export const styles = StyleSheet.create({
  heading: {
    color: COLORS.PrimaryDark,
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    margin: 10,
  },
  picker: {
    borderWidth: 1,
    marginVertical: 5,
    borderColor: COLORS.PrimaryDark,
    borderRadius: 10,
  },
  imgPicker: {
    borderWidth: 1,
    marginVertical: 5,
    borderColor: COLORS.PrimaryDark,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
export { AddNewBookModel };
