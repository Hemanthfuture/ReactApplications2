import React from "react"
import tabData from "./data"
import './tab.css'


export default function Tabs({tData}){

    const [currentTab,setCurrentTab] = React.useState(0);
    function handleCurrentTab(getIndex){
        setCurrentTab(getIndex);
    }

    return(
        
        <div className="tabContainer">
            <div className="tabHeader">
                {
                    tData&&tData.length>0?
                    tData.map((tabItem,index)=>{
                        return(
                            
                            <span className="tabLabel" key={index} onClick={()=>handleCurrentTab(index)}>{tabItem.label}</span>
                        )
                    })
                    :null
                }
            </div>
            <div className="tabContent">
                    {
                        tabData[currentTab].content
                    }
            </div>
        </div>
    )



}