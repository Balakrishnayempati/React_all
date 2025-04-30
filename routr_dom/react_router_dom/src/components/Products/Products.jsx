import React from "react";
import Data from "./Pro_Data";
import "./Products.css"
import { Link } from "react-router-dom";
function Products()
{
    return(
        <div id="parent_container">
            {Data.products.map((item,index)=>{
                return(
                    <div id="cont" key={index}>
                        <h2>{item.id}</h2>
                        <h2>{item.title}</h2>
                        <img src={item.images} width={200}/>
                        <h2>{item.rating}</h2>
                       <Link to={`/products/reviews/${item.id}`}><button id="but">Reviews</button></Link>
                    </div>
                )
            })}
        </div>
    )
}
export default Products;