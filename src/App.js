import React from "react"

import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"
import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const App = props => {

  return (<>
  <Router />
  <ToastContainer />
  </>)
}

export default App
