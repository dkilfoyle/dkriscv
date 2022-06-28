import { ButtonGroup, Button } from "@chakra-ui/react";
import { ReactElement, useState } from "react";

export const useFormat = (x: string = "D", formats = "DH") => {
  const [format, setFormat] = useState(x);

  const FormatSelector: () => ReactElement<any, any> = () => (
    <ButtonGroup size="xs" isAttached>
      {formats.split("").map((f) => (
        <Button bg={format === f ? "gray.300" : "gray.100"} onClick={() => setFormat(f)} size="xs">
          {f}
        </Button>
      ))}
    </ButtonGroup>
  );

  const formatFn = (x: number, length: number = 8) => {
    switch (format) {
      case "B":
        return x.toString(2);
      case "8":
        return x.toString(16).padStart(2, "0");
      case "D":
        return x.toString(10);
      case "H":
        return x.toString(16);
    }
  };

  return { FormatSelector, formatFn, format };
};
