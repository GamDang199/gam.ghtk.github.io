import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
