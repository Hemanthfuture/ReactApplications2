import {FaStar} from 'react-icons/fa'
import React from 'react';
import './style.css';
export default function StarRating({noOfStars=5}){

    const [rating,setRating] = React.useState(0);
    const [hover,setHover] = React.useState(0);


    function handleClick(currentIndex){
        setRating(currentIndex);
    }
    function handleMouseOn(currentIndex){
        setHover(currentIndex);
    }
    function handleMouseLeave(currentIndex){
        setHover(rating);
    }


    return(
        <div className="StarWorld">

            {
                [...Array(noOfStars)].map((_,index)=>{
                    index+=1;
                    return(

                        <FaStar
                        className={index<=hover?'active':'inactive'}
                        key={index}
                        onClick={()=>handleClick(index)}
                        onMouseMove={()=>handleMouseOn(index)}
                        onMouseLeave={()=>handleMouseLeave(index)}
                        size={40}
                        
                        />
                    )

                    
                })
            }


        </div>
    )
}