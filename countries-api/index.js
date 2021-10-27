import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {Provider} from "react-redux";

import {store} from "./store.js";

import '@fortawesome/fontawesome-free/css/all.css';

import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root"));
