import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store}  from './store/store';
import { Provider } from 'react-redux';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';
import { UserProvider } from './context/user.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
      {/* <UserProvider> */}
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      {/* </UserProvider> */}
      </BrowserRouter>  
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
