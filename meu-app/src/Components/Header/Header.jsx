import React from "react";
import "./Header.css";
import { getNotificationCount } from "./Header.js";
import logo from "./logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Estoque</h1>
      </div>
      <div className="notification">
        <span className="badge">{getNotificationCount()}</span>
        <button className="bell">🔔</button>
      </div>
    </header>
  );
}
