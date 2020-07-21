import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className = "search-function">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Search Memes" variant="outlined" />
        </form>
        <Button color="primary">Primary</Button>
      </div>
    </div>
  )
}

export default App;
