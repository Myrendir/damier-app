import * as React from "react";
import PropTypes from "prop-types";
import SquareDecorator from "../SquareDecorator";
import SquareDetails from "../SquareDetails";
import {useEffect, useState} from "react";
import {useStore} from "react-context-hook";
import get_achat from "../../services/achatService";

export default function DetailsPurchase({color, ...props}) {
    const [date] = useStore("date");
    const [nbTotalVendu, setNbTotalVendu] = useState(0);
    const [nbTotalTicketsSms, setNbTotalTicketsSms] = useState(0);
    const [nbTotalTickets, setNbTotalTickets] = useState(0);
    const [ventePopulaire, setVentePopulaire] = useState("");

    function getLastDayOfMonth(year, month) {
        return new Date(year, month + 1, 0);
    }

    useEffect(
        () => {
            if (date != 0) {
                let newDate = new Date(date);
                let endDate = getLastDayOfMonth(newDate.getFullYear(), newDate.getMonth());
                endDate = endDate.toISOString().split('T')[0];

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

            } else {
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
            }
        },
        [date]
    )
    return (
        <div style={styles.columns} {...props}>
            <div style={styles.box}>
                <SquareDecorator color="#acc1b8"/>
                <SquareDetails btnColor="#094f66" title={"Tickets vendus"} data={nbTotalTickets} color="#f8f8f8"
                               icon={"/euro.svg"}/>
                <SquareDecorator color="#58716e"/>
            </div>
            <div style={styles.box}>
                <SquareDetails color="#f8f8f8" btnColor="#094f66" title={"Tickets SMS"} data={nbTotalTicketsSms}
                               icon={"/euro.svg"}/>
                <SquareDecorator color="#dbe5ca"/>
                <SquareDetails color="#f8f8f8" icon={"/euro.svg"} title={"Vente populaire"} data={ventePopulaire}
                               btnColor="#094f66"/>
            </div>
            <div style={styles.box}>
                <SquareDecorator color="#668961"/>
                <SquareDetails btnColor="#094f66" title={"Total"} data={nbTotalVendu} color="#f8f8f8"
                               icon={"/euro.svg"}/>
                <SquareDecorator color="#abc69d"/>
            </div>
        </div>
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

DetailsPurchase.propTypes = {
    color: PropTypes.string,
};

DetailsPurchase.defaultProps = {
    color: "",
};
