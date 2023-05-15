import React, { useEffect } from "react";

import "./profile.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { Button, Card, Col, Row } from "react-bootstrap";
import MailIcon from "@mui/icons-material/Mail";

import LogoutIcon from "@mui/icons-material/Logout";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Link } from "react-router-dom";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DoNotDisturbOffIcon from "@mui/icons-material/DoNotDisturbOff";

const ProfilePage = () => {
  return (
    <div className="profile">
      <div className="l-dash">
        <div className="d-icons">
          <div>
            <AddHomeWorkIcon style={{ fontSize: "50px" }} />
          </div>
          <div>
            <span className="text-primary">SuprJob</span>
          </div>
        </div>
        <div className="dashboard">
          <Link to="/profile">
            <div className="d-items1 d-flex gap-2">
              <DashboardIcon />
              <span>DashBoard</span>
            </div>
          </Link>
          <Link to="/myprofile">
            <div className="d-items2 d-flex gap-2">
              <RecordVoiceOverIcon />
              <span>Profile</span>
            </div>
          </Link>
          <Link to="/mypostjob">
            <div className="d-items2 d-flex gap-2">
              <BorderColorIcon />
              <span>MyPostJob</span>
            </div>
          </Link>
          <div>
            <Button variant="primary">
              <LogoutIcon /> LogOut
            </Button>
          </div>
        </div>
      </div>
      <div className="r-dash">i am from right side</div>
    </div>
  );
};

export default ProfilePage;
