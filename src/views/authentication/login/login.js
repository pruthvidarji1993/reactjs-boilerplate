import React from "react"
import {history} from "../../../history";
import { setLoginFlag} from "../../../redux/actions/auth/loginAction";
import { store} from "../../../redux/storeConfig/store"

class Login extends React.Component{
  render(){
    return <h4 onClick={() =>{ localStorage.setItem("efamo", JSON.stringify({name : "Pruthvi"})) ; store.dispatch(setLoginFlag(true)); history.push("/home")}}>You're Login Here.</h4>
  }
}

export default Login