import React from 'react';

export default function Square({color, icon, title, text, titleColor, data, ...props}) {

    function MouseOver(event) {
        event.currentTarget.style.cursor = "pointer";
        event.currentTarget.style.transition = "all 0.5s";
        event.currentTarget.style.transform = "scale(1.1)";
    }

    function MouseLeave(event) {
        event.currentTarget.style.transform = "";
    }

    return (
        <div onMouseOver={MouseOver} onMouseLeave={MouseLeave} style={{...styles.column, backgroundColor: color}}>
            <img style={styles.image} src={icon}  alt={title}></img>
            <h1 style={{...styles.h1, color:titleColor}}>{title}</h1>
            <p style={styles.text}>{text} <span style={{color: titleColor}}>{data}</span></p>
        </div>
    );
}

const styles = {
    column : {
        width: 190,
        height: 190,
        margin: 40,
        boxShadow: "0px 4px 9px 1px rgba(0,0,0,0.2)",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: 30,
    },
    image: {
        width: 50,
    },
    h1 : {
        padding: 0,
        margin: 0,
        textTransform: "uppercase",
        fontSize: 20,
    },
    text: {
        color: "grey",
        textTransform: "uppercase",
        fontSize: 10,
        textShadow: "1px 2px 20px rgba(0,0,0,0.5)",
    }
}