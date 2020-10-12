import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import {firebaseConfig} from "./config"

const app = firebase.apps.length
	? firebase.app()
	: firebase.initializeApp(firebaseConfig)

export const db = app.firestore()
export const auth = app.auth()
