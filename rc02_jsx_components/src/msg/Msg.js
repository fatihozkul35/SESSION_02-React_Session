//? React uses JSX.
//? In JSX, we can directly use HTML elements in JS

//! Components can return a combined HTML,CSS,JS code.
//! But, it must return a single containered (like div, section, article, <> etc.) element

//* In JSX, Styling can be performed in various ways.
//* 1-) Inline-Styling can be used.
//* 2-) Styling can be defined as a local or global variable.
//* 3-) Styling can be defined as external stylesheet.

//! NOTES:
//* For styling, property-value(object) structure is used.
//* camelCase is used for property name,
//* className is used for class definitions
//* 3rd parties libraries like Material UI, Styled Component, Sass, Bootstrap etc. can also be used for styling

//?External stylesheet
import "./Msg.css";
import img1 from "../img/winter1.jpg";
import Clock from "../clock/Clock";

const textStyle = {
  color: "green",
  fontFamily: "Tahoma",
  fontSize: "0.9rem",
  border: "1px solid red",
};

function Msg() {
  return (
    <div>
      {/* Inline Styling */}
      <h2 style={{ color: "red", backgroundColor: "grey" }}>
        Welcome to the our React Courses
      </h2>
      <p style={textStyle}>We will learn JSX,Components and Styling</p>
      <img
        className="msg-img"
        src="https://cdn.pixabay.com/photo/2020/06/15/17/35/me-nots-5302712__340.jpg"
        alt=""
      />
      <img className="msg-img" src={img1} alt="" />
      <Clock />
    </div>
  );
}
export default Msg;
