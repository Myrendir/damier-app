import './App.css';
import Sidebar from "./components/layouts/Sidebar/Sidebar";
import Home from "./components/Home";
import {useStore} from "react-context-hook";

function App() {
    return (
        <div className="App" style={styles.row}>
            <Sidebar/>
            <Home/>
        </div>
    );
}

export default App;

const styles = {
    row: {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
    }
}