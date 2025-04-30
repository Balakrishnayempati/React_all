import React from "react";
import dummyData from "./Dummydata";
function Dummy()
{
    return(
        <div>
            {dummyData.recipes.map((recipe,index)=>
            {
                return(
                    <div key={index}>
                        <img src={recipe.image} width={200}/>
                        <h2>{recipe.id}</h2>
                        <h3>{recipe.ingredients}</h3>
                        <h2>{recipe.instructions}</h2>
                        <h2>{recipe.userId}</h2>

                    </div>
                )
            })}
        </div>
    )
}
export default Dummy;