import React from 'react';
import Square from "./square";

export default function Home() {
    return (
        <div style={styles.columns}>
            <div style={styles.row}>
                <Square icon={"/euro.svg"} title="Achat"
                        text="Estimation de la variation des recettes par comparaison à 2020: "
                        color="rgba(61,212,71,35%)" titleColor="rgb(61,212,71)" data="Environ +3.7M en cumulé à fin aout"/>
                <Square icon={"/stats.svg"} title="Commercial"
                        text="Estimation de la variation des recettes par comparaison à 2019: "
                        color="rgba(229,175,47,20%)" titleColor="rgb(229,175,47)" data="Environ -3.7M en cumulé à fin aout"/>
                <Square icon={"/user.svg"} title="Ressources humaines"
                        text="Êtres en conformité avec la réglementation :" titleColor="rgb(199,122,140)" color="rgba(199,122,140,20%)"/>
            </div>
            <div style={styles.row}>
                <Square icon={"/gears.svg"} title="Technique" text="Voyages lignes régulières en 2021"
                        titleColor="rgb(247,209,136)" color="rgba(247,209,136,20%)" data="26821899"/>
                <Square icon={"/ticket.svg"} title="Exploitation" text="Tcar - Kilomètres métro haut le pied en 2021:"
                        titleColor="rgb(121,176,224)"
                        color="rgba(121,176,224,20%)" data="48170"/>
                <Square icon={"/leaf.svg"} title="Environnement"
                        text="Navette fluviale à énergie électro-solaire.Nombre de passagers en janvier 2021"
                        titleColor="rgb(212,228,150)"
                        color="rgba(212,228,150,20%)" data="6563"/>
            </div>
        </div>
    );
}
const styles = {
    columns: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width:"100%",
    },
    row : {
        display: "flex",
        justifyContent: "center",
        width:"100%",
        flexDirection: "row",
        flexWrap: "wrap"
    }
}