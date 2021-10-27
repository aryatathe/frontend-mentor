import {createStore} from "redux";

const reducers=(state={
    dark: 0,
    list: {searching: "true"},
    input: "",
    region: 6
}, action)=>{
    switch(action.type){
        case "DARK": return {...state, dark: 1-state.dark};
        case "INPUT": return {...state, input: action.payload};
        case "LIST": return {...state, list: action.payload};
        case "REGION": return {...state, region: action.payload};
        default: return state;
    }
}

export const store=createStore(reducers);
