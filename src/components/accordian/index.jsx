import React from "react";
// import { ReactDOM } from "react";
import data from "./data"
import "./style.css"
export default function Accordian() {

    const [selected,setselected]=React.useState(null);
    const [enableMultipleSelection,setEnableMultipleSelection] = React.useState(false);
    const [multiSelected,setMultiSelected] = React.useState([]);

    function toggleEnableMutipleSelection(){
        setEnableMultipleSelection((prev)=>!prev);
    }
    function handleMultiSelected(id){
        let cmul=[...multiSelected]
        let cid=multiSelected.indexOf(id);
        cid===-1?cmul.push(id):cmul.splice(cid,1);
        setMultiSelected(cmul);
    }
    function handleSelected(id){
        setselected((previd)=>(previd===id?"":id));
    }
    return (
        <div className="Box">

        <div className="wrapper">
            <button className="mulbut" onClick={toggleEnableMutipleSelection}>{enableMultipleSelection? <p>Disable Multiple Selection</p>: <p>Enable Multiple Selection </p>}</button>
            {
                data.map((dataitem) => {
                    return (
                        <div className="item" >
                            <div className="Header" onClick={enableMultipleSelection?()=>handleMultiSelected(dataitem.id):()=>handleSelected(dataitem.id)}>
                                <p>
                                    {dataitem.question}
                                </p>
                                <span>+</span>
                            </div>
                            <div className="answer">
                                {enableMultipleSelection?multiSelected.indexOf(dataitem.id)!=-1 && dataitem.answer:
                                selected===dataitem.id? dataitem.answer : ""}
                            </div>
                        </div>
                    )
                })
            }


        </div>
        </div>
    )
}