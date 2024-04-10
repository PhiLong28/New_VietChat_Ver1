//Chứa thông tin đăng nhập ứng dụng web Firebase


import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAKneITphB2OuZubcvhBKXJaRPIYmsfcAU",
    authDomain: "chatviet-a15dd.firebaseapp.com",
    projectId: "chatviet-a15dd",
    storageBucket: "chatviet-a15dd.appspot.com",
    messagingSenderId: "860096994066",
    appId: "1:860096994066:web:ad7a183acf3ac648b671cb",
    measurementId: "G-F5WH0BC2S4"

};

// Cấu hình Firebase
// const app = initializeApp(firebaseConfig);

// // Cấu hình Auth
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export {auth};