import "./home.css";
import { Button, TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import Categories from "../../../Data/Categories";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ErrorMessage } from "../../error/error";

const Home = ({name, setName, fetchQuestions}) => {
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if(!categoryId|| !difficulty||!name) {
      setError(true);
      return;
    }
    else {
      setError(false);
      fetchQuestions(categoryId,difficulty);
      history.push("./quiz");
    }
  };

  return (
    <div className="content">
      <span style={{ fontSize: 40, fontFamily: "cursive", }}>Settings</span>
      <div className="name">

        {error && <ErrorMessage>Please fill al the feilds</ErrorMessage>}

        <TextField
          label="Enter your name"
          variant="filled"
          style={{ width: 500, margin: 30,}}
          onChange={(e) =>setName(e.target.value)}
        />
      </div>
      <div className="select">
        <TextField
          select
          label="Select Category"
          variant="filled"
          style={{ width: 500 }}
          value={category}
        >
          {Categories?.map((cat) => (
            <MenuItem
              key={cat.category}
              value={cat.category}
              onClick={() => {
                setCategory(cat.category);
                setCategoryId(cat.value)
              }}
            >
              {cat.category}
            </MenuItem>
          ))}
          ;
        </TextField>
      </div>
      <div>
        <TextField
          select
          label="Select Difficulty"
          variant="filled"
          value={difficulty}
          onChange={(e) =>setDifficulty(e.target.value)}
          style={{ width: 500, margin: 30 }}
        >
          <MenuItem
            key="Easy"
            value="easy"
            onClick={() => {
              setDifficulty("easy");
            }}
          >
            Easy
          </MenuItem>
          <MenuItem
            key="Medium"
            value="medium"
            onClick={() => {
              setDifficulty("medium");
            }}
          >
            Medium
          </MenuItem>
          <MenuItem
            key="Hard"
            value="hard"
            onClick={() => {
              setDifficulty("hard");
            }}
          >
            Hard
          </MenuItem>
        </TextField>
      </div>
      <Button variant="contained" color="primary" style={{width: 500}}
      onClick={handleSubmit}
      >
         Start game
      </Button>
    </div>
  );
};

export default Home;
