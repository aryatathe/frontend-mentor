import * as React from "react";

import arrow from "../images/icon-arrow.svg";

import { styled } from "@mui/material/styles";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

const CustomInput = styled(Input)(({ theme }) => ({
  height: 60,
  width: "100%",
  maxWidth: 560,
  borderRadius: 10,
  padding: "0 0 0 25px",
  backgroundColor: "white",
  fontWeight: 400,
  fontSize: 18,
  color: "hsl(0, 0%, 19%)",
}));

const CustomAdornment = styled(InputAdornment)(({ theme }) => ({}));

const CustomButton = styled(IconButton)(({ theme }) => ({
  height: 60,
  width: 50,
  borderRadius: "0 10px 10px 0",
  backgroundColor: "black",
  fontSize: 18,
  color: "white",
  "&:hover": {
    backgroundColor: "hsl(0, 0%, 17%)",
  },
}));

interface FuncProps {
  input: string;
  setInput(arg: string): void;
  search(): void;
}

const Search = ({ input, setInput, search }: FuncProps): JSX.Element => {
  return (
    <CustomInput
      disableUnderline
      value={input}
      onChange={(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => setInput(e.target.value)}
      onKeyDown={(
        e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        if (e.key == "Enter") {
          search();
        }
      }}
      placeholder="Search for any IP Address or domain"
      endAdornment={
        <CustomAdornment position="end">
          <CustomButton onClick={search}>
            <Icon>
              <img src={arrow} />
            </Icon>
          </CustomButton>
        </CustomAdornment>
      }
    />
  );
};

export default Search;
