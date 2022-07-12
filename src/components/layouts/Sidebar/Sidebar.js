import * as React from 'react';
import {Icon, Switch} from "@mui/material";
import {useStore} from "react-context-hook";
import Datepicker from "../../Datepicker/Datepicker";
import {useEffect, useState} from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
export default function Sidebar() {
    const [isVue2D, setIsVue2D] = useStore("isVue2D", 0);
    const [color, setColor] = useStore("color",  "#cccccc");
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 500px)").matches
    )
    const [click, setClick] = useState(false);

    useEffect(() => {
        setClick(false);
    }, [matches]);

    useEffect(() => {
        window
            .matchMedia("(min-width: 500px)")
            .addEventListener('change', e => setMatches( e.matches ));
    }, []);
    return (
        <>
            {
                (!matches && click) && (
                    <div style={{
                        position:"fixed",
                        width:"100vw",
                        height:"100vh",
                        background:"black",
                        zIndex:1,
                        opacity:0.5
                    }} onClick={() => {
                        setClick(false);
                    }}/>
                )
            }
            {
                (!matches || !click) && (
                    <div style={{
                        position:"fixed",
                        top:20,
                        left:20,
                        width:28,
                        height:28,
                    }} onClick={() => {
                        setClick(true);
                    }}>
                        <MenuIcon sx={{ color: "gray" }}/>
                    </div>
                )
            }
            <div style={{
                width: matches || click ? 200 : 0,
                height: "100vh",
            }}/>
            <div style={{
                width: 200,
                zIndex:2,
                height: "100vh",
                display: matches || click ? "block" : "none",
                position: "fixed",
                boxShadow: "3px -1px 12px 0px rgba(0,0,0,0.75)",
                backgroundColor: color,
                justifyContent: "center",
                textAlign: "center"
            }}>
                {
                    (!matches || click) && (
                        <div style={{
                            position:"fixed",
                            top:20,
                            left:20,
                            width:28,
                            height:28,
                        }} onClick={() => {
                            setClick(false);
                        }}>
                            <ArrowBackIcon/>
                        </div>
                    )
                }
                <div style={{paddingTop: !matches ? 30 : 20}}>
                    <h3>Bonjour Toto</h3>
                </div>
                <div style={{paddingTop: "8vh"}}>
                    <Datepicker
                    />
                </div>
                <div style={{position:"absolute",width:"100%",bottom:20,textAlign:"center"}}>
                    <p style={{fontSize: 12}}>2D / 3D</p>
                    <Switch
                        color="primary"
                        value={isVue2D}
                        onChange={e => setIsVue2D(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}
