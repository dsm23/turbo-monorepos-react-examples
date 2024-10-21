import { useEffect, useRef, useState } from "react";
import type { ChangeEventHandler, FormEventHandler } from "react";
import QRCode from "qrcode";
import { Button, Label, Input } from "@repo/react-ui";

const Form = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const canvasElem = useRef<HTMLCanvasElement>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setQrCode(input);
    setInput("");
  };

  useEffect(() => {
    if (qrCode) {
      QRCode.toCanvas(canvasElem.current, qrCode, function (error) {
        if (error) console.error(error);
        console.log("success!");
      });
    }
  }, [qrCode]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label>Qr Code</Label>
        <Input
          className="mt-2"
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
          onChange={handleChange}
        />

        <Button type="submit" className="mt-6" disabled={input.trim() === ""}>
          Submit
        </Button>
      </form>
      <div className="grid place-items-center">
        <canvas ref={canvasElem} />
      </div>
    </>
  );
};

export default Form;
