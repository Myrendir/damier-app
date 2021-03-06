import * as React from "react";
import PropTypes from "prop-types";
import SquareDecorator from "../SquareDecorator";
import SquareDetails from "../SquareDetails";
import {useEffect, useState} from "react";
import {useStore} from "react-context-hook";
import get_quality_environment from "../../services/qualityEnvironmentService";
import NavArrow from "../NavArrow";

export default function DetailsEnvironment({color, ...props}) {
    const [date] = useStore("date");
    const [nbSignalementsQualiteEnvironement, setNbSignalementsQualiteEnvironement] = useState(0);
    const [impactCarbone, setImpactCarbone] = useState(0);
    const [incidentsEnvironnementaux, setIncidentsEnvironnementaux] = useState(0);
    const [budgetEnvironnement, setBudgetEnvironnement] = useState(0);
   
    const [sideBarcolor, setColor] = useStore("color",  "");

    useEffect(() => {
        setColor("#668961");
    },[]);

    function getLastDayOfMonth(year, month) {
        return new Date(year, month + 1, 0);
    }
    
    useEffect(
        () => {
            if (date != 0) {
                let newDate = new Date(date);
                let endDate = getLastDayOfMonth(newDate.getFullYear(), newDate.getMonth());
                endDate = endDate.toISOString().split('T')[0];
                get_quality_environment(endDate).then(
                    r => {
                        let nbSignalementsQualiteEnvironementInside = 0;
                        let impactCarboneInside = 0;
                        let incidentsEnvironnementauxInside = 0;
                        let budgetEnvironnementInside = 0;

                        r.data.forEach(item => {
                            nbSignalementsQualiteEnvironementInside += item.nbSignalementsQualiteEnvironement;
                            impactCarboneInside += item.impactCarbone;
                            incidentsEnvironnementauxInside += item.incidentsEnvironnementaux;
                            budgetEnvironnementInside += item.budgetEnvironnement;
                        });

                        setNbSignalementsQualiteEnvironement(nbSignalementsQualiteEnvironementInside);
                        setImpactCarbone(impactCarboneInside);
                        setIncidentsEnvironnementaux(incidentsEnvironnementauxInside);
                        setBudgetEnvironnement(budgetEnvironnementInside);
                    }
                )
            } else {
                get_quality_environment().then(
                    r => {
                        let nbSignalementsQualiteEnvironementInside = 0;
                        let impactCarboneInside = 0;
                        let incidentsEnvironnementauxInside = 0;
                        let budgetEnvironnementInside = 0;

                        r.data.forEach(item => {
                            nbSignalementsQualiteEnvironementInside += item.nbSignalementsQualiteEnvironement;
                            impactCarboneInside += item.impactCarbone;
                            incidentsEnvironnementauxInside += item.incidentsEnvironnementaux;
                            budgetEnvironnementInside += item.budgetEnvironnement;
                        })

                        setNbSignalementsQualiteEnvironement(nbSignalementsQualiteEnvironementInside);
                        setImpactCarbone(impactCarboneInside);
                        setIncidentsEnvironnementaux(incidentsEnvironnementauxInside);
                        setBudgetEnvironnement(budgetEnvironnementInside);
                    }
                )
            }

        },
        [date]
    )
    return (
        <NavArrow
            left={"Technique"}
            right={"Exploitation"}
            top={"Commercial"}
            bot={"Ressources humaines"}
        >
        <div style={styles.columns} {...props}>
            <div style={styles.box}>
                <SquareDecorator color="#006e37"/>
                <SquareDetails btnColor="#094F66"
                               title={"Nombre de signalements"}
                               data={nbSignalementsQualiteEnvironement} color="#f8f8f8" icon={"/leaf.svg"}/>
                <SquareDecorator color="#0c5b53"/>
            </div>
            <div style={styles.box}>
                <SquareDetails color="#f8f8f8" btnColor="#094F66"
                               title={"Impact carbone"} data={impactCarbone} icon={"/leaf.svg"}/>
                <SquareDecorator color="#d4e496"/>
                <SquareDetails color="#f8f8f8" icon={"/leaf.svg"}
                               title={"Incidents environnementaux"} data={incidentsEnvironnementaux} btnColor="#094F66"/>
            </div>
            <div style={styles.box}>
                <SquareDecorator color="#029c51"/>
                <SquareDetails btnColor="#094F66" color="#f8f8f8"
                               title={"Buget environnement"} data={budgetEnvironnement} icon={"/leaf.svg"}/>
                <SquareDecorator color="#96b996"/>
            </div>
         </div>
        </NavArrow>
    );
}

const styles = {
    columns: {
        flex:1,
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
    },
    box: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap"
    },
};

DetailsEnvironment.propTypes = {
    color: PropTypes.string,
};

DetailsEnvironment.defaultProps = {
    color: "",
};
