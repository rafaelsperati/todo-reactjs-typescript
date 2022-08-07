import { useCallback, useState } from "react";
import * as Component from "./App.styles";
import { Item } from "./types/Item";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";
import { useLocalStorage } from "usehooks-ts";

const App = () => {
  const [list, setList] = useLocalStorage<Item[]>("todoList", []);

  const handleItemUpdateCheck = useCallback(
    (id: number, done: boolean) => {
      let newList = [...list];
      for (let i in newList) {
        if (newList[i].id === id) {
          newList[i].done = done;
        }
      }
      setList(newList);
    },
    [list, setList]
  );

  const handleAddTask = useCallback(
    (taskName: string) => {
      let newList = [...list];
      newList.push({
        id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
        name: taskName,
        done: false,
      });
      setList(newList);
    },
    [list]
  );

  return (
    <Component.Container>
      <Component.Area>
        <Component.Header>Lista de Tarefas</Component.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem
            onUpdateCheck={handleItemUpdateCheck}
            key={index}
            item={item}
          ></ListItem>
        ))}
      </Component.Area>
    </Component.Container>
  );
};

export default App;
