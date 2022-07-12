import * as React from 'react';
import {Switch} from "@mui/material";
import {useStore} from "react-context-hook";
import Datepicker from "../../Datepicker/Datepicker";

export default function Sidebar(props) {
    const [isVue2D, setIsVue2D] = useStore("isVue2D", 0);

    return (
        <>
            <div style={{
                width: "200px",
                height: "100vh",
            }}/>
            <div style={{
                width: "200px",
                height: "100vh",
                position: "fixed",
                backgroundColor: props.color ? props.color : "lightgrey",
                justifyContent: "center",
                textAlign: "center"
            }}>
                <div style={{paddingTop: "20px"}}>
                    <h3>Bonjour Toto</h3>
                </div>
                <div style={{paddingTop: "8vh"}}>
                    <Datepicker
                        color={props.color}
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
        </>
    )
}
