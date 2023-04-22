import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyBpbYCf9kBfICnNcmlyI0LTi5uhtD_VzsY",
	authDomain: "react-social-3d10e.firebaseapp.com",
	projectId: "react-social-3d10e",
	storageBucket: "react-social-3d10e.appspot.com",
	messagingSenderId: "343960759474",
	appId: "1:343960759474:web:82075ae8de0bb0f38dadab",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
