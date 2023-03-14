import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import { Notification } from "./features/notification/Notification";
import i18n from "../src/features/i18n/i18n.config";
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <Notification />
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </I18nextProvider>
    </React.StrictMode>
);
