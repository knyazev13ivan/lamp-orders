import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import CreateNewLamp from "./pages/CreateNewLamp";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NewOrder from "./pages/NewOrder";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import "./styles/app.scss";

function App() {
  return (
    <>
      <header>
        <Navigation />
        <Auth />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewOrder />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/me" element={<UserProfile />} />
        <Route path="/lamps" element={<CreateNewLamp />} />
      </Routes>
      <footer>
        <Contacts />
      </footer>
    </>
  );
}

export default App;
