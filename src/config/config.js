export function handleVolidatorLogin(nextState,replaceRouter){
    if(!window.localStorage["token"]){
        replaceRouter("/login")
    }
}
