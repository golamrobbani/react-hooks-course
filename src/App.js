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


import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from "./components/HoverCounter2";


function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />

      <ClickCounter2/>
      <HoverCounter2/>
    </div>
  );
}

export default App;



