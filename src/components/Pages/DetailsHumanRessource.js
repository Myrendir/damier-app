import * as React from "react";
import PropTypes from "prop-types";
import SquareDecorator from "../SquareDecorator";
import SquareDetails from "../SquareDetails";

export default function DetailsHumanRessource({ color, ...props }) {
  return (
    <div style={styles.columns} {...props}>
      <div style={styles.box}>
        <SquareDecorator color="#dab6c2"  />
        <SquareDetails  btnColor="#094f66" color="#f8f8f8" icon={"/user.svg"}/>
        <SquareDecorator color="#c77a8c" />
      </div>
      <div style={styles.box}>
        <SquareDetails color="#f8f8f8" btnColor="#094f66" icon={"/user.svg"}/>
        <SquareDecorator color="#988ab2" />
        <SquareDetails color="#f8f8f8" icon={"/user.svg"} btnColor="#094f66"/>
      </div>

      <div style={styles.box}>
        <SquareDecorator color="#745582" />
        <SquareDetails  btnColor="#094f66" color="#f8f8f8" icon={"/user.svg"}/>
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
    width:"100%",
},
  box: {
    display: "flex",
        justifyContent: "center",
        width:"100%",
        flexDirection: "row",
        flexWrap: "wrap",
        height: "100%"
  },
};

DetailsHumanRessource.propTypes = {
  color: PropTypes.string,
};

DetailsHumanRessource.defaultProps = {
  color: "",
};
