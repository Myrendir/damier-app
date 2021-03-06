import React, {useEffect, useState} from 'react';
import {useStore} from "react-context-hook";
import get_achat from "../services/achatService";
import get_commercial from "../services/commercialService";
import get_exploitation from "../services/exploitationService";
import get_human_ressources from "../services/humanRessourcesService";
import get_technical from "../services/technicalService";
import get_environnement from "../services/qualityEnvironmentService";
import Square from "./Square";
import {Link} from "react-router-dom";


export default function Home() {
    const [date] = useStore("date");
    const [nbTotalVendu, setNbTotalVendu] = useState(0);
    const [recetteGlobale, setRecetteGlobale] = useState(0);
    const [nbAccident, setNbAccident] = useState(0);
    const [tauxAbsenteisme, setTauxAbsenteisme] = useState(0);
    const [tauxPanne, setTauxPanne] = useState(0);
    const [impactCarbone, setImpactCarbone] = useState(0);
    const [color, setColor] = useStore("color",  "#d7d7d7");

    function getLastDayOfMonth(year, month) {
        return new Date(year, month + 1, 0);
    }
    useEffect(() => {
        setColor("#e7e7e7");
    },[]);

    useEffect(
        () => {
            if (date != 0) {
                let newDate = new Date(date);
                let endDate = getLastDayOfMonth(newDate.getFullYear(), newDate.getMonth());
                endDate = endDate.toISOString().split('T')[0];

                get_achat(endDate).then(data => {
                    let nbTotalVenduinside = 0;
                    data.data.forEach(item => {
                        nbTotalVenduinside += item.nbTotal;
                    });
                    setNbTotalVendu(nbTotalVenduinside);
                });
                get_commercial(endDate).then(data => {
                    let recetteGlobaleInside = 0;
                    data.data.forEach(item => {
                        recetteGlobaleInside += item.recetteGlobale;
                    });
                    setRecetteGlobale(recetteGlobaleInside);
                });
                get_exploitation(endDate).then(data => {
                    let nbAccidentTotal = 0;
                    data.data.forEach(item => {
                        if (item.nbAccidentsCorporels != undefined) {
                            nbAccidentTotal += item.nbAccidentsCorporels;
                        }
                        if (item.nbAccidentsMateriels != undefined) {
                            nbAccidentTotal += item.nbAccidentsMateriels;
                        }
                    });
                    setNbAccident(nbAccidentTotal);
                });
                get_human_ressources(endDate).then(data => {
                    let nbTaux = 0;
                    let tauxAbstent = 0;
                    data.data.forEach(item => {
                        if (item.tauxAbsenteisme != undefined) {
                            nbTaux++;
                            tauxAbstent += item.tauxAbsenteisme;
                        }
                    });
                    setTauxAbsenteisme(Math.round(tauxAbstent / nbTaux * 100) / 100+"%");
                });
            } else {
                get_achat().then(data => {
                    let nbTotalVenduinside = 0;
                    data.data.forEach(item => {
                        nbTotalVenduinside += item.nbTotal;
                    });
                    setNbTotalVendu(nbTotalVenduinside);
                });
                get_commercial().then(data => {
                    let recetteGlobaleInside = 0;
                    data.data.forEach(item => {
                        recetteGlobaleInside += item.recetteGlobale;
                    });
                    setRecetteGlobale(recetteGlobaleInside);
                });
                get_exploitation().then(data => {
                    let nbAccidentTotal = 0;
                    data.data.forEach(item => {
                        if (item.nbAccidentsCorporels != undefined) {
                            nbAccidentTotal += item.nbAccidentsCorporels;
                        }
                        if (item.nbAccidentsMateriels != undefined) {
                            nbAccidentTotal += item.nbAccidentsMateriels;
                        }
                    });
                    setNbAccident(nbAccidentTotal);
                });
                get_human_ressources().then(data => {
                    let nbTaux = 0;
                    let tauxAbstent = 0;
                    data.data.forEach(item => {
                        if (item.tauxAbsenteisme != undefined) {
                            nbTaux++;
                            tauxAbstent += item.tauxAbsenteisme;
                        }
                    });
                    setTauxAbsenteisme(Math.round(tauxAbstent / nbTaux * 100) / 100+"%");
                });
                get_technical().then(data => {
                    let nbTaux = 0;
                    let tauxPanne = 0;
                    data.data.forEach(item => {
                        if (item.tauxPannesBusEtTeor != undefined) {
                            nbTaux++;
                            tauxPanne += item.tauxPannesBusEtTeor;
                        }
                    });
                    setTauxPanne(Math.round(tauxPanne / nbTaux * 100) / 100+"%");
                });
                get_environnement().then(data => {
                    let impactCarboneInside = 0;
                    data.data.forEach(item => {
                        if (item.impactCarbone != undefined) {
                            impactCarboneInside += item.impactCarbone;
                        }
                    });
                    setImpactCarbone(impactCarboneInside);
                });
            }
        }, [date]);

    return (
        <div style={styles.columns}>
            <div style={styles.row}>
                <Link style={{ textDecoration: 'none' }} to="/detailPurchase">
                    <Square icon={"/euro.svg"} title="Achat"
                            text="Nombre de ticket total vendu : "
                            color="rgba(61,212,71,35%)" titleColor="rgb(61,212,71)" data={nbTotalVendu}/>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/detailsCommercial">
                    <Square icon={"/stats.svg"} title="Commercial"
                            text="Recette global :"
                            color="rgba(229,175,47,20%)" titleColor="rgb(229,175,47)" data={recetteGlobale}/>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/detailsHumanRessource">
                    <Square icon={"/user.svg"} title="Ressources humaines"
                            text="Taux d'absenteisme moyen :" data={tauxAbsenteisme} titleColor="rgb(199,122,140)"
                            color="rgba(199,122,140,20%)"/>
                </Link>
            </div>
            <div style={styles.row}>
                <Link style={{ textDecoration: 'none' }} to="/detailTechnical">
                    <Square icon={"/gears.svg"} title="Technique" text="Taux de panne moyen des bus et TEOR"
                            titleColor="rgb(247,209,136)" color="rgba(247,209,136,20%)" data={tauxPanne}/>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/detailsExploitation">
                    <Square icon={"/ticket.svg"} title="Exploitation" text="Nombre total d'accidents:" data={nbAccident}
                            titleColor="rgb(121,176,224)"
                            color="rgba(121,176,224,20%)"/>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/detailsEnvironment">
                    <Square icon={"/leaf.svg"} title="Environnement"
                            text="Impact carbone :"
                            titleColor="rgb(212,228,150)"
                            color="rgba(212,228,150,20%)" data={impactCarbone}/>
                </Link>
            </div>
        </div>
    );
}
const styles = {
    columns: {
        flex:1,
        flexDirection: "column",
    },
    row: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap"
    }
}