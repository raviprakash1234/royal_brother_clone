import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import AppContextProvider from "../src/appContext/AppContextProvider"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import {store} from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ChakraProvider>
  <AppContextProvider>
  <Provider store={store}>
    <App />
    </Provider>
    </AppContextProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
