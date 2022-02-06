import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export function Login() {
  return <div className='Login'>
    <TextField id="filled-basic"
      label="Username"
      varient="filled" /><br />
    <TextField id="filled-password-input"
      label="Password"
      varient="filled" /><br />
    <Button variant="contained">Login</Button>
  </div>;
}
