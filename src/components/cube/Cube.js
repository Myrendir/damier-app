import React, {useEffect, useState} from "react";
import * as annyang from "annyang";
import speechSynthesis from "speech-synthesis";
import {ReactComponent as Euro} from "../../Icon/euros.svg";
import {ReactComponent as Stats} from "../../Icon/Icon_ionic-ios-stats.svg";
import {ReactComponent as User} from "../../Icon/Icon_awesome-user-alt.svg";
import {ReactComponent as Meca} from "../../Icon/Icon_awesome-cogs.svg";
import {ReactComponent as Ticket} from "../../Icon/Icon_awesome-ticket-alt.svg";
import {ReactComponent as Feuille} from "../../Icon/Icon_awesome-leaf.svg";

import "./cube.scss";
import "./sidebar.scss";
import {useStore} from "react-context-hook";
import get_commercial from "../../services/commercialService";
import get_quality_environment from "../../services/qualityEnvironmentService";
import get_human_ressources from "../../services/humanRessourcesService";
import get_achat from "../../services/achatService";
import get_technical from "../../services/technicalService";
import get_exploitation from "../../services/exploitationService";

const Cube = () => {
    const [date] = useStore("date");
    const [opened, setOpened] = useState(false);
    const [recetteGlobale, setRecetteGlobale] = useState(0);
    const [nbNouveauxAbonnements, setNbNouveauxAbonnements] = useState(0);
    const [nbNouveauxPartenaires, setNbNouveauxPartenaires] = useState(0);
    const [nbReclamations, setNbReclamations] = useState(0);
    const [nbSignalementsQualiteEnvironement, setNbSignalementsQualiteEnvironement] = useState(0);
    const [impactCarbone, setImpactCarbone] = useState(0);
    const [incidentsEnvironnementaux, setIncidentsEnvironnementaux] = useState(0);
    const [budgetEnvironnement, setBudgetEnvironnement] = useState(0);
    const [tauxAbsenteisme, setTauxAbsenteisme] = useState(0);
    const [tauxGreve, setTauxGreve] = useState(0);
    const [tauxRecrutement, setTauxRecrutement] = useState(0);
    const [tauxTurnOver, setTauxTurnOver] = useState(0);
    const [nbTotalVendu, setNbTotalVendu] = useState(0);
    const [nbTotalTicketsSms, setNbTotalTicketsSms] = useState(0);
    const [nbTotalTickets, setNbTotalTickets] = useState(0);
    const [ventePopulaire, setVentePopulaire] = useState("");
    const [tauxPannesBusEtTeor, setTauxPannesBusEtTeor] = useState(0);
    const [
        consommationBusEtTeorAuxCentsKms,
        setConsommationBusEtTeorAuxCentsKms,
    ] = useState(0);
    const [consommationTramAuxCentsKms, setConsommationTramAuxCentsKms] =
        useState(0);
    const [tauxPannesTram, setTauxPannesTram] = useState(0);

    const toggleSidebar = () => {
        setOpened(!opened);
    };
    const [nbAccidentsMateriels, setNbAccidentsMateriels] = useState(0);
    const [nbAccidentsCorporels, setNbAccidentsCorporels] = useState(0);
    const [causeAccident, setCauseAccident] = useState("");
    const [tauxControle, setTauxControle] = useState(0);

    function getLastDayOfMonth(year, month) {
        return new Date(year, month + 1, 0);
    }

    useEffect(
        () => {
            if (date !== 0) {
                let newDate = new Date(date);
                let endDate = getLastDayOfMonth(
                    newDate.getFullYear(),
                    newDate.getMonth()
                );
                endDate = endDate.toISOString().split("T")[0];

                get_commercial(endDate).then((data) => {
                    let nbTaux = 0;
                    let nbRecetteGlobale = 0;
                    let nouveauxAbonnements = 0;
                    let nouveauxPartenaires = 0;
                    let reclamations = 0;

                    data.data.forEach((item) => {
                        if (item.recetteGlobale !== undefined) {
                            nbTaux++;
                            nbRecetteGlobale += item.recetteGlobale;
                        }
                        if (item.nbNouveauxAbonnements !== undefined) {
                            nbTaux++;
                            nouveauxAbonnements += item.nbNouveauxAbonnements;
                        }
                        if (item.nbNouveauxPartenaires !== undefined) {
                            nbTaux++;
                            nouveauxPartenaires += item.nbNouveauxPartenaires;
                        }
                        if (item.nbReclamations !== undefined) {
                            nbTaux++;
                            reclamations += item.nbReclamations;
                        }
                    });
                    setRecetteGlobale(
                        Math.round((nbRecetteGlobale / nbTaux) * 100) / 100
                    );
                    setNbNouveauxAbonnements(
                        Math.round((nouveauxAbonnements / nbTaux) * 100) / 100
                    );
                    setNbNouveauxPartenaires(
                        Math.round((nouveauxPartenaires / nbTaux) * 100) / 100
                    );
                    setNbReclamations(
                        Math.round((reclamations / nbTaux) * 100) / 100
                    );
                });
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
                get_human_ressources(endDate).then((data) => {
                    let nbTaux = 0;
                    let tauxAbstent = 0;
                    let nbTauxGreve = 0;
                    let nbTauxRecrutement = 0;
                    let nbTauxTurnOver = 0;

                    data.data.forEach((item) => {
                        if (item.tauxAbsenteisme !== undefined) {
                            nbTaux++;
                            tauxAbstent += item.tauxAbsenteisme;
                        }
                        if (item.tauxGreve !== undefined) {
                            nbTaux++;
                            nbTauxGreve += item.tauxGreve;
                        }
                        if (item.tauxRecrutement !== undefined) {
                            nbTaux++;
                            nbTauxRecrutement += item.tauxRecrutement;
                        }
                        if (item.nbTauxTurnOver !== undefined) {
                            nbTaux++;
                            nbTauxTurnOver += item.tauxTurnOver;
                        }
                    });
                    setTauxAbsenteisme(Math.round(tauxAbstent / nbTaux * 100) / 100 + "%");
                    setTauxGreve(Math.round(nbTauxGreve / nbTaux * 100) / 100 + "%")
                    setTauxGreve(Math.round(nbTauxGreve / nbTaux * 100) / 100 + "%")
                    setTauxRecrutement(Math.round(nbTauxRecrutement / nbTaux * 100) / 100 + "%")
                    setTauxTurnOver(Math.round(nbTauxTurnOver / nbTaux * 100) / 100 + "%")

                });
                get_achat(endDate).then(res => {
                    let nbTotalVenduinside = 0;
                    let nbTotalTicketsSms = 0;
                    let nbTotalTicketsInside = 0;
                    let ticketsOcc = 0;
                    let smsOcc = 0;
                    res.data.forEach(item => {
                        nbTotalVenduinside += item.nbTotal;
                        nbTotalTicketsSms += item.nbTicketsSMS;
                        nbTotalTicketsInside += item.nbTicketsVendus;
                        if (item.ventePopulaire === "Ticket") {
                            ticketsOcc++
                        }
                        if (item.ventePopulaire === "SMS") {
                            smsOcc++
                        }
                    });
                    setNbTotalVendu(nbTotalVenduinside);
                    setNbTotalTicketsSms(nbTotalTicketsSms);
                    setNbTotalTickets(nbTotalTicketsInside);
                    setVentePopulaire(ticketsOcc < smsOcc ? "SMS" : "Ticket")
                })
                get_technical(endDate).then((data) => {
                    let nbTaux = 0;
                    let nbTauxPannesBusEtTeor = 0;
                    let nbConsommationBusEtTeorAuxCentsKms = 0;
                    let nbConsommationTramAuxCentsKms = 0;
                    let nbTauxPannesTram = 0;

                    data.data.forEach((item) => {
                        if (item.tauxPannesBusEtTeor !== undefined) {
                            nbTaux++;
                            nbTauxPannesBusEtTeor += item.tauxPannesBusEtTeor;
                        }
                        if (item.consommationBusEtTeorAuxCentsKms !== undefined) {
                            nbTaux++;
                            nbConsommationBusEtTeorAuxCentsKms +=
                                item.consommationBusEtTeorAuxCentsKms;
                        }
                        if (item.consommationTramAuxCentsKms !== undefined) {
                            nbTaux++;
                            nbConsommationTramAuxCentsKms += item.consommationTramAuxCentsKms;
                        }
                        if (item.tauxPannesTram !== undefined) {
                            nbTaux++;
                            nbTauxPannesTram += item.tauxPannesTram;
                        }
                    });
                    setTauxPannesBusEtTeor(
                        Math.round((nbTauxPannesBusEtTeor / nbTaux) * 100) / 100 + "%"
                    );
                    setConsommationBusEtTeorAuxCentsKms(
                        Math.round((nbConsommationBusEtTeorAuxCentsKms / nbTaux) * 100) /
                        100 +
                        "L"
                    );
                    setConsommationTramAuxCentsKms(
                        Math.round((nbConsommationTramAuxCentsKms / nbTaux) * 100) / 100 + "L"
                    );
                    setTauxPannesTram(
                        Math.round((nbTauxPannesTram / nbTaux) * 100) / 100 + "%"
                    );
                });
                get_exploitation(endDate).then(
                    r => {
                        let nbAccidentsMaterielsInside = 0;
                        let nbAccidentsCorporelsInside = 0;
                        let tauxControleInside = 0;
                        let human = {
                            val: 0,
                            label: "Humaine"
                        };
                        let info = {
                            val: 0,
                            label: "Intempérie"
                        };
                        let itemp = {
                            val: 0,
                            label: "Informatique"
                        };

                        r.data.forEach(item => {
                            nbAccidentsMaterielsInside += item.nbAccidentsMateriels;
                            nbAccidentsCorporelsInside += item.nbAccidentsCorporels;
                            tauxControleInside += item.tauxControle;
                            if (item.causeAccident === "HUMAINE") {
                                human.val++
                            }
                            if (item.causeAccident === "INTEMPÉRIE") {
                                itemp.val++
                            }
                            if (item.causeAccident === "INFORMATIQUE") {
                                info.val++
                            }
                        })
                        let res = [human, itemp, info];
                        if (Math.max(...res) === res[0]) {
                            setCauseAccident("HUMAINE")
                        }
                        if (Math.max(...res) === res[1]) {
                            setCauseAccident("INTEMPÉRIE")
                        }
                        if (Math.max(...res) === res[2]) {
                            setCauseAccident("INFORMATIQUE")
                        }
                        setNbAccidentsMateriels(nbAccidentsMaterielsInside);
                        setNbAccidentsCorporels(nbAccidentsCorporelsInside);
                        setTauxControle(tauxControleInside);
                    }
                )

            } else {
                get_commercial().then((data) => {
                    let nbTaux = 0;
                    let nbRecetteGlobale = 0;
                    let nouveauxAbonnements = 0;
                    let nouveauxPartenaires = 0;
                    let reclamations = 0;

                    data.data.forEach((item) => {
                        if (item.recetteGlobale !== undefined) {
                            nbTaux++;
                            nbRecetteGlobale += item.recetteGlobale;
                        }
                        if (item.nbNouveauxAbonnements !== undefined) {
                            nbTaux++;
                            nouveauxAbonnements += item.nbNouveauxAbonnements;
                        }
                        if (item.nbNouveauxPartenaires !== undefined) {
                            nbTaux++;
                            nouveauxPartenaires += item.nbNouveauxPartenaires;
                        }
                        if (item.nbReclamations !== undefined) {
                            nbTaux++;
                            reclamations += item.nbReclamations;
                        }
                    });
                    setRecetteGlobale(Math.round((nbRecetteGlobale / nbTaux) * 100) / 100);
                    setNbNouveauxAbonnements(
                        Math.round((nouveauxAbonnements / nbTaux) * 100) / 100
                    );
                    setNbNouveauxPartenaires(
                        Math.round((nouveauxPartenaires / nbTaux) * 100) / 100
                    );
                    setNbReclamations(Math.round((reclamations / nbTaux) * 100) / 100);
                });
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
                get_human_ressources().then((data) => {
                    let nbTaux = 0;
                    let tauxAbstent = 0;
                    let nbTauxGreve = 0;
                    let nbTauxRecrutement = 0;
                    let nbTauxTurnOver = 0;
                    data.data.forEach((item) => {
                        if (item.tauxAbsenteisme !== undefined) {
                            nbTaux++;
                            tauxAbstent += item.tauxAbsenteisme;
                        }
                        if (item.tauxGreve !== undefined) {
                            nbTaux++;
                            nbTauxGreve += item.tauxGreve;
                        }
                        if (item.tauxRecrutement !== undefined) {
                            nbTaux++;
                            nbTauxRecrutement += item.tauxRecrutement;
                        }
                        if (item.tauxTurnOver !== undefined) {
                            nbTaux++;
                            nbTauxTurnOver += item.tauxTurnOver;
                        }
                    });
                    setTauxAbsenteisme(Math.round(tauxAbstent / nbTaux * 100) / 100 + "%");
                    setTauxGreve(Math.round(nbTauxGreve / nbTaux * 100) / 100 + "%")
                    setTauxGreve(Math.round(nbTauxGreve / nbTaux * 100) / 100 + "%")
                    setTauxRecrutement(Math.round(nbTauxRecrutement / nbTaux * 100) / 100 + "%")
                    setTauxTurnOver(Math.round(nbTauxTurnOver / nbTaux * 100) / 100 + "%")
                });
                get_achat().then(res => {
                    let nbTotalVenduinside = 0;
                    let nbTotalTicketsSms = 0;
                    let nbTotalTicketsInside = 0;
                    let ticketsOcc = 0;
                    let smsOcc = 0;
                    res.data.forEach(item => {
                        nbTotalVenduinside += item.nbTotal;
                        nbTotalTicketsSms += item.nbTicketsSMS;
                        nbTotalTicketsInside += item.nbTicketsVendus;
                        if (item.ventePopulaire === "Ticket") {
                            ticketsOcc++
                        }
                        if (item.ventePopulaire === "SMS") {
                            smsOcc++
                        }
                    })
                    console.log(ticketsOcc, smsOcc)
                    setNbTotalVendu(nbTotalVenduinside)
                    setNbTotalTicketsSms(nbTotalTicketsSms);
                    setNbTotalTickets(nbTotalTicketsInside);
                    setVentePopulaire(ticketsOcc < smsOcc ? "SMS" : "Ticket")
                });
                get_technical().then((data) => {
                    let nbTaux = 0;
                    let nbTauxPannesBusEtTeor = 0;
                    let nbConsommationBusEtTeorAuxCentsKms = 0;
                    let nbConsommationTramAuxCentsKms = 0;
                    let nbTauxPannesTram = 0;

                    data.data.forEach((item) => {
                        if (item.tauxPannesBusEtTeor !== undefined) {
                            nbTaux++;
                            nbTauxPannesBusEtTeor += item.tauxPannesBusEtTeor;
                        }
                        if (item.consommationBusEtTeorAuxCentsKms !== undefined) {
                            nbTaux++;
                            nbConsommationBusEtTeorAuxCentsKms +=
                                item.consommationBusEtTeorAuxCentsKms;
                        }
                        if (item.consommationTramAuxCentsKms !== undefined) {
                            nbTaux++;
                            nbConsommationTramAuxCentsKms += item.consommationTramAuxCentsKms;
                        }
                        if (item.tauxPannesTram !== undefined) {
                            nbTaux++;
                            nbTauxPannesTram += item.tauxPannesTram;
                        }
                    });
                    setTauxPannesBusEtTeor(
                        Math.round((nbTauxPannesBusEtTeor / nbTaux) * 100) / 100 + "%"
                    );
                    setConsommationBusEtTeorAuxCentsKms(
                        Math.round((nbConsommationBusEtTeorAuxCentsKms / nbTaux) * 100) /
                        100 +
                        "L"
                    );
                    setConsommationTramAuxCentsKms(
                        Math.round((nbConsommationTramAuxCentsKms / nbTaux) * 100) / 100 + "L"
                    );
                    setTauxPannesTram(
                        Math.round((nbTauxPannesTram / nbTaux) * 100) / 100 + "%"
                    );
                });
                get_exploitation().then(
                    r => {
                        console.log(r)
                        let nbAccidentsMaterielsInside = 0;
                        let nbAccidentsCorporelsInside = 0;
                        let tauxControleInside = 0;
                        let human = 0;
                        let info = 0;
                        let itemp = 0;

                        r.data.forEach(item => {
                            nbAccidentsMaterielsInside += item.nbAccidentsMateriels;
                            nbAccidentsCorporelsInside += item.nbAccidentsCorporels;
                            tauxControleInside += item.tauxControle;
                            if (item.causeAccident === "HUMAINE") {
                                human++
                            }
                            if (item.causeAccident === "INTEMPÉRIE") {
                                itemp++
                            }
                            if (item.causeAccident === "INFORMATIQUE") {
                                info++
                            }
                        })
                        let res = [human, itemp, info];
                        console.log(res)

                        if (Math.max(...res) === res[0]) {
                            setCauseAccident("HUMAINE")
                        }
                        if (Math.max(...res) === res[1]) {
                            setCauseAccident("INTEMPÉRIE")
                        }
                        if (Math.max(...res) === res[2]) {
                            setCauseAccident("INFORMATIQUE")
                        }
                        setNbAccidentsMateriels(nbAccidentsMaterielsInside);
                        setNbAccidentsCorporels(nbAccidentsCorporelsInside);
                        setTauxControle(tauxControleInside);
                    }
                )
            }

        }, [date]
    )

    if (annyang) {
        // Let's define a command.
        annyang.setLanguage("fr");
        var commands = {
            "montre achat": function () {
                const cube = document.getElementById("cube");
                cube.className = "";
                cube.classList.add("show-front");
                fade();
                speechSynthesis("Voici le service achat", "fr-FR");
            },
            "montre commercial": function () {
                const cube = document.getElementById("cube");
                cube.className = "";
                cube.classList.add("show-back");
                fade();
                speechSynthesis("Voici le service commercial", "fr-FR");
            },
            "montre RH": function () {
                const cube = document.getElementById("cube");
                cube.className = "";
                cube.classList.add("show-right");
                fade();
                speechSynthesis("Voici le service resssources humaines", "fr-FR");
            },
            "montre meca": function () {
                const cube = document.getElementById("cube");
                cube.className = "";
                cube.classList.add("show-left");
                fade();
                speechSynthesis("Voici le service mecanique", "fr-FR");
            },
            "montre exploitation": function () {
                const cube = document.getElementById("cube");
                cube.className = "";
                cube.classList.add("show-top");
                fade();
                speechSynthesis("Voici le service exploitation", "fr-FR");
            },
            "montre environnement": function () {
                const cube = document.getElementById("cube");
                cube.className = "";
                cube.classList.add("show-bottom");
                fade();
                speechSynthesis("Voici le service environnement", "fr-FR");
            },
        };

        // Add our commands to annyang
        annyang.addCommands(commands);

        // Start listening.
        annyang.start();
    }
    setTimeout(details, 2000);
    return (
        <div className="page">
            <section className="container">
                <div id="cube">
                    <figure className="front title">
                        <Euro/>
                        <h1>Achat</h1>
                        <p>
                            Estimation de la variation des recettes par comparaison à 2020 :
                            soit environ <span>{recetteGlobale} M en cumulé {date ? date : "jusqu'à ce jour"}</span>
                        </p>
                    </figure>
                    <figure className="front details">
                        <div className="cart cube1"></div>
                        <div className="cart cube2">
                            <h2>Tickets vendus</h2>
                            <div className="number">{nbTotalTickets}</div>
                            
                        </div>
                        <div className="cart cube3"></div>
                        <div className="cart cube4">
                            <h2>Tickets SMS</h2>
                            <div className="number">{nbTotalTicketsSms}</div>
                            
                        </div>
                        <div className="cart cube5"></div>
                        <div className="cart cube6">
                            <h2>Vente populaire</h2>
                            <div className="number">{ventePopulaire}</div>
                            
                        </div>
                        <div className="cart cube7"></div>
                        <div className="cart cube8">
                            <h2>Totals</h2>
                            <div className="number">{nbTotalVendu}</div>
                            
                        </div>
                        <div className="cart cube9"></div>
                    </figure>
                    <figure className="back title">
                        <Stats/>
                        <h1>Commercial</h1>
                        <p>
                            Estimation de la variation des recettes par comparaison à 2020 :
                            soit environ <span>{recetteGlobale} M en cumulé {date ? date : "jusqu'à ce jour"}</span>
                        </p>
                    </figure>
                    <figure className="back details">
                        <div className="cart cube10"></div>
                        <div className="cart cube2">
                            <h2>Moyenne recette globale</h2>
                            <div className="number">{recetteGlobale}</div>
                            
                        </div>
                        <div className="cart cube11"></div>
                        <div className="cart cube4">
                            <h2>Moyenne d'abonnements</h2>
                            <div className="number">{nbNouveauxAbonnements}</div>
                            
                        </div>
                        <div className="cart cube12"></div>
                        <div className="cart cube6">
                            <h2>Moyenne de nouveaux partenaires</h2>
                            <div className="number">{nbNouveauxPartenaires}</div>
                            
                        </div>
                        <div className="cart cube13"></div>
                        <div className="cart cube8">
                            <h2>Moyenne de réclamations</h2>
                            <div className="number">{nbReclamations}</div>
                            
                        </div>
                        <div className="cart cube14"></div>
                    </figure>
                    <figure className="right title">
                        <User/>
                        <h1>R H</h1>
                        <p>
                            Estimation de la variation des recettes par comparaison à 2020 :
                            soit environ <span>{recetteGlobale} M en cumulé {date ? date : "jusqu'à ce jour"}</span>
                        </p>
                    </figure>
                    <figure className="right details">
                        <div className="cart cube15"></div>
                        <div className="cart cube2">
                            <h2>Taux d'absentéisme</h2>
                            <div className="number">{tauxAbsenteisme}</div>
                            
                        </div>
                        <div className="cart cube16"></div>
                        <div className="cart cube4">
                            <h2>Taux de grève</h2>
                            <div className="number">{tauxGreve}</div>
                            
                        </div>
                        <div className="cart cube17"></div>
                        <div className="cart cube6">
                            <h2>Taux de recrutement</h2>
                            <div className="number">{tauxRecrutement}</div>
                            
                        </div>
                        <div className="cart cube18"></div>
                        <div className="cart cube8">
                            <h2>Taux de turnOver</h2>
                            <div className="number">{tauxTurnOver}</div>
                            
                        </div>
                        <div className="cart cube19"></div>
                    </figure>
                    <figure className="left title">
                        <Meca/>
                        <h1>Meca</h1>
                        <p>
                            Estimation de la variation des recettes par comparaison à 2020 :
                            soit environ <span>{recetteGlobale} M en cumulé {date ? date : "jusqu'à ce jour"}</span>
                        </p>
                    </figure>
                    <figure className="left details">
                        <div className="cart cube20"></div>
                        <div className="cart cube2">
                            <h2>Taux de pannes tram</h2>
                            <div className="number">{tauxPannesTram}</div>
                            
                        </div>
                        <div className="cart cube21"></div>
                        <div className="cart cube4">
                            <h2>Statistiques 2</h2>
                            <div className="number">Lorem ipsum dolor sit amet,</div>
                            
                        </div>
                        <div className="cart cube22"></div>
                        <div className="cart cube6">
                            <h2>Consommation tram km/100</h2>
                            <div className="number">{consommationTramAuxCentsKms}</div>
                            
                        </div>
                        <div className="cart cube23"></div>
                        <div className="cart cube8">
                            <h2>Consommation bus/Teor km/100</h2>
                            <div className="number">{consommationBusEtTeorAuxCentsKms}</div>
                            
                        </div>
                        <div className="cart cube24"></div>
                    </figure>
                    <figure className="top title">
                        <Ticket/>
                        <h1>Exploitation</h1>
                        <p>
                            Estimation de la variation des recettes par comparaison à 2020 :
                            soit environ <span>{recetteGlobale} M en cumulé {date ? date : "jusqu'à ce jour"}</span>
                        </p>
                    </figure>
                    <figure className="top details">
                        <div className="cart cube25"></div>
                        <div className="cart cube2">
                            <h2>Nb d'accidents matériels</h2>
                            <div className="number">{nbAccidentsMateriels}</div>
                            
                        </div>
                        <div className="cart cube26"></div>
                        <div className="cart cube4">
                            <h2>Nb d'accidents corporels</h2>
                            <div className="number">{nbAccidentsCorporels}</div>
                            
                        </div>
                        <div className="cart cube27"></div>
                        <div className="cart cube6">
                            <h2>Cause d'accident</h2>
                            <div className="number">{causeAccident}</div>
                            
                        </div>
                        <div className="cart cube28"></div>
                        <div className="cart cube8">
                            <h2>Taux de controle</h2>
                            <div className="number">{tauxControle}</div>
                            
                        </div>
                        <div className="cart cube29"></div>
                    </figure>
                    <figure className="bottom title">
                        <Feuille/>
                        <h1>Environement</h1>
                        <p>
                            Estimation de la variation des recettes par comparaison à 2020 :
                            soit environ <span>{recetteGlobale} M en cumulé {date ? date : "jusqu'à ce jour"}</span>
                        </p>
                    </figure>
                    <figure className="bottom details">
                        <div className="cart cube30"></div>
                        <div className="cart cube2">
                            <h2>Nombre de signalements</h2>
                            <div className="number">{nbSignalementsQualiteEnvironement}</div>
                            
                        </div>
                        <div className="cart cube31"></div>
                        <div className="cart cube4">
                            <h2>Impact carbone</h2>
                            <div className="number">{impactCarbone}</div>
                            
                        </div>
                        <div className="cart cube32"></div>
                        <div className="cart cube6">
                            <h2>Incidents environnementaux</h2>
                            <div className="number">{incidentsEnvironnementaux}</div>
                            
                        </div>
                        <div className="cart cube33"></div>
                        <div className="cart cube8">
                            <h2>Buget environnement</h2>
                            <div className="number">{budgetEnvironnement}</div>
                            
                        </div>
                        <div className="cart cube34"></div>
                    </figure>
                </div>
            </section>
        </div>
    );
};

function details() {
    const Damier = document.getElementsByClassName("details");
    const title = document.getElementsByClassName("title");
    for (var i = 0; i < title.length; i++) {
        title[i].style.display = "none";
        Damier[i].style.opacity = "100";
        Damier[i].style.display = "flex";
    }
}

function fade() {
    const Damier = document.getElementsByClassName("details");
    const title = document.getElementsByClassName("title");
    for (var i = 0; i < title.length; i++) {
        title[i].style.display = "flex";
        Damier[i].style.display = "none";
    }
    setTimeout(details, 2000);
}

export function cubeFace(dataFace) {
    fade();
    const cube = document.getElementById("cube");
    cube.className = "";
    cube.classList.add(dataFace);
}

export default Cube;
