import * as React from "react";

import { styled } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CustomStack = styled(Stack)(({ theme }) => ({
  width: "100%",
  maxWidth: 1100,
  borderRadius: 10,
  margin: 25,
  backgroundColor: "white",
  "& .MuiDivider-root": {
    margin: "40px 0",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 560,
    margin: "25px 0 0 0",
    padding: 25,
    textAlign: "center",
    "& .MuiDivider-root": {
      margin: 0,
      height: 20,
      visibility: "hidden",
    },
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  width: "25%",
  padding: "35px 30px",
  wordBreak: "break-word",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: 0,
    "& p": {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  },
}));

export interface Response {
  query: string;
  status: string;
  region: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  isp: string;
  offset: number;
}

interface FuncProps {
  res: Response | null;
}

interface InfoProps {
  heading: string;
  data: string;
}

const Info = ({ heading, data }: InfoProps): JSX.Element => {
  return (
    <CustomBox>
      <Typography fontWeight="fontWeightBold" variant="h2">
        {heading}
      </Typography>
      <Typography fontWeight="fontWeightMedium" variant="body1">
        {data}
      </Typography>
    </CustomBox>
  );
};

export const Details = ({ res }: FuncProps): JSX.Element => {
  const getDate = (sec: number): string => {
    let minus: string = sec < 0 ? "-" : "+";
    sec = Math.abs(sec) / 60;
    return `UTC ${minus}${Math.floor(sec / 60)
      .toString()
      .padStart(2, "0")}:${(sec % 60).toString().padStart(2, "0")}`;
  };

  return (
    <CustomStack
      direction={{ xs: "column", md: "row" }}
      divider={<Divider orientation="vertical" variant="middle" flexItem />}
    >
      <Info
        heading="IP ADDRESS"
        data={
          res === null
            ? "loading"
            : res.status === "success"
            ? res.query
            : "Invalid query"
        }
      />
      <Info
        heading="LOCATION"
        data={
          res === null
            ? "loading"
            : res.status === "success"
            ? `${res.city}, ${res.region} ${res.zip}`
            : "-"
        }
      />
      <Info
        heading="TIMEZONE"
        data={
          res === null
            ? "loading"
            : res.status === "success"
            ? getDate(res.offset)
            : "-"
        }
      />
      <Info
        heading="ISP"
        data={
          res === null ? "loading" : res.status === "success" ? res.isp : "-"
        }
      />
    </CustomStack>
  );
};

//export default Details;
