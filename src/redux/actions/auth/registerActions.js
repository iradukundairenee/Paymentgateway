import * as firebase from "firebase/app"
import { history } from "../../../history"
import "firebase/auth"
import "firebase/database"
import axios from "axios"
import { config } from "../../../authServices/firebase/firebaseConfig"
import {toast} from 'react-toastify'


// Init firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

let firebaseAuth = firebase.auth()

export const signupWithFirebase = (email, password, name) => {
  return dispatch => {
    let userEmail = null,
      loggedIn = false
    // userName = null

    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        firebaseAuth.onAuthStateChanged(user => {
          result.user.updateProfile({
            displayName: name
          })
          if (user) {
            userEmail = user.email
            // let userName = user.displayName
            loggedIn = true
            dispatch({
              type: "SIGNUP_WITH_EMAIL",
              payload: {
                email: userEmail,
                name,
                isSignedIn: loggedIn
              }
            })
            dispatch({
              type: "LOGIN_WITH_EMAIL",
              payload: {
                email: userEmail,
                name
              }
            })
          }
        })
        history.push("/")
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}

export const signupWithJWT = (names,username,email,password) => {
  return dispatch => {
    axios
      .post("http://localhost:5000/api/users/signup", {
        names: names,
        username:username,
        email: email,
        password: password,
      })
      .then(response => {
        

        if(response.data){

         let registerInUser = response.data.user

          localStorage.setItem("token", response.data.token)

          dispatch({
            type: "SIGNUP_WITH_JWT",
            payload: { registerInUser, registerInWith: "jwt" }
          })
          history.push('/Reseller') ;
              return toast.success(response.data.message);
        }
        else{
          return toast.error(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err)
      }
      )

  }
}
