import type { FunctionComponent } from "react";
import MenuItem from "~/components/menu-item";
import type { Data } from "~/types";

type Props = {
  list: Data[];
};

const MenuList: FunctionComponent<Props> = ({ list = [] }) => (
  <ul className="menu-list-container">
    {list.length
      ? list.map((listItem) => <MenuItem className="ml-3" item={listItem} />)
      : null}
  </ul>
);

export default MenuList;
