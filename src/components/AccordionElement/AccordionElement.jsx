import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionElement = ({ accordiondata }) => {
  return (
    <div>
      {accordiondata?.map((item, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.description}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default React.memo(AccordionElement);
