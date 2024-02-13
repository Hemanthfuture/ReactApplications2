import MenuList from "./MenuList";
import './style.css';
import React from "react";
import {FaMinus,FaPlus} from "react-icons/fa";

export default function MenuItem({item}){
    const [displayCurrentChildren,setDisplayCurrentChildren] = React.useState({});

        function handleToggleChildren(getItemLabel){
            setDisplayCurrentChildren({
                ...displayCurrentChildren,
                [getItemLabel]:!displayCurrentChildren[getItemLabel],
            })
        }
        console.log(displayCurrentChildren);

        return(
        <li className="menuItem" >
            <div className="parent">

            <p>{item.label}</p>
            {
                item&&item.children&&item.children.length>0? 
                <span onClick={()=>handleToggleChildren(item.label)} className="symbol">
                                      
                    {displayCurrentChildren[item.label]? <FaMinus />:<FaPlus/>}
                </span>
                :null
            }
            
            </div>
            {
                item&&item.children&&item.children.length>0&&displayCurrentChildren[item.label]===true?
                <MenuList menulist={item.children}/>
                :null
            }
        </li>
    )
    
}