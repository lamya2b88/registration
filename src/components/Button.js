import { Button } from "@mui/material";

const ButtonCom = ({ handelclick }) => {
  return (
    <>
      <Button
        onClick={handelclick}
        sx={{
          width: "47ch",
          borderRadius: 1,
          backgroundColor: "#ffd10c",
          fontSize: "17px",
          fontWeight: "bold",
          color: "black",
          "&:hover": {
            backgroundColor: "black",
            color: "#ffff",
            boxShadow: "none",
          },
        }}
      >
        Continue
      </Button>
    </>
  );
};

export default ButtonCom;
