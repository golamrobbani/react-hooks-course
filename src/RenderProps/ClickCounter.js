import React from "react";

export default function ClickCounter({count,incrementCount}){
    return(
        <button onClick={incrementCount}> Click Me {count}</button>
    )
}