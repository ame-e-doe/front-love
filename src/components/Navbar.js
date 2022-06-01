import React, { useState, useEffect } from "react";

import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";

import { Link } from "react-router-dom";

function Navbar() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          LOVE AND DONATE
        </Link>
        <div className="navbar-nav ml-auto"></div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item dropdown no-arrow">
              <a href="/login" className="nav-link" onClick={logOut}>
                SAIR
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                ENTRAR
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                CADASTRE-SE
              </Link>
            </li>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;