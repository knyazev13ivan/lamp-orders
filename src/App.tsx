import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import CreateNewLamp from "./pages/CreateNewLamp";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AddNewOrder from "./pages/AddNewOrder";
import Registration from "./pages/Registration";
import "./styles/app.scss";
import ListInHistory from "./components/ListInHistory";
import Search from "./components/Search";

function App() {
  return (
    <>
      <header>
        <Navigation />
        <Search />
        <Auth />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<AddNewOrder />} />
          <Route path="/history" element={<ListInHistory />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Registration />} />
          <Route path="/lamps" element={<CreateNewLamp />} />
        </Routes>
      </main>
      <footer>
        <Contacts />
      </footer>
    </>
  );
}

export default App;
