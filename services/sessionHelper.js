import AsyncStorage from "@react-native-async-storage/async-storage";

// using async or promise
const saveUserSession = (value) => {
  AsyncStorage.setItem("@isUserLoggedIn", value)
    .then(() => {
      console.log(value, " saved sucessful");
    })
    .catch((e) => {
      console.log("Error: ", e);
    });
};

export { saveUserSession };
// using promise

// const getUserSession = () => {
//   AsyncStorage.getItem("@isUserLoggedIn")
//     .then(() => {
//       console.log("Session got sucessful");
//     })
//     .catch((e) => {
//       console.log("Error: ", e);
//     });
// };

// const getUserSession = async () => {

//   const response = await AsyncStorage.getItem("@isUserLoggedIn")
//     return response
// };

// export {getUserSession}

// user session got on specific page
