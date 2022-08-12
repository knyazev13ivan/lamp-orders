import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import CreateNewLamp from "./pages/CreateNewLamp";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NewOrder from "./pages/NewOrder";
import UserProfile from "./pages/UserProfile";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewOrder />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/me" element={<UserProfile />} />
        <Route path="/lamps" element={<CreateNewLamp />} />
      </Routes>
    </>
  );
}

export default App;
