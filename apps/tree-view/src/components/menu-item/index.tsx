import { FunctionComponent, LiHTMLAttributes, useState } from "react";
import MenuList from "~/components/menu-list";
import MinusIcon from "~/components/minus-icon";
import PlusIcon from "~/components/plus-icon";
import type { Data } from "~/types";

type Props = LiHTMLAttributes<HTMLLIElement> & {
  item: Data;
};

const MenuItem: FunctionComponent<Props> = ({ item, ...props }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<
    Record<string, boolean>
  >({});

  const handleToggleChildren = (getCurrentlabel: string) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  };

  return (
    <li {...props}>
      <button className="flex items-center gap-5">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? <MinusIcon /> : <PlusIcon />}
          </span>
        ) : null}
      </button>

      {item?.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
