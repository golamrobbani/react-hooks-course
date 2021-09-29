import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import { RefTutorial,RUseRef} from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";
import RUseState from "./RUseState";

//higher order component
// import ClickCounter from './HigerOrderComponent/ClickCounter';
// import HoverCounter from './HigerOrderComponent/HoverCounter';
// import ClickCounter2 from './HigerOrderComponent/ClickCounter2';
// import HoverCounter2 from "./HigerOrderComponent/HoverCounter2";

//render props
import Counter from "./RenderProps/Counter";
import ClickCounter from "./RenderProps/ClickCounter";
import HoverCounter from "./RenderProps/HoverCounter";

function App() {
  return (
    <div className="App">

      <Counter render={(count,incrementCount)=>
        <ClickCounter count={count} incrementCount={incrementCount}/>
      }/>

      <Counter render={(count,incrementCount)=>
        <HoverCounter count={count} incrementCount={incrementCount}/>
      }/>


    </div>
  );
}

export default App;



