import { Button, ButtonGroup, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function Nav() {
  return (
    <div
      className="actionbar"
      style={{
        display: "flex",
        border: "1px solid red",
      }}
    >
      <div style={{}}>
        <ButtonGroup style={{}}>
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
            <li style={{ margin: "5px" }}>
              <Tooltip title="Hide navigation pane">
                <Button startIcon={<MenuIcon />} variant="text" />
              </Tooltip>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                variant="text"
                style={{ textTransform: "none" }}
              >
                Home
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                variant="text"
                style={{ textTransform: "none" }}
              >
                View
              </Button>
            </li>

            <li style={{ margin: "1px" }}>
              <Button
                size="small"
                variant="text"
                style={{ textTransform: "none" }}
              >
                Help
              </Button>
            </li>
          </ul>
        </ButtonGroup>
      </div>
    </div>
  );
}
