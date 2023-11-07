import { Button, ButtonGroup } from "@mui/material";
import VoiceCallIcon from "@mui/icons-material/Phone";
import EditNoteIcon from "@mui/icons-material/Note";
import EditCalendarIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import TipsAndUpdatesIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { TaskBar } from "../TaskBar";
import { Nav } from "../Nav";

export function MailHomeBar() {
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
      <div style={{}}>
        <TaskBar />
      </div>

      <div style={{}}>
        <div>
          <Nav />
        </div>
        <ButtonGroup>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              alignItems: "center",
              border: "1px solid green",
              padding: "0",
              margin: "0",
            }}
          >
            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                onClick={handleClick}
                style={{ textTransform: "none" }}
              >
                New email
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
                variant="text"
              >
                Delete
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditNoteIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Archive
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditCalendarIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Report
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<NotificationsIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Sweep
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<SettingsIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Move to
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<TipsAndUpdatesIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Reply all
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<TipsAndUpdatesIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Mark all as read
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<VoiceCallIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Categorise
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditNoteIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Flag / Unflag
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditCalendarIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Pin / Unpin
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<NotificationsIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Snooze
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<SettingsIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Print
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<TipsAndUpdatesIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Undo
              </Button>
            </li>
          </ul>
        </ButtonGroup>
      </div>
    </div>
  );
}
