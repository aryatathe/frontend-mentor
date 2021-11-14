import {createStore} from "redux";

const reducers=(state={
    list: localStorage.hasOwnProperty('todo-list')?JSON.parse(localStorage.getItem('todo-list')):[],
    dark: 0
}, action)=>{
    switch(action.type){
        case "DARK": return {...state, dark: 1-state.dark};
        case "UPDATE": return {...state, list: action.payload};
        default: return state;
    }
}

export const store=createStore(reducers);
