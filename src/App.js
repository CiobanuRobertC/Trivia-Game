import axios from "axios";
import {useState} from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/home";
import Quiz from "./components/Pages/Quiz/quiz";
import Result from "./components/Pages/Result/result"

function App() {

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);


  
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=20${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data);
    setQuestions(data.results); 
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./background3.png" }}>
        <Header />
        <Switch>
              <Route path="/" exact>
                 <Home 
                 name={name} 
                 setName={setName} 
                 fetchQuestions={fetchQuestions}
                 />
              </Route>
              <Route path="/Quiz" exact>
                 <Quiz 
                   name={name}
                   questions={questions}
                   score={score}
                   setScore={setScore}
                   setQuestions={setQuestions}
                 />
              </Route>
              <Route path="/Result" exact>
                 <Result name = {name} score={score}/>
              </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
