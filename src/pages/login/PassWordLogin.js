import React, {Fragment, useState} from 'react'
import { Input, Select,Form } from 'antd';
import "./PassWordLogin.scss"
const PassWordLogin = function (){
    const [telHead,setTelHead] = useState("1");
    let options = [
        {
            label:"中国+86",
            value:"1"
        },
        {
            label:"美国+1",
            value:"2"
        }
    ]
    const changeTelHead = function (value){
        console.log(value)
        // setTelHead(value)
    }
    return (
        <Fragment>
            <Form className={"password-login"}>
                <Input
                    className={"decorator-input"} bordered={false} placeholder={"手机号"} addonBefore={<Select options={options} onChange={(value)=>changeTelHead(value)} defaultValue={telHead} style={{ width: 150 }} />}
                />
                <div className={"news_area"}>
                    <Input className={"decorator-input news-input"} bordered={false} placeholder={'请输入6位短信验证码'}/>
                    <span>
                        <a href="#">接收语音验证码</a>
                    </span>
                </div>
                <div className={"login-options"}>
                    <a href="#" className={"Button Login-cannotLogin"}>忘记密码</a>
                </div>
                <button className={"login-button"}>注册/登录</button>
            </Form>

        </Fragment>
    )
}
export default PassWordLogin;
