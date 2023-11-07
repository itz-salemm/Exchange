import { Button, ButtonGroup } from "@mui/material";
import VoiceCallIcon from "@mui/icons-material/Phone";
import EditNoteIcon from "@mui/icons-material/Note";
import EditCalendarIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

export function CalendarViewBar() {
  return (
    <div
      className="actionbar"
      style={{
        display: "flex",
        border: "1px solid red",
      }}
    >
      <div style={{}}>
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
                startIcon={<VoiceCallIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                People Settings
              </Button>
            </li>
          </ul>
        </ButtonGroup>
      </div>
    </div>
  );
}
