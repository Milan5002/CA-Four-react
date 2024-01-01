import React from "react";

const Nav = ({ isDark, toggleTheme }) => {
  return (
    <div>
      <div className="nav">
        <div className="logobox">
          <img
            src="https://png.pngtree.com/png-vector/20220812/ourmid/pngtree-quiz-time-with-bubble-chat-png-image_6108336.png"
            alt="logo"
            className="logo" height="150px"
          />
          <p className="title"> QUIZ ERA</p>
        </div>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: `${isDark ? "white" : "black"}`,
            color: `${!isDark ? "white" : "black"}`,
          }}
        >
          {" "}
          {isDark ? "Light theme" : "Dark theme"}
        </button>
      </div>
    </div>
  );
};

export default Nav;
