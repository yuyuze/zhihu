import React, {Fragment} from 'react'
import "./NotPassWordLogin.scss"
import YyzInput from "../../component/Input"
const NotPassWordLogin = function (){
    return (
        <Fragment>
            <div><YyzInput placeholder={"手机号或邮箱"} errorMessage={"请输入账户"} type={"public"}/></div>
            <div><YyzInput placeholder={"密码"}  type={"password"}/></div>
            <div className={"login-options"}>
                <a href="#" className={"Button Login-switchType"}>海外手机号登陆</a>
                <a href="#" className={"Button Login-cannotLogin"}>忘记密码</a>
            </div>
            <button className={"login-button"}>登录</button>
        </Fragment>
    )
}
export default NotPassWordLogin;
