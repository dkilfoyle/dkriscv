import { HStack, Spacer, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useFormat } from "../../utils/useFormat";

export const Comparator = (props) => {
  const { FormatSelector, formatFn } = useFormat(10);
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={2}>
              <HStack>
                <span style={{ paddingLeft: 10 }}>Comp</span>
                <Spacer></Spacer>
                <FormatSelector />
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            <td align="center">op</td>
            <td className="value">00000</td>
          </Tr>
          <Tr>
            <td align="center">a</td>
            <td className="value">00000</td>
          </Tr>
          <Tr>
            <td align="center">b</td>
            <td className="value">00000</td>
          </Tr>
          <Tr>
            <td align="center">taken</td>
            <td className="value">00000</td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
