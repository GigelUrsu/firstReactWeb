// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQlpvCxoCqo4GUlyZQVV64EQikpWZ3FH8",
  authDomain: "myfirstdatabase-1f4b6.firebaseapp.com",
  projectId: "myfirstdatabase-1f4b6",
  storageBucket: "myfirstdatabase-1f4b6.appspot.com",
  messagingSenderId: "538316126152",
  appId: "1:538316126152:web:31582ce998fc84c5b8b2fd",
  measurementId: "G-YMVKJVFSWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2022, 4, 6);
//     }
//   }
// }