import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

function MenuBoard() {
  return (
    <div className="menuBoard_page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-1">
            <LogoutIcon />
          </div>
          <div className="col-4"></div>
          <div className="col-6"></div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default MenuBoard;
