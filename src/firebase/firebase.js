import * as firebase from "firebase";

const prodConfig = {
  apiKey: "AIzaSyAViHFtqBkIKLsG4Nu6AEVhA8eSWcxwyFM",
  authDomain: "auth-prod-abf04.firebaseapp.com",
  databaseURL: "https://auth-prod-abf04.firebaseio.com",
  projectId: "auth-prod-abf04",
  storageBucket: "",
  messagingSenderId: "6872861840"
};

const devConfig = {
  apiKey: "AIzaSyB7WWIjdxd8Uk101_SzR68U41o0fYdk_1c",
  authDomain: "auth-601c6.firebaseapp.com",
  databaseURL: "https://auth-601c6.firebaseio.com",
  projectId: "auth-601c6",
  storageBucket: "",
  messagingSenderId: "1030706524076"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
