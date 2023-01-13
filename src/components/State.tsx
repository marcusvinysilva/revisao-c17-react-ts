import { ChangeEvent, useState } from "react";

function State() {
  const [text, setText] = useState("testando o hook");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h3>O texto é: {text}</h3>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default State;
