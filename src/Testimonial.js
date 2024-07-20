import React, { useState } from "react";
import Cards from "./Cards";
import{FaQuoteLeft,FaQuoteRight,FaAngleDoubleRight , FaAngleDoubleLeft} from 'react-icons/fa'

const Testimonial=(props)=>{
    let reviews=props.reviews;
    const[index,Setindex]=useState(0);

    function leftshifthandler(){
      if(index-1<0){
        Setindex(reviews.length-1);
      }
      else{
        Setindex(index-1);
      }
    }

    function rightshifthandler() {
      if (index + 1 === reviews.length) {
        Setindex(0); // Reset to the first review when reaching the end
      } else {
        Setindex(index + 1);
      }
    }
    

    function surprisehandler(){
      let surpriseIndex=Math.floor(Math.random()*reviews.length);
      Setindex(surpriseIndex);
    }
    
    return (
        <div>
          <Cards review={reviews[index]}>

          </Cards>

          
          <div className="  flex  justify-center text-3xl  text-violet-800 mx-auto">

<button onClick={leftshifthandler} className="cursor-pointer hover:text-purple-900 "><FaAngleDoubleLeft/></button>
<button onClick={rightshifthandler} className=" cursor-pointer hover:text-purple-900 "><FaAngleDoubleRight/></button>


</div>

<div onClick={surprisehandler} className=" flex ">
<button className="btn-grad mx-auto ">surprise</button>
</div>


        </div>
    )
}

export default Testimonial;