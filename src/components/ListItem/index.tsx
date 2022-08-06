import * as Component from "./styles";
import { Item } from "./../../types/Item";

type Props = {
  item: Item;
  onUpdateCheck: (id: number, done: boolean) => void;
};

const ListItem = ({ item, onUpdateCheck }: Props) => {
  return (
    <Component.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onUpdateCheck(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
    </Component.Container>
  );
};

export default ListItem;
