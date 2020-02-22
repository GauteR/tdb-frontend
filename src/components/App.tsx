import * as React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <AppBar position="static">
        <Toolbar>
          <Typography className="title" variant="h6">
            The Devils Backbone
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
