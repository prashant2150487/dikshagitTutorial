
import './App.css';
import { Box, Button, TextField, Typography } from '@mui/material';


function App() {

  return (
    <Box sx={{ border: '1px solid #ccc', mx: 'auto', p: 3, mt: 6, borderRadius: 5 }} elevation={0} maxWidth={400}>
      <Typography>Registerit</Typography>
      <TextField label="Name" fullWidth sx={{ mt: 2 }}></TextField>
      <TextField label="Email" fullWidth sx={{ mt: 2 }}></TextField>
      <TextField label="Password" fullWidth sx={{ mt: 2 }}></TextField>
      <TextField label="Confirm-Password" fullWidth sx={{ mt: 2 }}></TextField>
      <Button sx={{ bgcolor: 'blueviolet', color: '#f2f2f2', mt: 3 }}>Create Account</Button>
    </Box>
  );
}

export default App;
