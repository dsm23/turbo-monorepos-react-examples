import { useState } from "react";
import type { FunctionComponent } from "react";
import { Transition } from "@headlessui/react";
import { cn } from "@repo/common-utils";
import { Button } from "@repo/react-ui";
import ChevronDownIcon from "~/components/chevron-down-icon";
import type { Data } from "~/types";

type Props = {
  data: Data[];
};

const Accordian: FunctionComponent<Props> = ({ data }) => {
  const [selected, setSelected] = useState<Data["id"] | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState<Data["id"][]>([]);

  function handleSingleSelection(getCurrentId: Data["id"]) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId: Data["id"]) {
    if (!multiple.includes(getCurrentId)) {
      setMultiple((prevMultiple) => [...prevMultiple, getCurrentId]);
      return;
    }

    setMultiple((prevMultiple) => {
      const index = prevMultiple.indexOf(getCurrentId);

      return [
        ...prevMultiple.slice(0, index),
        ...prevMultiple.slice(index + 1),
      ];
    });
  }

  const isOpen = (id: Data["id"]) =>
    enableMultiSelection ? multiple.includes(id) : selected === id;

  return (
    <>
      <Button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        {`${enableMultiSelection ? "Dis" : "En"}able Multi Selection`}
      </Button>
      <div>
        {data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="border-b"
              key={`${dataItem.id}-${dataItem.question}`}
            >
              <button
                className="flex w-full flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
                aria-expanded={isOpen(dataItem.id)}
                onClick={
                  enableMultiSelection
                    ? () => {
                        handleMultiSelection(dataItem.id);
                      }
                    : () => {
                        handleSingleSelection(dataItem.id);
                      }
                }
              >
                <h3>{dataItem.question}</h3>
                <ChevronDownIcon
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    {
                      ["rotate-180"]: isOpen(dataItem.id),
                    },
                  )}
                />
              </button>

              <Transition show={isOpen(dataItem.id)}>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
                    "data-enter:grid-rows-[1fr] data-enter:data-closed:grid-rows-[0fr]",
                    "data-leave:grid-rows-[1fr] data-leave:data-closed:grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="text-sm">
                      <div className="pt-0 pb-4">{dataItem.answer}</div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </>
  );
};

export default Accordian;
