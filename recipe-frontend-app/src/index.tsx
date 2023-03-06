import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./RouterEndPoints/HomePage/App";
import { RecipePage } from "./RouterEndPoints/RecipePage/RecipePage";
import reportWebVitals from "./reportWebVitals";
import "./AutoCompleteCSS/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./RouterEndPoints/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "recipe/:name/:id",
    element: <RecipePage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
