import React from "react"
import {Router,Route,hashHistory,Redirect} from "react-router"

import login from '../pages/login.js'
import index from '../pages/base/index.js'
import {handleVolidatorLogin} from "./config.js"

console.log(123)
export default () => (
    <Router history={hashHistory}>
        <Redirect from="/" to="/index"/>
        <Route path="/index" component={index} onEnter={handleVolidatorLogin}/>
        <Route path="/login" component={login}/>
    </Router>
)
