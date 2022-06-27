import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import SideBar from "./components/Sidebar/SideBar";
import RightSide from './components/RightSide/RightSide';


function App() {
  return (
    <div className="app">
      <div className="app-glass">
        <SideBar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
