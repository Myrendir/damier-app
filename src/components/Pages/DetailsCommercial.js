import * as React from "react";
import PropTypes from "prop-types";
import SquareDecorator from "../SquareDecorator";
import SquareDetails from "../SquareDetails";

export default function DetailsCommercial({ color, ...props }) {
  return (
    <div style={styles.columns} {...props}>
      <div style={styles.box}>
        <SquareDecorator color="#81450a"  />
        <SquareDetails  btnColor="#B66B13" color="#f8f8f8" icon={"/stats.svg"}/>
        <SquareDecorator color="#b66b13" />
      </div>
      <div style={styles.box}>
        <SquareDetails color="#f8f8f8" btnColor="#B66B13" icon={"/stats.svg"}/>
        <SquareDecorator color="#fedc63" />
        <SquareDetails color="#f8f8f8" icon={"/stats.svg"} btnColor="#B66B13"/>
      </div>

      <div style={styles.box}>
        <SquareDecorator color="#e5af2f" />
        <SquareDetails  btnColor="#B66B13" color="#f8f8f8" icon={"/stats.svg"}/>
        <SquareDecorator color="#fbce43" />
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

DetailsCommercial.propTypes = {
  color: PropTypes.string,
};

DetailsCommercial.defaultProps = {
  color: "",
};
