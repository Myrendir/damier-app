import * as React from "react";
import PropTypes from "prop-types";
import SquareDecorator from "../SquareDecorator";
import SquareDetails from "../SquareDetails";

export default function DetailTechnical({ color, ...props }) {
  return (
    <div style={styles.columns} {...props}>
      <div style={styles.box}>
        <SquareDecorator color="#e39147"  />
        <SquareDetails  btnColor="#F1CE86" color="#f8f8f8" icon={"/gears.svg"}/>
        <SquareDecorator color="#ff9300" />
      </div>
      <div style={styles.box}>
        <SquareDetails color="#f8f8f8" btnColor="#F1CE86" icon={"/gears.svg"}/>
        <SquareDecorator color="#f1ce86" />
        <SquareDetails color="#f8f8f8" icon={"/gears.svg"} btnColor="#F1CE86"/>
      </div>

      <div style={styles.box}>
        <SquareDecorator color="#edb312" />
        <SquareDetails  btnColor="#F1CE86" color="#f8f8f8" icon={"/gears.svg"}/>
        <SquareDecorator color="#ea7857" />
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

DetailTechnical.propTypes = {
  color: PropTypes.string,
};

DetailTechnical.defaultProps = {
  color: "",
};
