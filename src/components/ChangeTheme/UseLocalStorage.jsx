import React from "react"

export default function UseLocalStorage(key,defaultvalue){
    
    const [value,setValue] = React.useState(()=>{
        let currentState;
        try{
            currentState=JSON.parse(localStorage.getItem(key)||String(defaultvalue));

        }catch(e){
            console.log(e);
            currentState=defaultvalue;
        }
        return currentState;
    })

    React.useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value])

    return [value,setValue];
}