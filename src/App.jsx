import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <div className="app">
      <div className="app-glass">
        <SideBar />
        <MainDash />
      </div>
    </div>
  );
}

export default App;
