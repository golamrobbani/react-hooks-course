import withCounter2 from './HOC/withCouter2';

const ClickCounter2 = (props)=>{

    const {count,incrementCount}=props;

    return(
        <button onClick={incrementCount}>
            Click Me{count}
        </button>
    )


}

export default withCounter2(ClickCounter2)