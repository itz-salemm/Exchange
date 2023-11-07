import { Button, ButtonGroup, Tooltip } from "@mui/material";
import VoiceCallIcon from "@mui/icons-material/Phone";
import EditNoteIcon from "@mui/icons-material/Note";
import EditCalendarIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import TipsAndUpdatesIcon from "@mui/icons-material/Info";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

export function Navigation() {
  const textFieldStyle = {
    backgroundColor: "#f0f0f0", // Set the background color
    color: "blue",
    // Set the text color
    // Add more CSS properties as necessary
  };

  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // You can perform search logic here or call an API with the search term.
  };
  return (
    <div
      className=""
      style={{
        display: "flex",
        height: "50px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        border: "1px solid blue",
      }}
    >
      <div className="leftWidget" style={{}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid blue",
          }}
        >
          <div
            className="logo"
            style={{ margin: "5px", border: "1px solid blue" }}
          >
            <h3 style={{ color: "black" }}>Exchange</h3>
          </div>

          <div style={{ margin: "0 5px 0 15rem", border: "1px solid green" }}>
            <TextField
              style={textFieldStyle}
              variant="outlined"
              label="Search"
              onChange={handleSearch}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="rigtWidget"
        style={{ display: "flex", border: "1px solid blue" }}
      >
        <ButtonGroup style={{ color: "white" }}>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              alignItems: "center",
              border: "1px solid blue",
            }}
          >
            <li style={{ margin: "5px" }}>
              <Tooltip title="Delete">
                <Button startIcon={<VoiceCallIcon />}>Meet now</Button>
              </Tooltip>
            </li>

            <li style={{ margin: "5px" }}>
              <Tooltip title="OneNote Feed">
                <Button startIcon={<EditNoteIcon />} />
              </Tooltip>
            </li>

            <li style={{ margin: "5px" }}>
              <Tooltip title="My Day">
                <Button startIcon={<EditCalendarIcon />} />
              </Tooltip>
            </li>

            <li style={{ margin: "5px" }}>
              <Tooltip title="Notification">
                <Button startIcon={<NotificationsIcon />} />
              </Tooltip>
            </li>

            <li style={{ margin: "5px" }}>
              <Tooltip title="Settings">
                <Button startIcon={<SettingsIcon />} />
              </Tooltip>
            </li>

            <li style={{ margin: "5px" }}>
              <Tooltip title="Tips">
                <Button startIcon={<TipsAndUpdatesIcon />} />
              </Tooltip>
            </li>
          </ul>
        </ButtonGroup>
      </div>
    </div>
  );
}
