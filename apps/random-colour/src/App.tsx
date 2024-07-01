import { useEffect, useState } from "react";
import { Button } from "@repo/react-ui";

const randomColorUtility = (len: number) => Math.floor(Math.random() * len);

const App = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateRandomHexColor = () => {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      className="h-dvh"
      style={{
        backgroundColor: color,
      }}
    >
      <main className="container flex h-full flex-col items-center">
        <h1 className="sr-only">Random number generator</h1>

        <div className="isolate mt-10 flex shadow-sm">
          <Button
            className="rounded-r-none ring-1 ring-inset ring-gray-300"
            onClick={() => setTypeOfColor("hex")}
          >
            Create HEX Colour
          </Button>
          <Button
            className="-ml-px rounded-none ring-1 ring-inset ring-gray-300"
            onClick={() => setTypeOfColor("rgb")}
          >
            Create RGB Colour
          </Button>
          <Button
            className="-ml-px rounded-l-none ring-1 ring-inset ring-gray-300"
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor
            }
          >
            Generate Random Colour
          </Button>
        </div>
        <div className="grid h-full place-items-center gap-[20px] text-[60px] text-white">
          <dl>
            <dt>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</dt>
            <dd>{color}</dd>
          </dl>
        </div>
      </main>
    </div>
  );
};

export default App;
