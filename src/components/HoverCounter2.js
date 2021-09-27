import withCounter2 from "./HOC/withCouter2";
const HoverCounter2 = (props) =>{
    const {count,incrementCount}=props;
    return(
        <h1 onMouseOver={incrementCount}>Hover me {count}</h1>
    )
}

export default withCounter2(HoverCounter2);