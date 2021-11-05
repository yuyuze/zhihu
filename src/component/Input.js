import React, {Fragment, useEffect, useRef, useState} from 'react'
import PropTypes from "prop-types"
import "./input.scss"
const YyzInput = (props)=>{
    let typeArr = ["public","telephone","news","password"]
    //type如果不是类型中的做出兼容 显示public
    const type = props.type && typeArr.includes(props.type)?props.type:'public'
    const publicEl = useRef(null);
    const telephoneEl = useRef(null);
    const passwordEl = useRef(null);
    let lastValue = ""
    YyzInput.propTypes = {
        type:PropTypes.oneOf(typeArr),
        placeholder:PropTypes.string,
        isRequired:PropTypes.bool,
        errorMessage:PropTypes.string
    }
    let {placeholder,errorMessage} = props;
    useEffect(()=>{
        publicEl.current&&publicEl.current.addEventListener("blur",function (e){
            let target = e.target;
            lastValue = target.value
            if(target.value === ""){
                target.className = "error"
                target.value = errorMessage || "请输入内容"
            }
        })
        publicEl.current&&publicEl.current.addEventListener("focus",function (e){
            console.log(lastValue)
            let target = e.target;
            if(target.classList.contains("error")){
                target.classList.remove("error")
                target.value = lastValue
            }
        })
        console.log(passwordEl)
        passwordEl.current&&passwordEl.current.addEventListener("focus",function (e){
            console.log(lastValue)
            let target = e.target;
            if(target.classList.contains("error")){
                target.type = "password"
                target.classList.remove("error")
                target.value = lastValue
            }
        })
        passwordEl.current&&passwordEl.current.addEventListener("blur",function (e){
            let target = e.target;
            lastValue = target.value
            if(target.value === ""){
                target.className = "error"
                target.type = "text"
                target.value = "请输入密码"
            }
        })
    },[type])
    //渲染public 输入框
    function renderPublicInput(){
        return (
            <Fragment>
                <input type="text" ref={publicEl} placeholder={placeholder}/>
            </Fragment>

        )
    }
    //渲染telephone 输入框
    function renderTelephoneInput(){
        return (
            <div>telephone</div>
        )
    }
    //渲染news 输入框
    function renderNewsInput(){
        return (
            <div>news</div>
        )
    }
    function renderPassWord(){
        return (
            <Fragment>
                <input type="password" ref={passwordEl} placeholder={placeholder}/>
            </Fragment>
        )
    }
    return (
        <div className={`input_control ${type}`}>
            {
                type === "public"?renderPublicInput():
                    (type === "telephone"?renderTelephoneInput():
                        (type==="news"?renderNewsInput():
                            (type==="password"?renderPassWord():null)))
            }
        </div>
    )
}

export default YyzInput;
