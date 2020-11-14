import React, {useState} from 'react';
import 'fontsource-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Container, Paper } from '@material-ui/core';

function App() {
             
  const [darkTheme, setDarkTheme] = useState(false);

  const theme = createMuiTheme({
                  palette: {
                  type: darkTheme? 'dark' : 'light',
                  }
                });

  function dark() {
  setDarkTheme(!darkTheme); 
  }   

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <CssBaseline />
          <NavBar darkTheme={dark}/>
            <Container>
                   
            </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
