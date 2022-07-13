import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SquareDecorator from "../SquareDecorator";
import SquareDetails from "../SquareDetails";
import { useStore } from "react-context-hook";
import get_commercial from "../../services/commercialService";
import NavArrow from "../NavArrow";

export default function DetailsCommercial({ color, ...props }) {
  const [date] = useStore("date");
  const [recetteGlobale, setRecetteGlobale] = useState(0);
  const [nbNouveauxAbonnements, setNbNouveauxAbonnements] = useState(0);
  const [nbNouveauxPartenaires, setNbNouveauxPartenaires] = useState(0);
  const [nbReclamations, setNbReclamations] = useState(0);
const [sideBarcolor, setColor] = useStore("color",  "");

useEffect(() => {
    setColor("#fedc63");
},[]);
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
    }
  }, [date]);
  return (
      <NavArrow
          left={"Achat"}
          right={"Environnement"}
          top={"Exploitation"}
          bot={"Ressources humaines"}
      >
        <div style={styles.columns} {...props}>
          <div style={styles.box}>
            <SquareDecorator color="#81450a" />
            <SquareDetails
                data={recetteGlobale}
                title="Moyenne recette globale"
                btnColor="#B66B13"
                color="#f8f8f8"
                icon={"/stats.svg"}
            />
            <SquareDecorator color="#b66b13" />
          </div>
          <div style={styles.box}>
            <SquareDetails
                data={nbNouveauxAbonnements}
                title="Moyenne d'abonnements"
                color="#f8f8f8"
                btnColor="#B66B13"
                icon={"/stats.svg"}
            />
            <SquareDecorator color="#fedc63" />
            <SquareDetails
                data={nbNouveauxPartenaires}
                title="Moyenne de nouveaux partenaires"
                color="#f8f8f8"
                icon={"/stats.svg"}
                btnColor="#B66B13"
            />
          </div>

          <div style={styles.box}>
            <SquareDecorator color="#e5af2f" />
            <SquareDetails
                data={nbReclamations}
                title="Moyenne de réclamations"
                btnColor="#B66B13"
                color="#f8f8f8"
                icon={"/stats.svg"}
            />
            <SquareDecorator color="#fbce43" />
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

DetailsCommercial.propTypes = {
  color: PropTypes.string,
};

DetailsCommercial.defaultProps = {
  color: "",
};
