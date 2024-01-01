import React, { useState } from "react";
import { useResultValue } from "../context/ResultProvider";
import QuestionBox from "./QuestionBox";

export default function Result({ isDark }) {
  const { correct, setCorrect } = useResultValue();
  const [restart, setRestart] = useState(false);

  const Startagain = () => {
    setCorrect(0);
    setRestart(!restart);
  };

  return (
    <>
      {" "}
      {restart ? (
        <QuestionBox />
      ) : (
        <>
          <div
            className="resultbox"
            style={{
              backgroundColor: `${isDark ? "#BACBBC" : "#EDF7EE"}`,
            }}
          >
            <div className="res-container">
              <h2 className="result">
                Every incorrect answer is an opportunity to learn and grow;
                that's the beauty of testing your knowledge
              </h2>
              <div className="score-container">
                <button className="result-info">
                  Score : {correct} out of 5 correct - ({correct * 20}%)
                </button>
                <button
                  style={{ padding: "0" }}
                  className="restart"
                  onClick={Startagain}
                >
                  play again{" "}
                </button>{" "}
              </div>
            </div>
          </div>
          <div
            className="desc"
            style={{
              backgroundColor: `${isDark ? "#FFFFFF" : "#fefbf6"}`,
            }}
           >
            <p className="desc-text">
            Don't underestimate the power of a quiz ,it can be a gateway to lifelong learning and self-discovery
            </p>
          </div>
          <p className="footer">
            Made with ❤️ By Kalvian
          </p>
        </>
      )}
    </>
  );
}
