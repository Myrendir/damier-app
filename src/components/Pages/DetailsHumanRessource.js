import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SquareDecorator from "../SquareDecorator";
import SquareDetails from "../SquareDetails";
import { useStore } from "react-context-hook";

import get_human_ressources from "../../services/humanRessourcesService";

export default function DetailsHumanRessource({ color, ...props }) {
  const [date] = useStore("date");
  const [tauxAbsenteisme, setTauxAbsenteisme] = useState(0);
  const [tauxGreve, setTauxGreve] = useState(0);
  const [tauxRecrutement, setTauxRecrutement] = useState(0);
  const [tauxTurnOver, setTauxTurnOver] = useState(0);

  function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0);
  }
  useEffect(() => {
    if (date !== 0) {
      let newDate = new Date(date);
      let endDate = getLastDayOfMonth(
        newDate.getFullYear(),
        newDate.getMonth()
      );
      endDate = endDate.toISOString().split("T")[0];

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
        setTauxAbsenteisme( Math.round(tauxAbstent / nbTaux * 100)/ 100 + "%");
        setTauxGreve(Math.round(nbTauxGreve / nbTaux* 100)/ 100 + "%")
        setTauxGreve(Math.round(nbTauxGreve / nbTaux* 100)/ 100 + "%")
        setTauxRecrutement(Math.round(nbTauxRecrutement / nbTaux* 100)/ 100 + "%")
        setTauxTurnOver(Math.round(nbTauxTurnOver / nbTaux* 100)/ 100 + "%")

      });
    } else {
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
        setTauxAbsenteisme( Math.round(tauxAbstent / nbTaux * 100)/ 100 + "%");
        setTauxGreve(Math.round(nbTauxGreve / nbTaux* 100)/ 100 + "%")
        setTauxGreve(Math.round(nbTauxGreve / nbTaux* 100)/ 100 + "%")
        setTauxRecrutement(Math.round(nbTauxRecrutement / nbTaux* 100)/ 100 + "%")
        setTauxTurnOver(Math.round(nbTauxTurnOver / nbTaux* 100)/ 100 + "%")
      });
    }
  }, [date]);
  return (
    <div style={styles.columns} {...props}>
      <div style={styles.box}>
        <SquareDecorator color="#dab6c2" />
        <SquareDetails
          data={tauxAbsenteisme}
          title="Taux d'absentéisme"
          btnColor="#094f66"
          color="#f8f8f8"
          icon={"/user.svg"}
        />
        <SquareDecorator color="#c77a8c" />
      </div>
      <div style={styles.box}>
        <SquareDetails
          data={tauxGreve}
          color="#f8f8f8"
          title="Taux de grève"
          btnColor="#094f66"
          icon={"/user.svg"}
        />
        <SquareDecorator color="#988ab2" />
        <SquareDetails
          color="#f8f8f8"
          data={tauxRecrutement}
          title="Taux de recrutement"
          icon={"/user.svg"}
          btnColor="#094f66"
        />
      </div>

      <div style={styles.box}>
        <SquareDecorator color="#745582" />
        <SquareDetails
          btnColor="#094f66"
          data={tauxTurnOver}
          title="Taux de turnOver"
          color="#f8f8f8"
          icon={"/user.svg"}
        />
        <SquareDecorator color="#dab6c2" />
      </div>
    </div>
  );
}

const styles = {
  columns: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
  },
};

DetailsHumanRessource.propTypes = {
  color: PropTypes.string,
};

DetailsHumanRessource.defaultProps = {
  color: "",
};
