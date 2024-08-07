import React from 'react';
import DataTable from 'react-data-table-component';
import './DataTable.css';

interface DataRow {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  date: string;
  status: string;
}

const DataTableComponent: React.FC = () => {
  const data: DataRow[] = [
    { id: 1, organization: 'Org1', username: 'user1', email: 'user1@example.com', phoneNumber: '123-456-7890', date: '2024-08-01', status: 'Active' },
    { id: 2, organization: 'Org2', username: 'user2', email: 'user2@example.com', phoneNumber: '123-456-7891', date: '2024-08-02', status: 'Inactive' },
    { id: 3, organization: 'Org3', username: 'user3', email: 'user3@example.com', phoneNumber: '123-456-7892', date: '2024-08-03', status: 'Active' },
    { id: 4, organization: 'Org4', username: 'user4', email: 'user4@example.com', phoneNumber: '123-456-7893', date: '2024-08-04', status: 'Pending' },
    { id: 5, organization: 'Org5', username: 'user5', email: 'user5@example.com', phoneNumber: '123-456-7894', date: '2024-08-05', status: 'Active' },
  ];

  const columns = [
    {
      name: 'Organization',
      selector: (row: DataRow) => row.organization,
      sortable: true,
    },
    {
      name: 'Username',
      selector: (row: DataRow) => row.username,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row: DataRow) => row.email,
      sortable: true,
    },
    {
      name: 'Phone Number',
      selector: (row: DataRow) => row.phoneNumber,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row: DataRow) => row.date,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row: DataRow) => row.status,
      sortable: true,
    },
  ];

  return (
    <div className="data-table">
      <DataTable
        title="User Data"
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
};

export default DataTableComponent;
