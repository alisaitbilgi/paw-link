import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./pages/App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(App, {}, void 0) }, void 0) }, void 0));
