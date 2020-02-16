import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from '@material-ui/core';
import MainContent from './MainContent';
import NavBar from './NavBar';

class MainComponent extends Component { 
    render() {
      return (
        <div>
          <AppBar color="primary" position="static">
            <Toolbar>
              <img src="logo.png" alt="RODEVS" height="84px"></img>
             <NavBar/>
            </Toolbar>          
          </AppBar>
          <body>
            <MainContent/>
          </body>        
        </div>
      );
    }
  }
  export default MainComponent;