import { firebase } from "./firebaseHelper";
import { saveUserSession } from "./sessionHelper";
/**
 * when user sends register details
 */

function attemptoRegisterNewUser(email, password, firstName, lastName) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const userId = response.user.uid;
      addUserDetailsBasedOnUID(userId, firstName, lastName, email);
    })
    .catch((error) => {
      alert(error.message);
    });
}

function addUserDetailsBasedOnUID(uid, firstName, lastName, email, navigation) {
  firebase
    .firestore()
    .collection("users")
    .doc(uid)
    .set({ firstName, lastName, email });
}

function loginWithFirebase(email, password, navigation) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      saveUserSession("true");
      navigation.navigate("Home");
      // console.log(firebase.auth().currentUser.email);
    })
    .catch((error) => alert(error.message));
}
export { attemptoRegisterNewUser, loginWithFirebase };
