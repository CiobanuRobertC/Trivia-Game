import { useState } from "react";
import { ErrorMessage } from "../../components/error/error"
import { useHistory } from "react-router";
import { Button } from "@mui/material";
import "./Question.css";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
    
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) return "selected";
        else if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "selected";
      };

      const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
      };

      const handleNext = () => {
        if (currQues > 18) {
          history.push("/result");
        } else if (selected) {
          setCurrQues(currQues + 1);
          setSelected();
        } else setError("Please select an option first");
      };
    
      const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
      };
    
    return (
    <div className="question">
        
        <h1>Question {currQues + 1}</h1>

        <div className="singleQuestion">

             <h2 dangerouslySetInnerHTML={{__html: questions[currQues]?.question}}></h2>

             <div className="options">
             {error && <ErrorMessage>{error}</ErrorMessage>}
             {options &&
              options.map((i) => (
               <button
                 onClick={() => handleCheck(i)}
                 className={`singleOption ${selected && handleSelect(i)}`}
                 key={i}
                 disabled={selected}
                 >
                    {i}
                 </button>
              ))}
             </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
        </div>

        </div>
    );      
};

export {Question};