import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterRoutes } from "./router";
import store from "./store";
const { Provider }= require("react-redux");

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterRoutes />
    </Provider>
  </React.StrictMode>
);
