import './App.css';
import { Login } from './Login.js';
import { Route,Switch } from "react-router-dom";
import { Clients } from './clients';
import Leads from './Leads';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from 'react-router';
import{rowsLeads,columnsLeads,columns,clientList} from './data.js'



// export  const columnsLeads = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'mailid',
//     headerName: 'mailid',
//     width: 90,
//   }
  
// ];

// export  const rowsLeads = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', mailid: 'jonsnow@gmial.com' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', mailid: 'Cersei@gmail.com' },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', mailid: 'Jaime@gmial.com' },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', mailid: 'Arya@gmail.com' },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', mailid: 'Deanerys@gmail.com' },
//   { id: 6, lastName: 'Melisandre', firstName: null, mailid: 'Melisandre@gmail.com' },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', mailid: 'Ferrara@gmail.com' },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', mailid: 'Rossini@gmail.com' },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', mailid: 'Harvey@gmail.com' },
// ];


function App() {

  const history = useHistory();
  return (
    <div className="App">   
      <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>history.push('/')} size='large' aria-label='HOME' color = 'inherit'>Home</Button>
          <Button onClick={()=>history.push('/Dashboard')} size='large' aria-label='Dashboard' color = 'inherit'>Dashboard</Button>
          <Button onClick={()=>history.push('/Contacts')} size='large' aria-label='Contacts' color = 'inherit'>Contacts</Button>
          <Button onClick={()=>history.push('/Tickets')} size='large' aria-label='Tickets' color = 'inherit'>Tickets</Button>
        </Toolbar>
        </AppBar>
      <Switch>
        <Route path="/Dashboard">
          Dashboard
        </Route>
        <Route path="/Contacts">
          <Leads columnsLeads={columnsLeads} rowsLeads= {rowsLeads}  />
        </Route>
        <Route path="/Tickets">
          <Clients columns={columns} clientList ={clientList}/>
        </Route>
        <Route path="/">
         <Login/>
        </Route>
      </Switch>
    </div>
  );
  // useEffect(()=>{
  //   fetch("https://61988dac164fa60017c230eb.mockapi.io/movies")
  //   .then((data)=>data.json).
  //   then((mvs)=>{console.log(mvs)})
  // },[])
}



export default App;

