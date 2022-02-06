import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function Leads({columnsLeads,rowsLeads}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowsLeads}
        columns={columnsLeads}
        checkboxSelection
      />
    </div>
  );
}
