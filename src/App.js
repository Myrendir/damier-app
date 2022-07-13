import Sidebar from "./components/layouts/Sidebar/Sidebar";
import AppRouter from "./router/AppRouter";
import {useStore} from "react-context-hook";
import Cube from "./components/cube/Cube";

import "./components/cube/global.scss";
function App() {
    const [isVue2D] = useStore("isVue2D", false);
    return (
        <div className="App" style={styles.row}>
            <Sidebar/>
            {
                !isVue2D ?
                    <AppRouter/>
                     :
                    <Cube/>
            }
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
