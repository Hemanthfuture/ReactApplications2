import React from "react";
import "./style.css";


export default function ScrollBarPercentage({url}){

    const [data,setData] = React.useState([]);
    const [loading,setLoading] = React.useState(false);
    const [errorMessage,setErrorMessage] = React.useState('');
    const [scrollPercentage,setScrollPercentage] =React.useState(0);



    async function fetchData(getUrl){
        try{
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            console.log(data);
            if(data&&data.products&&data.products.length>0){
                setData(data);
            }       
            setLoading(false);     

        }catch(e){
            console.log(e);
            setErrorMessage(e.message);
            setLoading(false);
        }
    }


    function handleScrollPercentage(){
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.scrollTop,
            document.documentElement.clientHeight
        )
        const howMuchScrolled=document.body.scrollTop||document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled/height)*100)
    }
    
    
    React.useEffect(()=>{
        fetchData(url);
    },[])


    React.useEffect(()=>{

        window.addEventListener('scroll',handleScrollPercentage);

        return(()=>{
            window.removeEventListener('scroll',()=>{})
        })

    },[])

    if(loading===true){
        return(
            <div>Loading data..Please Wait!!!</div>
        )
    }
    // errorMessage?
    // <div>Error {errorMessage}</div>
    // :null

    return(
        <div>

        <div className="HeaderData">
               <h1 >Custom Scroll Indicator</h1> 
                <div className="ParentScrollIndicator">
                    <div className="originalScrollIndicator" style={{width:`${scrollPercentage}%`}}>

                    </div>
                </div>
               
         </div>
               <div className="BodyData">
                {
                    data&&data.products&&data.products.length>0?
                    data.products.map((dataitem,index)=>{
                        return(

                            <p key={index}>{dataitem.title}</p>
                        )
                
                    })
                    :null
                }
               </div>
        </div>
    )
}