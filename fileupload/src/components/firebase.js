import firebase from "firebase/compat/app";
import storageg from "firebase/compat/storage";
const firebaseConfig = {
 
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
