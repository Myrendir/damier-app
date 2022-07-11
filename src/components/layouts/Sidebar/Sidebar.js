import * as React from 'react';
import {Switch} from "@mui/material";
import {useStore} from "react-context-hook";

export default function Sidebar(props) {
    const [date, setDate] = useStore("date", "");
    const [isVue2D, setIsVue2D] = useStore("isVue2D", 0);

    return (
        <div style={{
            width: "200px",
            height: "100vh",
            position: "fixed",
            backgroundColor: props.color,
            justifyContent: "center",
        }}>
            <div style={{paddingTop: "20px"}}>
                <p>Bonjour Toto</p>
            </div>
            <div style={{paddingTop: '5vh'}}>
                <input
                    type={"date"}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
            <div style={{paddingTop: '60vh'}}>
                <p style={{fontSize: '12px'}}>2D / 3D</p>
                <Switch
                    color="primary"
                    onChange={e => setIsVue2D(e.target.value)}
                />
            </div>
        </div>
    )
}
