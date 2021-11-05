import React from "react"
import PropTypes from "prop-types"
import "input.scss"
const YyzInput = (props)=>{
    let typeArr = ["public","telephone","news"]
    //type如果不是类型中的做出兼容 显示public
    const type = props.type && typeArr.includes(props.type)?props.type:'public'
    YyzInput.propTypes = {
        type:PropTypes.oneOf(typeArr)
    }
    function renderPublicInput(){
        return (
            <input type="text"/>
        )
    }
    function renderTelephoneInput(){
        return (
            <div>telephone</div>
        )
    }
    function renderNewsInput(){
        return (
            <div>news</div>
        )
    }
    return (
        <div className={"input_control"}>
            {
                type === "public"?renderPublicInput():
                    (type === "telephone"?renderTelephoneInput():
                        (type==="news"?renderNewsInput():null))
            }
        </div>
    )
}

export default YyzInput;
