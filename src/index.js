import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store}  from './store/store';
import { Provider } from 'react-redux';
import { CartProvider } from './context/cart.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>  
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
