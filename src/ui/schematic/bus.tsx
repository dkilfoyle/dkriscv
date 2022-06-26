import { HStack, Spacer, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useFormat } from "../../utils/useFormat";

export const Bus = (props) => {
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
            <td align="center">addr</td>
            <td className="value">00000</td>
          </Tr>
          <Tr>
            <td align="center">data</td>
            <td className="value">00000</td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
