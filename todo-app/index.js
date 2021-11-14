import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {Provider} from "react-redux";

import {store} from "./store.js";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/700.css";

store.subscribe(()=>{
    const state = store.getState();
    localStorage.setItem('todo-list', JSON.stringify(state.list));
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root"));
