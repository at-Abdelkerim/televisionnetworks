'use client';

import { useMemo } from 'react';
import {
  MaterialReactTable,
  MRT_Table,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import StatusButton from '@/app/ui/admin/StatusButton';
import ActionButton from '@/app/ui/admin/ActionButton';
import SearchBar from '@/app/ui/admin/SearchBar';
import ProgramFormList from '@/app/ui/admin/ProgramFormList';

interface Person {
  id: string;
  title: string;
  duration: string;
  description: string;
  status: boolean;
  action: number;
}

const data: Person[] = [
  {
    id: '1',
    title: 'John',
    duration: 'John',
    description: 'John',
    status: true,
    action: 21,
  },
  {
    id: '1',
    title: 'Sara',
    duration: 'Sara',
    description: 'Sara',
    status: false,
    action: 32,
  },
];

export default function App() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 40,
      },
      {
        accessorKey: 'title',
        header: 'Title',
        size: 100,
      },
      {
        accessorKey: 'duration',
        header: 'Duration',
        size: 40,
      },
      {
        accessorKey: 'description',
        header: 'Description',
        size: 100,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        enableSorting: false,
        size: 40,
        Cell: ({ cell, row }) => (
          <StatusButton
            {...{
              success: cell.getValue<boolean>(),
              id: row.getValue('id'),
            }}
          />
        ),
      },
      {
        accessorKey: 'action',
        header: 'Action',
        enableSorting: false,
        Cell: ({ cell }) => <ActionButton />,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    icons: {},
  });

  return (
    <div className="">
      <SearchBar formList={<ProgramFormList />} page="program" />
      <hr className="my-10 w-full border-[#000]" />
      <MRT_Table table={table} />
    </div>
  );
}
