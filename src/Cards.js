import React from "react";
import{FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
import Testimonial from "./Testimonial";

const Cards=(props)=>{
    let review=props.review;
    return(
        <div className="bg-white border p-8 flex flex-col md:relative w-4/6  h-[340px] rounded-sm mx-auto my-10 ">

            <div className=" absolute  mx-auto top-[-5rem] z-[10] ">
           <img src={review.image} className="  aspect-square rounded-full h-[140px] w-[140px] z-[20]"></img>
           <div className=" bg-purple-500 rounded-full h-[140px] w-[140px] z-[-10] absolute top-[-3px] left-[10px] "></div>
            </div>

            <div className=" text-lg font-bold text-black ">
                <p>{review.name}</p>
            </div>

            <div className=" text-base font-medium text-gray-600 ">
                <p>{review.job}</p>
            </div>

            <div className=" text-purple-700  font-bold mx-auto my-5">
                <FaQuoteLeft/>
            </div>

            <div className=" mx-6">
                {review.text}
            </div>

            <div className=" text-purple-700 font-bold mx-auto my-5">
                <FaQuoteLeft/>
            </div>

        </div>
    );
}

export default Cards;