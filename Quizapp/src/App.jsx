// imports
import React, { useState } from "react";
import "./App.css";
import QuestionBox from "../components/QuestionBox";
import Nav from "../components/Nav";
import { ResultProvider } from '../context/ResultProvider';

function App() {
  // state variables for changing the state of dark mode and for showing the quiz
  const [isDark, setisDark] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  // function to toggle the theme 
  const toggleTheme = () => {
    setisDark(!isDark);
    document.body.style.backgroundColor = !isDark ? 'black' : 'white';
    document.body.style.color = !isDark ? 'white' : 'black';
  };

  return (
      // wrapping the entire component with the resultprovider context
    <ResultProvider>
         <Nav isDark={isDark} toggleTheme={toggleTheme} />
      {showQuiz?(<QuestionBox isDark={isDark} />):(   // showing the questionbox component after clicking the startQuiz button
      <>
        <div className="home">
          <div className="hero-container flex" style={{
            backgroundColor: `${!isDark ? 'white' : 'black'}`
           }}>
            <h2 className="message">Challenge yourself, learn something new, and maybe even win some bragging rights - that's the magic of quiz </h2>
          </div>
          <div className="card flex">
            <div className="cardbox">
              <img className="quizimg" src="https://slideplayer.com/14787468/90/images/slide_1.jpg" alt="startquiz" />
              <button className="start" onClick={() => {
                setShowQuiz(true); 
              }}>Start Quiz</button>
            </div>
          </div>
        </div>
      </>
      )}
    </ResultProvider>
  );
}

export default App;