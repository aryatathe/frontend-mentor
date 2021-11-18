import * as React from "react";
import { useState, useEffect, Fragment } from "react";

import globalTheme from "./styles";

import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header";
import Search from "./components/Search";
import { Details, Response } from "./components/Details";
import Map from "./components/Map";

import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";

const App = (): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<Response | null>(null);

  useEffect((): void => {
    apiCall();
  }, []);

  useEffect((): void => {
    console.log(data);
  }, [data]);

  const apiCall = (): void => {
    setData(null);
    fetch(
      `http://ip-api.com/json/${input}?fields=status,region,city,zip,lat,lon,offset,isp,query`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setData(error);
        }
      );
  };

  return (
    <ThemeProvider theme={createTheme(globalTheme())}>
      <CssBaseline />
      <Stack direction="column" alignItems="center" sx={{ padding: "0 25px" }}>
        <Header />
        <Search input={input} setInput={setInput} search={apiCall} />
        <Details res={data} />
      </Stack>
      {data === null || data.status == "fail" ? (
        <div />
      ) : (
        <Map lat={data.lat} lon={data.lon} />
      )}
    </ThemeProvider>
  );
};

export default App;
