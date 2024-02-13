
import React from "react";
import './style.css';

export default function LoadMore(){

    const [products,setProducts] = React.useState([]);
    const [loading ,setLoading] = React.useState(false);
    const [count,setCount] = React.useState(0);
    const [disableButton,setDisableButton] = React.useState(false);

    async function getProducts(){
        try{
            setLoading(true);
            // const skip = products.length;
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count===0?0:count*40}`);
            const data = await response.json();
            console.log(data);
            if(data&&data.products&&data.products.length){
                setProducts((prevProducts)=>{
                    return([...prevProducts,...data.products]);
                })
            }
            setLoading(false);

        }catch(e){
            console.log(e);
            setLoading(false);
        }
    }

    React.useEffect(()=>{
      getProducts();  
    },[count])
   React.useEffect(() => {
    if (products && products.length === 100) {
        setDisableButton(true);
    }
}, [products]);


    if(loading){
        return <div>Loading Data , Please Wait !!!</div>
        
    }

    function handleCount(){
        setCount((prevCount)=>prevCount+1);
    }

    return (
        <div className="containerData">
            <div className="productsData">
                {products && products.length ?
                    products.map((pro, index) => {
                        return (
                            <div className="product" key={index}>
                                <img src={pro.thumbnail} alt={pro.title}  className="prodImage"/>
                                <h3>{pro.title}</h3>
                            </div>
                        );
                    })
                    : null
                }
            </div>
                <div className="buttonData">
                    <button className="loadButton" onClick={handleCount} disabled={disableButton}>LoadMore</button>
                </div>
                {disableButton&& <div>You cant load more images </div>}
        </div>
    );
    
}