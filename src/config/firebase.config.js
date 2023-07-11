import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
//   appId: process.env.REACT_APP_FIREBASE_APPI_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAGnNTfWd41Ugix8Fwjp0EAZzFYF4qXibY",
  authDomain: "crud-app-firebase-af87d.firebaseapp.com",
  databaseURL: "https://crud-app-firebase-af87d-default-rtdb.firebaseio.com",
  projectId: "crud-app-firebase-af87d",
  storageBucket: "crud-app-firebase-af87d.appspot.com",
  messagingSenderId: "394785553279",
  appId: "1:394785553279:web:47bfaf36aee434be43384a",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
