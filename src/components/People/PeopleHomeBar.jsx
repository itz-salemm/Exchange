import { Button, ButtonGroup } from "@mui/material";
import VoiceCallIcon from "@mui/icons-material/Phone";
import EditNoteIcon from "@mui/icons-material/Note";
import EditCalendarIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import TipsAndUpdatesIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { TaskBar } from "../TaskBar";

export function PeopleHomeBar() {
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
                New contact
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
                Edit
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditNoteIcon />}
                style={{ textTransform: "none" }}
              >
                Delete
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditCalendarIcon />}
                style={{ textTransform: "none" }}
              >
                Restore
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<NotificationsIcon />}
                style={{ textTransform: "none" }}
              >
                Add to contact
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<SettingsIcon />}
                style={{ textTransform: "none" }}
              >
                Add to favorites
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<TipsAndUpdatesIcon />}
                style={{ textTransform: "none" }}
              >
                Add to list
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<TipsAndUpdatesIcon />}
                style={{ textTransform: "none" }}
              >
                Add memebers
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<VoiceCallIcon />}
                style={{ textTransform: "none" }}
              >
                Invite others
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditNoteIcon />}
                style={{ textTransform: "none" }}
              >
                Leave group
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditCalendarIcon />}
                style={{ textTransform: "none" }}
              >
                Follow
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<NotificationsIcon />}
                style={{ textTransform: "none" }}
              >
                Manage contact
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<SettingsIcon />}
                style={{ textTransform: "none" }}
              >
                Renew
              </Button>
            </li>
          </ul>
        </ButtonGroup>
      </div>
    </div>
  );
}
