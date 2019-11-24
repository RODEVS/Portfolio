import React, { PureComponent } from 'react';
import MainComponent from './component/Principal/MainComponent';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
      primary: {
       light: '#fff',
       main: 'rgb(23, 105, 170)',
       dark: '#000',
      },
      secondary: {
        main: '#f44336',
      },
  },
  typography: { 
      useNextVariants: true
  }
});

class App extends PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MainComponent/>
      </MuiThemeProvider>      
    );
  }
}
export default App;