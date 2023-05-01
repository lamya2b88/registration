import styled from "@emotion/styled";
import { InputAdornment, TextField } from "@mui/material";
import { Component } from "react";

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

class StyleTextField extends Component {
  render() {
    return (
      <>
        <CssTextField
          onChange={this.props.handelchange}
          label={this.props.lables}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {this.props.start}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">{this.props.end}</InputAdornment>
            ),
          }}
          size="small"
          variant="outlined"
          sx={{ width: "50ch" }}
        />
      </>
    );
  }
}
export default StyleTextField;
