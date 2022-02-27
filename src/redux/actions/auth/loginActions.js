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

// const initAuth0 = new auth0.WebAuth(configAuth)

export const submitLoginWithFireBase = (email, password, remember) => {
  return dispatch => {
    let userEmail = null,
      loggedIn = false
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        firebaseAuth.onAuthStateChanged(user => {
          result.user.updateProfile({
            displayName: "Admin"
          })
          let name = result.user.displayName
          if (user) {
            userEmail = user.email
            loggedIn = true
            dispatch({
              type: "LOGIN_WITH_EMAIL",
              payload: {
                email: userEmail,
                name,
                isSignedIn: loggedIn,
                loggedInWith: "firebase"
              }
            })
          }
          if (user && remember) {
            firebase
              .auth()
              .setPersistence(firebase.auth.Auth.Persistence.SESSION)
              .then(() => {
                dispatch({
                  type: "LOGIN_WITH_EMAIL",
                  payload: {
                    email: userEmail,
                    name,
                    isSignedIn: loggedIn,
                    remember: true,
                    loggedInWith: "firebase"
                  }
                })
              })
          }
          history.push("/")
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const loginWithFB = () => {
  return dispatch => {
    let provider = new firebase.auth.FacebookAuthProvider()
    provider.setCustomParameters({
      display: "popup"
    })
    firebaseAuth
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        let token = result.credential.accessToken,
          // The signed-in user info.
          user = result.user.email
        dispatch({
          type: "LOGIN_WITH_FB",
          payload: {
            user,
            token,
            loggedInWith: "firebase"
          }
        })
        if (user) history.push("/")
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const loginWithTwitter = () => {
  return dispatch => {
    let provider = new firebase.auth.TwitterAuthProvider()
    firebaseAuth
      .signInWithPopup(provider)
      .then(function(result) {
        let token = result.credential.accessToken,
          user = result.user.email,
          name = result.user.displayName,
          photoUrl = result.user.photoURL
        dispatch({
          type: "LOGIN_WITH_TWITTER",
          payload: {
            user,
            name,
            photoUrl,
            token,
            loggedInWith: "firebase"
          }
        })
        history.push("/")
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}

export const loginWithGoogle = () => {
  return dispatch => {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebaseAuth
      .signInWithPopup(provider)
      .then(function(result) {
        let token = result.credential.accessToken,
          user = result.user.email,
          name = result.user.displayName,
          photoUrl = result.user.photoURL
        dispatch({
          type: "LOGIN_WITH_GOOGLE",
          payload: {
            email: user,
            name: name,
            photoUrl,
            token,
            loggedInWith: "firebase"
          }
        })
        history.push("/")
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}

export const loginWithGithub = () => {
  return dispatch => {
    let provider = new firebase.auth.GithubAuthProvider()
    firebaseAuth
      .signInWithPopup(provider)
      .then(function(result) {
        let token = result.credential.accessToken,
          user = result.user.email,
          name = result.additionalUserInfo.username,
          photoUrl = result.user.photoURL

        dispatch({
          type: "LOGIN_WITH_GITHUB",
          payload: {
            user,
            name,
            photoUrl,
            token,
            loggedInWith: "firebase"
          }
        })
        history.push("/")
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}

export const loginWithJWT = user => {
  return dispatch => {
    axios
      .post("http://localhost:5000/api/users/login", {
        email: user.email,
        password: user.password
      })
      .then(response => {
     
        const {token} =response.data;
        if (response.data && token) {
          
          localStorage.setItem('token', token);
         let loggedInUser = response.data.user

          dispatch({
            type: "LOGIN_WITH_JWT",
            payload: { loggedInUser, loggedInWith: "jwt",token }
          })
          history.push("/Dashboard")
          const user=response.data.message;
          console.log(`welcome ${user}`)
          return toast.success(`welcome here`);
        }
        else{
          console.log("invalid user");
          return toast.error(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err)
        return toast(err); 
      })
  }
}

export const logoutWithJWT = () => {
  return dispatch => {
    dispatch({ type: "LOGOUT_WITH_JWT", payload: {} })
    history.push("/")
  }
}

export const logoutWithFirebase = user => {
  return dispatch => {
    dispatch({ type: "LOGOUT_WITH_FIREBASE", payload: {} })
    history.push("/")
  }
}

export const changeRole = role => {
  return dispatch => dispatch({ type: "CHANGE_ROLE", userRole: role })
}
