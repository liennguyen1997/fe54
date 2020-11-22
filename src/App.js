import logo from './logo.svg';
import './App.css';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBining/DataBinding';
import DataBindingClassComponent from './DataBining/DataBindingClassComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './DemoState/DemoState';
import BaiTapChonXe from './DemoState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './Components/RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <DataBindingClassComponent/> */}
      {/* <HandleEvent/> */}
      {/* <DemoState/> */}
      {/* <BaiTapChonXe/> */}
      <RenderWithMap/>
    </div>
  );
}

export default App;
