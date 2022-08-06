import { useState, useCallback, KeyboardEvent } from "react";
import * as Component from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

const AddArea = ({ onEnter }: Props) => {
  const [inputText, setinputText] = useState<string>("");

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      console.log("out enter");
      if (event.code === "Enter" && inputText !== "") {
        console.log("enter");
        onEnter(inputText);
        setinputText("");
      }
    },
    [inputText, onEnter]
  );

  return (
    <Component.Container>
      <div className="image">+</div>
      <input
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
        type="text"
        placeholder="Adicione uma tarefa"
      />
    </Component.Container>
  );
};

export default AddArea;
