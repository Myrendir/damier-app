import * as React from "react";
import { Button, Modal, Box } from "@mui/material";
import PropTypes from "prop-types";

export default function SquareDetails({ title,color, btnColor, icon, data, ...props }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{...styles.box, backgroundColor: color}} {...props}>
      <div height="10%">
        <p style={{textAlign:"center", fontWeight:"bold", fontSize:"1.2em" }}> {title}</p>
      </div>
      <div style={{textAlign:"center" }}>
        <img width="30"  class="fit-picture" src={icon} alt={title} />
      </div>
      <div height="10%">
        <p style={{textAlign:"center" , height:"100%", fontSize:"1.2em" }} variant="h4"> {data}</p>
      </div>
      <div style={{textAlign:"center" }}>
      <Button style={{ borderRadius: 50 ,color:"white", fontSize:"0.9em", background: btnColor, height:"20px"}} onClick={handleOpen}>
        En savoir plus
      </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <p id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </p>
          <p id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          </Box>
      </Modal>
    </div>
  );
}

const styles = {
  box: {
    width: 200,
    height:"100%",
    maxHeight: 215,
    borderRadius: "30px",
    boxShadow: "0px 4px 9px 1px rgba(0,0,0,0.2)",
    mr:"0.5rem",
    mb:"0.5rem",
    ml:"0.5rem"
  },

  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
};

SquareDetails.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  btnColor: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SquareDetails.defaultProps = {
  title: "Commercial",
  data: 2500,
};
