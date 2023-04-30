import styled from "@emotion/styled";
import { InputAdornment, TextField } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "gray",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "gray",
    },
  },
});

const StyleTextField = ({ lables, end }) => {
  return (
    <>
      <CssTextField
        label={lables}
        InputProps={{endAdornment: <InputAdornment position="end">{end}</InputAdornment>,}}
        size="small"
        variant="outlined"
        sx={{ width: "50ch" }}
      />
    </>
  );
};

export default StyleTextField;
