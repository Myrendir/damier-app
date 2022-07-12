import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/layouts/Sidebar/Sidebar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <div className="App" style={styles.row}>
            <Sidebar/>
            <AppRouter/>
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