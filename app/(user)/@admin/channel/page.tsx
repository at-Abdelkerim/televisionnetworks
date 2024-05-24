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
import ChannelFormList from '@/app/ui/admin/ChannelFormList';

interface Person {
  name: string;
  status: boolean;
  action: number;
}

const data: Person[] = [
  {
    name: 'John',
    status: true,
    action: 21,
  },
  {
    name: 'Sara',
    status: false,
    action: 32,
  },
];

export default function App() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        size: 40,
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
      <SearchBar formList={<ChannelFormList />} page="channel" />
      <hr className="my-10 w-full border-[#000]" />
      <MRT_Table table={table} />
    </div>
  );
}
