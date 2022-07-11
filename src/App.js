import './App.css';
import Sidebar from "./components/layouts/Sidebar/Sidebar";
import {useStore} from "react-context-hook";


function App() {
    const [date] = useStore("date");
    const [isVue2D] = useStore("isVue2D")
    console.log(date, isVue2D);

    const color = "grey";
    return (
        <div className="App">
            <Sidebar color={color}/>
        </div>
    );
}

export default App;
