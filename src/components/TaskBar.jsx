import { Button, ButtonGroup, Tooltip } from "@mui/material";
import VoiceCallIcon from "@mui/icons-material/Phone";
import EditNoteIcon from "@mui/icons-material/Note";
import EditCalendarIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import TipsAndUpdatesIcon from "@mui/icons-material/Info";

export function TaskBar() {
  return (
    <div style={{ border: "1px solid green" }}>
      <div style={{}}>
        <ButtonGroup style={{}}>
          <ul
            style={{
              listStyleType: "none",
              border: "1px solid blue",
              padding: "0",
              margin: "0",
            }}
          >
            <li style={{ margin: "5px" }}>
              <Tooltip title="Delete">
                <Button startIcon={<VoiceCallIcon />} />
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
