import * as Component from "./styles";
import { Item } from "./../../types/Item";
import { IoIosRemoveCircle } from "react-icons/io";

type Props = {
  item: Item;
  onUpdateCheck: (id: number, done: boolean) => void;
  removeItem: (id: number) => void;
};

const ListItem = ({ item, onUpdateCheck, removeItem }: Props) => {
  return (
    <Component.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onUpdateCheck(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
      <IoIosRemoveCircle
        className="remove"
        onClick={() => removeItem(item.id)}
      />
    </Component.Container>
  );
};

export default ListItem;
