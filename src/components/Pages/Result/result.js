import { Button } from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./result.css";

const Result = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="title">{name} your final score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;