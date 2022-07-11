import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/layouts/Sidebar/Sidebar";
import Home from "./components/Home";

function App() {
    return (
        <div className="App" style={styles.row}>
            <Home/>
            <Sidebar/>
        </div>
    );
}

export default App;

const styles = {
    row : {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
    }
}