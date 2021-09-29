import React from "react";

export default function HoverCounter({count,incrementCount}){
    return(
        <h1 onMouseOver={incrementCount}> Hover Me {count}</h1>
    )
}