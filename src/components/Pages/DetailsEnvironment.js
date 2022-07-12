import * as React from "react";
import PropTypes from "prop-types";
import SquareDecorator from "../SquareDecorator";
import SquareDetails from "../SquareDetails";

export default function DetailsEnvironment({ color, ...props }) {
  return (
    <div style={styles.columns} {...props}>
      <div style={styles.box}>
        <SquareDecorator color="#006e37"  />
        <SquareDetails  btnColor="#094F66" color="#f8f8f8" icon={"/leaf.svg"}/>
        <SquareDecorator color="#0c5b53" />
      </div>
      <div style={styles.box}>
        <SquareDetails color="#f8f8f8" btnColor="#094F66" icon={"/leaf.svg"}/>
        <SquareDecorator color="#d4e496" />
        <SquareDetails color="#f8f8f8" icon={"/leaf.svg"} btnColor="#094F66"/>
      </div>

      <div style={styles.box}>
        <SquareDecorator color="#029c51" />
        <SquareDetails  btnColor="#094F66" color="#f8f8f8" icon={"/leaf.svg"}/>
        <SquareDecorator color="#96b996" />
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

DetailsEnvironment.propTypes = {
  color: PropTypes.string,
};

DetailsEnvironment.defaultProps = {
  color: "",
};
