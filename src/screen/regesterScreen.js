import { Component } from "react";
import { Box, Checkbox, FormLabel, Link, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Progress_bar from "../components/Progress_bar";
import CustomizedSlider from "../components/slider";
import StyleTextField from "../components/TextField";
import DateOfBirth from "../components/DateOfBirth";
import ButtonCom from "../components/Button";

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
  color: black;
  font-weight: bold;
  text-decoration: none;
  text-decoration-line: underline;
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

class RegesterScreen extends Component {
  state = {
    input1: "",
    input2: "",
    input3: "",
    slider: "",
    DOB: "",
    isTrue: false,
  };

  handelChange1 = (e) => {
    this.setState({
      input1: e.target.value,
    });
  };
  handelChange2 = (e) => {
    this.setState({
      input2: e.target.value,
    });
  };
  handelChange3 = (e) => {
    this.setState({
      input3: e.target.value,
    });
  };
  handelChange4 = (e) => {
    this.setState({
      slider: e.target.value,
    });
  };
  handelChange5 = (e) => {
    this.setState({
      DOB: e.target.value,
    });
  };
  handelChange6 = (e) => {
    this.setState({
      isTrue: e.target.checked,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input1);
    console.log(this.state.input2);
    console.log(this.state.input3);
    console.log(this.state.slider);
    console.log(this.state.DOB);
    console.log(this.state.isTrue);
  };
  render() {
    return (
      <form style={{ marginTop: "40px", width: "60%", marginLeft: 155 }}>
        <BoxStyle>
          <FormLabel></FormLabel>
          <FormLabel sx={{ color: "#000", marginRight: 12 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Registration
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
          <StyleTextField
            handelchange={this.handelChange1}
            lables="CR Number"
          />
        </BoxStyle>
        <BoxStyle>
          <FormLabel>Phone Number</FormLabel>
          <StyleTextField
            handelchange={this.handelChange2}
            lables="+966 Phone number"
            start={"+966"}
          />
        </BoxStyle>
        <BoxStyle>
          <FormLabel>Money input</FormLabel>
          <StyleTextField
            handelchange={this.handelChange3}
            lables="What is the estimated cost?"
            end={"SAR"}
          />
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
          <CustomizedSlider handelchange={this.handelChange4} />
        </BoxStyle>
        <BoxStyle>
          <FormLabel>Date Of Birth</FormLabel>
          <DateOfBirth handelchange={this.handelChange5} />
        </BoxStyle>
        <BoxStyle>
          <FormLabel>Checkbox</FormLabel>
          <SpanStyle>
            <Checkbox
              checked={this.state.isTrue}
              onChange={this.handelChange6}
              {...label}
              color="default"
            />
            <Typography>
              I agree to receive <StyledLink>Business Communication</StyledLink>
              from bildnw
            </Typography>
          </SpanStyle>
        </BoxStyle>
        <BoxStyle>
          <FormLabel>Button</FormLabel>
          <ButtonCom handelclick={this.handelSubmit} />
        </BoxStyle>
      </form>
    );
  }
}

export default RegesterScreen;
