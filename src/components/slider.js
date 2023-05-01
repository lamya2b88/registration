import * as React from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const marks = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 5,
  },
  {
    value: 10,
    label: 20,
  },
  {
    value: 15,
  },
  {
    value: 20,
    label: 40,
  },
  {
    value: 25,
  },
  {
    value: 30,
    label: 60,
  },
  {
    value: 35,
  },
  {
    value: 40,
    label: 80,
  },
  {
    value: 45,
  },
  {
    value: 50,
    label: 100,
  },
  {
    value: 55,
  },
  {
    value: 60,
    label: 120,
  },
  {
    value: 65,
  },
  {
    value: 70,
    label: 140,
  },
  {
    value: 75,
  },
  {
    value: 80,
    label: 160,
  },
  {
    value: 85,
  },
  {
    value: 90,
    label: 180,
  },
  {
    value: 95,
  },
  {
    value: 100,
    label: 200,
  },
];

const StyleSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#000" : "#000",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
  },
  // "& .MuiSlider-valueLabel": {
  //   fontSize: 12,
  //   fontWeight: "normal",
  //   top: -6,
  //   backgroundColor: "unset",
  //   color: theme.palette.text.primary,
  //   "&:before": {
  //     display: "none",
  //   },
  //   "& *": {
  //     background: "transparent",
  //     color: theme.palette.mode === "dark" ? "#fff" : "#000",
  //   },
  // },
  "& .MuiSlider-track": {
    border: "#000",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  // "& .MuiSlider-mark": {
  //   backgroundColor: "#bfbfbf",
  //   height: 8,
  //   width: 1,
  //   "&.MuiSlider-markActive": {
  //     opacity: 1,
  //     //   backgroundColor: 'currentColor',
  //   },
  // },
}));

export default function CustomizedSlider({ handelchange }) {
  return (
    <Box sx={{ width: "50ch" }}>
      <Typography gutterBottom>Is there any payment delay?</Typography>
      <StyleSlider onChange={handelchange} defaultValue={50} marks={marks} />
    </Box>
  );
}
