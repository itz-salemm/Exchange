import { Button, ButtonGroup } from "@mui/material";
import VoiceCallIcon from "@mui/icons-material/Phone";
import EditNoteIcon from "@mui/icons-material/Note";
import EditCalendarIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
export function MailViewBar() {
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
                View settings
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditNoteIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Messages
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<EditCalendarIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Layout
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<NotificationsIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Density
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                startIcon={<SettingsIcon />}
                style={{ textTransform: "none" }}
                variant="text"
              >
                Immersive reader
              </Button>
            </li>
          </ul>
        </ButtonGroup>
      </div>
    </div>
  );
}
