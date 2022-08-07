import { useState, useCallback, KeyboardEvent } from "react";
import * as Component from "./styles";
import { IoIosAddCircle } from "react-icons/io";

type Props = {
  onEnter: (taskName: string) => void;
};

const AddArea = ({ onEnter }: Props) => {
  const [inputText, setinputText] = useState<string>("");

  const enterData = useCallback(() => {
    if (inputText !== "") {
      onEnter(inputText);
      setinputText("");
    }
  }, [inputText, onEnter]);

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Enter") {
        enterData();
      }
    },
    [enterData]
  );

  return (
    <Component.Container>
      <IoIosAddCircle className="add" onClick={enterData} />
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
