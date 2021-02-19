import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoxK9lQJUNtkdbU7kDGMz3wXBC9m7Xa2c",
  authDomain: "spy-full.firebaseapp.com",
  projectId: "spy-full",
  storageBucket: "spy-full.appspot.com",
  messagingSenderId: "73930105514",
  appId: "1:73930105514:web:9daed14619c149b5b126d3",
  measurementId: "G-W4ZMMEGRBT",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

//recuperar si ya esta logeado
export const recoverySignIn = (setUser) => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  });
};

//crear cuenta e ingresar
export const createUser = (email, password, setUser, setError) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      setUser(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      setError(errorMessage);
    });
};

//Iniciar Session
export const enterUser = (email, password, setUser, setError) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      setUser(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      setError(errorMessage);
    });
};

//Logout
export const logout = (setUser) => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      setUser(false);
    })
    .catch((error) => {
      console.log(error);
    });
};
