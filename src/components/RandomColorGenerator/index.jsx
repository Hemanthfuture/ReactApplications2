
import React from "react";

export default function GetRandomColor(){

    const [typeOfColor,setTypeOfColor] = React.useState("hex");
    const [color,setColor] = React.useState("#256354");
    function typeToHex(){
        setTypeOfColor('hex');
    }
    function typeToRgb(){
        setTypeOfColor('rgb');
    }
    function randomNumber(leng){
        return Math.floor(Math.random() * leng);
    }
    React.useEffect(()=>{
        if(typeOfColor==='rgb'){
            handleRgbRandomGenerator()
        }else{
            handleHexRandomGenerator()
        }
    },[typeOfColor])

    function handleHexRandomGenerator(){
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let col='#';
        for(var i=0;i<6;i++){
            col+=hex[randomNumber(hex.length)];
        }
        setColor(col);
    }
    function handleRgbRandomGenerator(){
        const r=randomNumber(256)
        const g=randomNumber(256)
        const b=randomNumber(256)
        let col=`rgb(${r},${g},${b})`
        setColor(col)
    }

    return(
        <div 
        style={{
            backgroundColor:color,
            width:"100vw",
            height:"100vh",
            margin:"0px",
            padding:"0px",
            boxSizing:"border-box"
        }}>
            <button onClick={typeToHex}>Generate Random Hex</button>
            <button onClick={typeOfColor==='hex'?handleHexRandomGenerator:handleRgbRandomGenerator} >Generate Random Color</button>
            <button onClick={typeToRgb}>Generate Random rgb</button>
            <div>
                <h1 style={{
                    fontSize:"80px",
                    marginBottom:"30px",
                    marginTop:"150px"
                }}>{typeOfColor==='rgb'? "RGB Color":"HEX Color"}</h1>
                <h2
                style={{
                    fontSize:"35px"
                }}>{color}</h2>
            </div>
        </div>
    )
}