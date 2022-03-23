import { Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function Buttons() {
  return (
    <ButtonGroup>
      <Button variant="text">Text</Button>
      <Button color="success" variant="contained">
        Contained
      </Button>
      <Button color="error" variant="outlined">
        Outlined
      </Button>
      <Button
        sx={{ color: "red" }}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </ButtonGroup>
  );
}
