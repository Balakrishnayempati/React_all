import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Products/Pro_Data";
import "./Review.css"
function Review()
{
    console.log(useParams())
    const{id}=useParams();
    const matched=Data.products.find((p)=>p.id === parseInt(id)) 
    console.log(matched)
            return(
        <div id="rev">
            {matched.reviews.map((r)=>{
                return(
                    <div id="rr">
                <h1>{r.reviewerName}</h1>
                <p>{r.rating}</p>
                <span>{r.comment}</span>
                    </div>
                )

            })}

        </div>
    )
}
export default Review