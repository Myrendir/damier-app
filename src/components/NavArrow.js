import React from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";

const NavArrow = ({left,right,top,bot,children}) => {

    const link = (name) => {
        switch (name){
            case "Achat":
                return "/detailPurchase";
            case "Environnement":
                return "/detailsEnvironment";
            case "Exploitation":
                return "/detailsExploitation";
            case "Ressources humaines":
                return "/detailsHumanRessource";
            case "Commercial":
                return "/detailsCommercial";
            case "Technique":
                return "/detailTechnical";
            default:
                return "/";
        }
    }


    return(
        <div style={styles.container}>
            <div style={styles.column}>
                <Link style={styles.rowImg} to={link(left)}>
                    <ChevronLeftIcon style={styles.image}/>
                    <ChevronLeftIcon style={styles.image}/>
                    <p>{left}</p>
                </Link>
            </div>
            <div style={styles.columnMid}>
                <div style={styles.row}>
                    <Link style={styles.columnImg} to={link(top)}>
                        <ExpandLessIcon style={styles.image}/>
                        <ExpandLessIcon style={styles.image}/>
                        <p>{top}</p>
                    </Link>
                </div>
                <div style={styles.rowMid}>
                    {children}
                </div>
                <div style={styles.row}>
                    <Link style={styles.columnImg} to={link(bot)}>
                        <p>{bot}</p>
                        <ExpandMoreIcon style={styles.image}/>
                        <ExpandMoreIcon style={styles.image}/>
                    </Link>
                </div>
            </div>
            <div style={styles.column}>
                <Link style={styles.rowImg} to={link(right)}>
                    <p>{right}</p>
                    <ChevronRightIcon style={styles.image}/>
                    <ChevronRightIcon style={styles.image}/>
                </Link>
            </div>
        </div>
    )
}

const styles = {
    container:{
        display:"flex",
        flexDirection:"row",
        flex:1
    },
    column:{
        display:"flex",
        flexDirection:"column",
        width: "20%",
        justifyContent:"center",
        alignItems:"center",
    },
    columnMid:{
        flexDirection:"column",
        width: "60%",
    },
    row:{
        height:"20%",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:50,
        height:50,
        margin:-20
    },
    columnImg:{
        color: "black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },
    rowMid:{
      //height:"60%"
    },
    rowImg:{
        color: "black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    }
};

export default NavArrow;