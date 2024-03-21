import "animate.css";
import { useRef } from "react";

const Contact = () => {
  const textRef = useRef(null);
  const handleAnimation = () => {
    if (textRef.current) {
      textRef.current.classList.add("animate__animated", "animate__swing");
    setTimeout(() => {
      if (textRef.current) {
        textRef.current.classList.remove(
          "animate__animated",
          "animate__swing"
        );
      }
    }, 1000);
  }
  };
  return (
    <div>
      <h2 ref={textRef}>Contact Us</h2>
      <p>You can find everything here</p>
      <button onClick={handleAnimation}>Animation</button>
    </div>
  );
};

export default Contact;
