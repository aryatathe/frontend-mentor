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
  ip: string | null;
  //version: string;
  city: string | null;
  //region: string;
  region_code: string | null;
  //country: string;
  //country_name: string;
  //country_code: string;
  //country_code_iso3: string;
  //country_capital: string;
  //country_tld: string;
  //continent_code: string;
  in_eu: boolean | null;
  postal: string | null;
  latitude: number | null;
  longitude: number | null;
  //timezone: string;
  utc_offset: string | null;
  //country_calling_code: string;
  //currency: string;
  //currency_name: string;
  //languages: string;
  //country_area: number
  //country_population: number
  //asn: string;
  org: string | null;
  error?: boolean | null;
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
            : res.error === true
            ? "Invalid query"
            : typeof res.ip == "string"
            ? res.ip
            : "-"
        }
      />
      <Info
        heading="LOCATION"
        data={
          res === null
            ? "loading"
            : res.error === true
            ? "-"
            : `${typeof res.city == "string" ? res.city : ""}${
                typeof res.region_code == "string" ||
                typeof res.postal == "string"
                  ? ", "
                  : ""
              }${typeof res.region_code == "string" ? res.region_code : ""} ${
                typeof res.postal == "string" ? res.postal : ""
              }`
        }
      />
      <Info
        heading="TIMEZONE"
        data={
          res === null
            ? "loading"
            : res.error === true
            ? "-"
            : typeof res.utc_offset == "string"
            ? `UTC ${res.utc_offset.substring(0, 3)}:${res.utc_offset.substring(
                3
              )}`
            : "-"
        }
      />
      <Info
        heading="ISP"
        data={
          res === null
            ? "loading"
            : res.error === true
            ? "-"
            : typeof res.org == "string"
            ? res.org
            : "-"
        }
      />
    </CustomStack>
  );
};

//export default Details;
