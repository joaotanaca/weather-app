import React from "react";
import ReactDOM from "react-dom";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Template from "./components/Template";
import Forecast from "./pages/forecast";
import AddForecast from "./pages/forecast/add";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Template />}>
            <Route path="forecasts" element={<Forecast />} />
            <Route path="add-forecast" element={<AddForecast />} />
        </Route>,
    ]),
);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("root"),
);
