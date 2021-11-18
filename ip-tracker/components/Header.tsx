import * as React from "react";

import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: "initial",
  height: 95,
  boxShadow: "none",
  backgroundColor: "transparent",
  [theme.breakpoints.down("sm")]: {
    height: 85,
  },
}));

const Header = (): JSX.Element => {
  return (
    <CustomAppBar>
      <Typography fontWeight="fontWeightMedium" variant="h1">
        IP Address Tracker
      </Typography>
    </CustomAppBar>
  );
};

export default Header;
