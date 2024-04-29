import React from 'react'
import ReactDOM from 'react-dom/client'
// import {NextUIProvider} from "@nextui-org/react";
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './components/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* components under provider all can access the store. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
