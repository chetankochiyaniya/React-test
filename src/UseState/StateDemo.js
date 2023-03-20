import React, { useState } from "react";

const StateDemo = () => {
  const [inputValue, setInputValue] = useState("Inupt Text");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <br/>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateDemo;
