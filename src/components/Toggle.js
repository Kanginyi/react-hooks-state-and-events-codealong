import React, {useState} from "react";

function Toggle() {
  const [clickButton, setClickButton] = useState(false);

  function handleButton() {
    setClickButton(click => !click);
  }

  const color = clickButton ? {background: "red"} : {background: "white"};

  return <button style={color} onClick={handleButton}>{clickButton ? "ON" : "OFF"}</button>;
}

export default Toggle;
