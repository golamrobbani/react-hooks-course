import React,{ useState } from "react";

const RUseState = () => {

    const [ count, setCount ] = useState(0);

    const incrementCount = () => {
        let c1 = count + 1;
        setCount(c1);
    }
  
    return (
        <div>
          <button onClick = { incrementCount } > Click Me </button>
          {count}
        </div>
    );
}

export default RUseState;
