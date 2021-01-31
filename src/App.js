import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputField, setinput] = useState([
    { domain: "", last: "", sub: false }
  ]);
  const handleChangeInput = (index, event) => {
    //console.log(index, event.target.value);
    const values = [...inputField];
    values[index][event.target.name] = event.target.value;
    setinput(values);
  };
  const removeinput = (index, event) => {
    event.preventDefault();
    const value = [...inputField];
    value.splice(index, 1);
    return setinput(value);
  };

  const addfield = (e) => {
    e.preventDefault();
    const values = [...inputField, { domain: "", last: "", sub: false }];
    setinput(values);
  };

  const checked = (index, event) => {
    const values = [...inputField];
    values[index][event.target.name] = event.target.checked;
    setinput(values);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const val = [...inputField];
    return console.log("submit", val);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <form onSubmit={handleSubmit}>
        {inputField.map((data, index) => (
          <div key={index}>
            <input
              name="domain"
              value={data.first}
              onChange={(ev) => handleChangeInput(index, ev)}
            />
            <input
              name="last"
              value={data.last}
              onChange={(ev) => handleChangeInput(index, ev)}
            />
            <input
              type="checkbox"
              name="sub"
              checked={data.sub}
              onChange={(event) => checked(index, event)}
            />
            <button onClick={(event) => removeinput(index, event)}>
              Remove
            </button>
            <br />
          </div>
        ))}
        <button onClick={(e) => addfield(e)}>Add</button>
        <button onClick={(eva) => handleSubmit(eva)}>submit</button>
      </form>
    </div>
  );
}
