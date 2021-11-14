import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

import iconCheck from "./images/icon-check.svg";
import iconCross from "./images/icon-cross.svg";
import iconMoon from "./images/icon-moon.svg";
import iconSun from "./images/icon-sun.svg";

import { globalTheme, lightPalette, darkPalette } from "./styles.js";

const App=()=>{

  const state=useSelector(state=>state);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [active, setActive] = useState(0);

  const theme = createTheme(globalTheme(state.dark ? darkPalette : lightPalette));

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline /><Container><Stack variant="main" direction="column">
      <Stack
        variant="header"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h1" fontWeight="fontWeightBold">
          T O D O
        </Typography>
          <IconButton
            variant="modeSwitch"
            onClick={() => dispatch({
                      type: "DARK"
            })}
          >
          <Icon>
            <img alt="light-dark-mode" src={state.dark?iconSun:iconMoon} />
          </Icon>
        </IconButton>
      </Stack>
      <Input disableUnderline
        placeholder="Create a new todo.."
        startAdornment= {
          <InputAdornment position="start">
            <IconButton disableRipple variant="uncheck">
              <Icon variant="uncheck" />
            </IconButton>
          </InputAdornment>
        }
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={e=>{
          if(e.keyCode==13){
            dispatch({
              type: "UPDATE",
              payload: [...state.list, [input, 0]]
            });
            setInput("");
          }
        }}
      />
      <DragDropContext
        onDragEnd={(result)=>{
          if (!result.destination) return;
          let newList=state.list;
          let [changedItem]=newList.splice(result.source.index, 1);
          newList.splice(result.destination.index, 0, changedItem);
          dispatch({
            type: "UPDATE",
            payload: newList
          })
        }}
      >
        <Droppable droppableId="dnd">
          {(provided)=>(
            <List
              className="dnd"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
                {state.list.filter(x => { return active==0?true:(x[1]==active-1) }).map((x,i)=>{return(
                <Draggable
                  key={i}
                  draggableId={"item-"+i}
                  index={i}
                >
                  {(provided)=>(
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <IconButton
                        variant={x[1] ? "check" : "uncheck"}
                        onClick={() => {
                          let temp = state.list;
                          temp[i][1] = 1 - temp[i][1];
                          dispatch({
                            type: "UPDATE",
                            payload: temp
                          });
												}}
                      >
                        <Icon variant={x[1] ? "check" : "uncheck"}>
                          <img alt="markCompleted" src={iconCheck} />
                        </Icon>
                      </IconButton>
                      <ListItemText variant={x[1] ? "check" : "uncheck"} primary={x[0]} />
                      <IconButton variant="cross"
                        onClick={() => {
                          let temp=state.list;
                          temp.splice(i,1);
                          dispatch({
                            type: "UPDATE",
                            payload: temp
                          });
                        }}
                      >
                        <Icon>
                            <img alt="delete" src={iconCross} />
                        </Icon>
                      </IconButton>
                    </ListItem>
                  )}
                </Draggable>
              )})}
              {provided.placeholder}
              <Stack variant="footer" direction="row" justifyContent="space-between">
                <Typography variant="body2" fontWeight="fontWeightRegular">
                  {state.list.length} items left
                </Typography>
                <Stack variant="filters" direction="row" justifyContent="center">
                  <Button variant={active == 0 ? "active" : ""} onClick={() => setActive(0)}>All</Button>
                  <Button variant={active == 1 ? "active" : ""} onClick={() => setActive(1)}>Active</Button>
                  <Button variant={active == 2 ? "active" : ""} onClick={() => setActive(2)}>Completed</Button>
                </Stack>
                <Button
                  variant="inactive"
                  onClick={() => {
                    dispatch({
                      type: "UPDATE",
                      payload: state.list.filter(x => {return x[1]==0})
                    });
                  }}
                >
                  Clear Completed
                </Button>
              </Stack>
            </List>
          )}
        </Droppable>
      </DragDropContext>
      <Typography variant="body3" fontWeight="fontWeightRegular">
        Drag and drop to reorder list
      </Typography>
    </Stack></Container></ThemeProvider>
  )
}

export default App;
