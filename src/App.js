import Sidebar from "./components/layouts/Sidebar/Sidebar";
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
    row: {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
    }
}