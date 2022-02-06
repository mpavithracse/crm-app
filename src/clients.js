import { DataGrid } from '@mui/x-data-grid';


export function Clients({clientList,columns})
{
    return(
        <div className="Clients-Module" style={{ height: 400, width: '100%' }}>
           <DataGrid rows={clientList}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection/>           
        </div>          
    )
}
