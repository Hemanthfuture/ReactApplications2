import React from "react";
import Model from "./model";


export default function ModelTest(){

    const [showModel,setShowModel] = React.useState(false);
    function handleShowModel(){
        setShowModel(!showModel);
    }
    function onClose(){
        setShowModel(false);
    }

    return(
        <div className="ModelContainer">
            <button onClick={handleShowModel}>Open Model PopUp</button>
            {
                showModel&&
                <Model 
                id={'1'} 
                header={<div><h2> Header Part </h2><span onClick={onClose} className="headerPlus">&times;</span>
                </div>} 
                body={<div><h1>customized body</h1></div>}
                footer={<div><h1>Footer Part </h1></div>}
                />
            }
        </div>
    )
}