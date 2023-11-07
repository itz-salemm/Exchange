import { Button, ButtonGroup } from "@mui/material";
import VoiceCallIcon from "@mui/icons-material/Phone";
import EditNoteIcon from "@mui/icons-material/Note";
import EditCalendarIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import TipsAndUpdatesIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { TaskBar } from "../TaskBar";

export function CalendarHomeBar() {
  const handleClick = () => {
    console.info(`You clicked whatever}`);
  };

  return (
    <div
      className="actionbar"
      style={{
        display: "flex",
        border: "1px solid red",
      }}
    >
      <div>
        <TaskBar />
      </div>

      <div style={{}}>
        <ButtonGroup style={{}}>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              alignItems: "center",
              border: "1px solid green",
              padding: "5",
              margin: "0",
            }}
          >
            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                onClick={handleClick}
                style={{ textTransform: "none" }}
              >
                New event
              </Button>
              <Button
                size="small"
                aria-label="select merge strategy"
                aria-haspopup="menu"
                style={{ margin: "1px" }}
              >
                <ArrowDropDownIcon />
              </Button>
            </li>
            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<VoiceCallIcon />}
                style={{ textTransform: "none" }}
              >
                Day
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditNoteIcon />}
                style={{ textTransform: "none" }}
              >
                Work week
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditCalendarIcon />}
                style={{ textTransform: "none" }}
              >
                Week
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<NotificationsIcon />}
                style={{ textTransform: "none" }}
              >
                Month
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<SettingsIcon />}
                style={{ textTransform: "none" }}
              >
                Split view
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<TipsAndUpdatesIcon />}
                style={{ textTransform: "none" }}
              >
                Filter share
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<TipsAndUpdatesIcon />}
                style={{ textTransform: "none" }}
              >
                Print
              </Button>
            </li>
          </ul>
        </ButtonGroup>
      </div>
    </div>
  );
}
