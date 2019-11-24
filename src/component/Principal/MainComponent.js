import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Typography} from '@material-ui/core';
import NavBar from './NavBar';


class MainComponent extends Component { 
    render() {
      return (
        <div>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                RODEVS Portfolio
             </Typography>
             <NavBar/>
            </Toolbar>          
          </AppBar>        
        </div>
      );
    }
  }
  export default MainComponent;