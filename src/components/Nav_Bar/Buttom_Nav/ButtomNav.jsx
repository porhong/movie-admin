import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faFilm,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function ButtomNav() {
  return (
    <>
      <div className="btm-nav lg:hidden">
        <button>
          <FontAwesomeIcon icon={faChartLine} />
          <span className="btm-nav-label">Dashboard</span>
        </button>
        <button className="active">
          <FontAwesomeIcon icon={faFilm} />
          <span className="btm-nav-label">Manage Movie</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faUsers} />
          <span className="btm-nav-label">Manage User</span>
        </button>
      </div>
    </>
  );
}

export default ButtomNav;
