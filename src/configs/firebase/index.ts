import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  getReactNativePersistence,
  initializeAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKETt,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};
// const firebaseConfig = {
//   apiKey: Constants.expoConfig?.extra?.FirebaseApiKey,
//   authDomain: Constants.expoConfig?.extra?.FirebaseAuthDomain,
//   projectId: Constants.expoConfig?.extra?.FirebaseProjectId,
//   storageBucket: Constants.expoConfig?.extra?.FirebaseStorageBucket,
//   messagingSenderId: Constants.expoConfig?.extra?.FirebaseMessagingSenderId,
//   appId: Constants.expoConfig?.extra?.FirebaseAppId,
// };

// custom func to initialize app...
function initApp(config: typeof firebaseConfig): FirebaseApp {
  const app = initializeApp(config);
  initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });

  return app;
}

// Initialize Firebase
const FIREBASE_APP = getApps().length > 0 ? getApp() : initApp(firebaseConfig);

// Auth Firebase
const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// setPersistence(FIREBASE_AUTH, ReactNativeAsyncStorage);

// Firebase Data
const FIREBASE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(app);

type SignInWithEmailAndPassword = typeof signInWithEmailAndPassword;
type CreateUserWithEmailAndPassword = typeof createUserWithEmailAndPassword;

export {
  FIREBASE_APP,
  FIREBASE_AUTH,
  FIREBASE_DB,
  createUserWithEmailAndPassword,
  doc,
  onAuthStateChanged,
  setDoc,
  signInWithEmailAndPassword,
  type CreateUserWithEmailAndPassword,
  type SignInWithEmailAndPassword,
};
