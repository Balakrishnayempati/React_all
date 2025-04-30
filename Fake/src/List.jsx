import React from "react";
import items from "./Fake_data";
import "./App.css"
function List(prop)
{
    return(
        <div id="blo">
            {items.map((items,index)=>
            {
                return(
                    <div id="ll" key={index}>
                        <h3>{items.id}</h3>
                        <h3>{items.title}</h3>
                        <h2>{items.price}</h2>
                        <p>{items.description}</p>
                        <h4>{items.category}</h4>
                        <img src={items.image}width={140}></img>
                        <h4>{items.rating?.rate}</h4>
                        <h4>{items.rating?.count}</h4>
                        </div>
                );
            })}
        </div>
    );
}
export default List;