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
            <li style={{}}>
              <Tooltip title="Delete">
                <Button
                  startIcon={<VoiceCallIcon />}
                  variant="text"
                  size="large"
                  style={{ padding: "10px" }}
                />
              </Tooltip>
            </li>

            <li style={{}}>
              <Tooltip title="OneNote Feed">
                <Button
                  startIcon={<EditNoteIcon />}
                  variant="text"
                  size="large"
                  style={{ padding: "10px" }}
                />
              </Tooltip>
            </li>

            <li style={{}}>
              <Tooltip title="My Day">
                <Button
                  startIcon={<EditCalendarIcon />}
                  variant="text"
                  size="large"
                  style={{ padding: "10px" }}
                />
              </Tooltip>
            </li>

            <li style={{}}>
              <Tooltip title="Notification">
                <Button
                  startIcon={<NotificationsIcon />}
                  variant="text"
                  size="large"
                  style={{ padding: "10px" }}
                />
              </Tooltip>
            </li>

            <li style={{}}>
              <Tooltip title="Settings">
                <Button
                  startIcon={<SettingsIcon />}
                  variant="text"
                  size="large"
                  style={{ padding: "10px" }}
                />
              </Tooltip>
            </li>

            <li style={{}}>
              <Tooltip title="Tips">
                <Button
                  startIcon={<TipsAndUpdatesIcon />}
                  variant="text"
                  size="large"
                  style={{ padding: "10px" }}
                />
              </Tooltip>
            </li>
            <li style={{}}>
              <Tooltip title="My Day">
                <Button
                  startIcon={<EditCalendarIcon />}
                  variant="text"
                  size="large"
                  style={{ padding: "10px" }}
                />
              </Tooltip>
            </li>

            <li style={{}}>
              <Tooltip title="Notification">
                <Button
                  startIcon={<NotificationsIcon />}
                  variant="text"
                  size="large"
                  style={{ padding: "10px" }}
                />
              </Tooltip>
            </li>

            <li style={{}}>
              <Tooltip title="Settings">
                <Button
                  startIcon={<SettingsIcon />}
                  variant="text"
                  size="large"
                  style={{ padding: "10px" }}
                />
              </Tooltip>
            </li>

            <li style={{}}>
              <Tooltip title="Tips">
                <Button
                  startIcon={<TipsAndUpdatesIcon />}
                  variant="text"
                  size="large"
                  style={{ padding: "10px" }}
                />
              </Tooltip>
            </li>
          </ul>
        </ButtonGroup>
      </div>
    </div>
  );
}
