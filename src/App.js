import {
  Box,
  Checkbox,
  Container,
  FormLabel,
  Link,
  Typography,
} from "@mui/material";
import "./App.css";
import styled from "@emotion/styled";
import Progress_bar from "./components/Progress_bar";
import CustomizedSlider from "./components/slider";
import StyleTextField from "./components/TextField";
import DateOfBirth from "./components/DateOfBirth";
import ButtonCom from "./components/Button";

export const BoxStyle = styled(Box)`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SpanStyle = styled.span`
  display: flex;
  justify-content: center;
`;
export const StyledLink = styled(Link)`
  /* 
  display: flex;
  margin-bottom: 20px; */
  color: black;
  font-weight: bold;
  text-decoration: none;
  text-decoration-line: underline;
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function App() {
  return (
    <Container sx={{ marginTop: "40px", width: "60%" }}>
      <BoxStyle>
        <FormLabel></FormLabel>
        <FormLabel sx={{ color: "#000", marginRight: 12 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Registration{" "}
          </Typography>
          <SpanStyle>
            <Progress_bar bgcolor="#f0f0f0" progress="100" height={5} />
            <Progress_bar bgcolor="#ffd70d" progress="100" height={5} />
            <Progress_bar bgcolor="#f0f0f0" progress="100" height={5} />
          </SpanStyle>
        </FormLabel>
      </BoxStyle>
      <BoxStyle>
        <FormLabel>Text/Number input</FormLabel>
        <StyleTextField lables="CR Number" />
      </BoxStyle>
      <BoxStyle>
        <FormLabel>Phone Number</FormLabel>
        <StyleTextField lables="+966 Phone number" />
      </BoxStyle>
      <BoxStyle>
        <FormLabel>Money input</FormLabel>
        <StyleTextField lables="What is the estimated cost?" end={"SAR"} />
      </BoxStyle>
      <BoxStyle>
        <FormLabel
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
          }}
        >
          Slider
        </FormLabel>
        <CustomizedSlider />
      </BoxStyle>
      <BoxStyle>
        <FormLabel>Date Of Birth</FormLabel>
        <DateOfBirth />
      </BoxStyle>
      <BoxStyle>
        <FormLabel>Checkbox</FormLabel>
        <SpanStyle>
          <Checkbox {...label} color="default" />
          <Typography>
            I agree to receive <StyledLink>Business Communication</StyledLink>
            from bildnw
          </Typography>
        </SpanStyle>
      </BoxStyle>
      <BoxStyle>
        <FormLabel>Button</FormLabel>
        <ButtonCom />
      </BoxStyle>
    </Container>
  );
}

export default App;
