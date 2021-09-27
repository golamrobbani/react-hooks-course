import React from "react";
const withCounter2 = (OrighinalComponent) => {

    class NewComponent2 extends React.Component {

        state={
            count:2
        }

        incrementCount=()=>{
         this.setState((prevState)=>({count:prevState.count+1}));
        }

        render(){
            return <OrighinalComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }

    }

    return NewComponent2;
}

export default withCounter2;