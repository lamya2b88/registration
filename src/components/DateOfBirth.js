// import styled from "@emotion/styled";

import styled from "@emotion/styled";
import { TextField } from "@mui/material";

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

const DateOfBirth = ({ handelchange }) => {
  return (
    <>
      <fieldset
        style={{ borderRadius: "5px", borderColor: "#dadada", padding: "2px" }}
      >
        <legend>Date Of Birth</legend>
        <CssTextField
          onChange={handelchange}
          type="date"
          size="small"
          variant="outlined"
          sx={{ width: "50ch", "& fieldset": { border: "none" } }}
        />
      </fieldset>
    </>
  );
};

export default DateOfBirth;
