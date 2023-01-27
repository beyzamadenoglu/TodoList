import Page from "./pages/TodoPage"
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/index.scss";


function App() {
  return (
    <div className="App">
      <Page />
      <ToastContainer />
    </div>
  );
}

export default App;
