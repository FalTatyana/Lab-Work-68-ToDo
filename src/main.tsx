import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store.ts';
import { Provider } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <App />
  </Provider>
);
