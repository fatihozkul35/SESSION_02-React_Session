import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    background: "Linear-gradient(45deg, #FF688B, #FF8E53)",
    border: 0,
    borderRadius: 7,
    color: "#fff",
    padding: "5px 30px",
  },
});

const MakeStylesComp = () => {
  const classes = useStyles();
  return (
    <Button className={classes.btn} variant="outlined">
      Click
    </Button>
  );
};

export default MakeStylesComp;
