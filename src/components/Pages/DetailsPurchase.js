import * as React from "react";
import PropTypes from "prop-types";
import SquareDecorator from "../SquareDecorator";
import SquareDetails from "../SquareDetails";

export default function DetailsPurchase({ color, ...props }) {
  return (
    <div style={styles.columns} {...props}>
      <div style={styles.box}>
        <SquareDecorator color="#acc1b8"  />
        <SquareDetails  btnColor="#094f66" color="#f8f8f8" icon={"/euro.svg"}/>
        <SquareDecorator color="#58716e" />
      </div>
      <div style={styles.box}>
        <SquareDetails color="#f8f8f8" btnColor="#094f66" icon={"/euro.svg"}/>
        <SquareDecorator color="#dbe5ca" />
        <SquareDetails color="#f8f8f8" icon={"/euro.svg"} btnColor="#094f66"/>
      </div>

      <div style={styles.box}>
        <SquareDecorator color="#668961" />
        <SquareDetails  btnColor="#094f66" color="#f8f8f8" icon={"/euro.svg"}/>
        <SquareDecorator color="#abc69d" />
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

DetailsPurchase.propTypes = {
  color: PropTypes.string,
};

DetailsPurchase.defaultProps = {
  color: "",
};
