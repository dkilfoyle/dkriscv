import { ButtonGroup, Button } from "@chakra-ui/react";
import { ReactElement, useState } from "react";

export const useFormat = (x: number) => {
  const [format, setFormat] = useState(x);

  const FormatSelector: () => ReactElement<any, any> = () => (
    <ButtonGroup size="xs" isAttached>
      <Button colorScheme={format === 10 ? "red" : "gray"} onClick={() => setFormat(10)} size="xs">
        D
      </Button>
      <Button colorScheme={format === 16 ? "red" : "gray"} onClick={() => setFormat(16)} size="xs">
        H
      </Button>
    </ButtonGroup>
  );

  const formatFn = (x: number, length: number = 8) => {
    return x.toString(format);
  };

  return { FormatSelector, formatFn };
};
