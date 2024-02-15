import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <Body />
      </Provider>
    </div>
    // <div className="App">
    // <h1 className='bg-slate-500 font-bold text-2xl m-2 p-2  text-white'>Nameste every one </h1>
    // </div>
  );
}

export default App;
