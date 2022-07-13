import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SquareDecorator from "../SquareDecorator";
import SquareDetails from "../SquareDetails";
import { useStore } from "react-context-hook";
import get_technical from "../../services/technicalService";
import NavArrow from "../NavArrow";

export default function DetailTechnical({ color, ...props }) {
  const [sideBarcolor, setColor] = useStore("color",  "");

    useEffect(() => {
        setColor("#ff9300");
    },[]);

  const [date] = useStore("date");
  const [tauxPannesBusEtTeor, setTauxPannesBusEtTeor] = useState(0);
  const [
    consommationBusEtTeorAuxCentsKms,
    setConsommationBusEtTeorAuxCentsKms,
  ] = useState(0);
  const [consommationTramAuxCentsKms, setConsommationTramAuxCentsKms] =
    useState(0);
  const [tauxPannesTram, setTauxPannesTram] = useState(0);

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
    } else {
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
    }
  }, [date]);
  return (
      <NavArrow
          left={"Achat"}
          right={"Commercial"}
          top={"Environnement"}
          bot={"Ressources humaines"}
      >
        <div style={styles.columns} {...props}>
          <div style={styles.box}>
            <SquareDecorator color="#e39147" />
            <SquareDetails
                data={tauxPannesBusEtTeor}
                title="Taux de pannes bus/teor"
                btnColor="#F1CE86"
                color="#f8f8f8"
                icon={"/gears.svg"}
            />
            <SquareDecorator color="#ff9300" />
          </div>
          <div style={styles.box}>
            <SquareDetails
                data={tauxPannesTram}
                title="Taux de pannes tram"
                color="#f8f8f8"
                btnColor="#F1CE86"
                icon={"/gears.svg"}
            />
            <SquareDecorator color="#f1ce86" />
            <SquareDetails
                data={consommationTramAuxCentsKms}
                title="consommation tram km/100"
                color="#f8f8f8"
                icon={"/gears.svg"}
                btnColor="#F1CE86"
            />
          </div>

          <div style={styles.box}>
            <SquareDecorator color="#edb312" />
            <SquareDetails
                data={consommationBusEtTeorAuxCentsKms}
                title="Consommation bus/Teor km/100"
                btnColor="#F1CE86"
                color="#f8f8f8"
                icon={"/gears.svg"}
            />
            <SquareDecorator color="#ea7857" />
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

DetailTechnical.propTypes = {
  color: PropTypes.string,
};

DetailTechnical.defaultProps = {
  color: "",
};
