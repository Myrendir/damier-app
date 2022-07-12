import * as React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

export default function SquareDecorator({ color, ...props }) {
  return <Box sx={styles.box} bgcolor={color} props></Box>;
}

const styles = {
  box: {
    width: 200,
    height:"100%",
    maxHeight: 215,
    mb:"0.5rem",
    mr:"0.5rem",
    ml:"0.5rem",
    borderRadius: "30px",
  },
};

SquareDecorator.propTypes = {
 color: PropTypes.string
};

SquareDecorator.defaultProps = {
color: "red"
};
