"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Checkbox } from "@nextui-org/checkbox";

export default function Home() {
  return (
    <section>
      <h1>Selectable table: KO</h1>
      <Table selectionMode="single">
        <TableHeader>
          <TableColumn>Disabled</TableColumn>
          <TableColumn>Readonly</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox isDisabled>Disabled</Checkbox>
            </TableCell>
            <TableCell>
              <Checkbox isReadOnly>Readonly</Checkbox>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h1>Unselectable table: OK</h1>
      <Table>
        <TableHeader>
          <TableColumn>Disabled</TableColumn>
          <TableColumn>Readonly</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox isDisabled>Disabled</Checkbox>
            </TableCell>
            <TableCell>
              <Checkbox isReadOnly>Readonly</Checkbox>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
