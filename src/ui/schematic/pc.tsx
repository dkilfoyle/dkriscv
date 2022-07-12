import { HStack, Spacer, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ComputerContext } from "../../App";
import { useFormat } from "../../utils/useFormat";
import "./schematic.css";

const duration = 300;

export const PC = () => {
  const { FormatSelector, formatFn } = useFormat("H");
  const { computer } = useContext(ComputerContext);

  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  }, [computer.cpu.pc]);

  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th colSpan={2}>
              <HStack>
                <span>PC</span> <Spacer></Spacer>
                <FormatSelector />
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            <td>pcCur</td>
            <td>
              <CSSTransition
                in={inProp}
                timeout={duration}
                classNames="fade"
                onEntered={() => setInProp(false)}>
                <span>{formatFn(computer.cpu.pcLast)}</span>
              </CSSTransition>
            </td>
          </Tr>
          <Tr>
            <td align="center">pc</td>
            <td align="right">
              <CSSTransition
                in={inProp}
                timeout={duration}
                classNames="fade"
                onEntered={() => setInProp(false)}>
                <span>{formatFn(computer.cpu.pc)}</span>
              </CSSTransition>
            </td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
