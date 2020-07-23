import React, {useState} from 'react';
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
  const [text,setText] = useState('')
  const [memes, setMemes] = useState([])

  async function search(){ //
    const key = "H94BFcngvcfm9Rtbn5T0GHvDsGbf51RT" //in real projects, we would not put this key in the client side code! 
    // this key would be ideally put into a backend 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${text}&limit=25&offset=0&lang=en`
    const r = await fetch(url) // await pauses the code until the line of code is done working
    const j = await r.json() // 'j' is a json object
    // these await const only work in an async 
    setMemes(j.data)
    setText('')
  }
  return (
    <div className="App">
      <div className = "search-function">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField 
            className= "search"
            id="outlined-basic" 
            label="Search Gifs" 
            variant="outlined" 
            onChange={e=> setText(e.target.value)}
            onKeyPress={e=>{
              if(e.key ==='Enter') 
                search()
            }}
            />
          <Button 
            className= "search-button"
            variant="contained"
            style={{height:55,marginLeft:8}}
            disabled={!text}
            onClick={search}
            color="primary">
              Search 
          </Button>
        </form>
      </div>
      <div className="meme">
        {memes.map((m,i)=>{
            return <img key={i}
              src={m.images.fixed_height.url}
            />
        })}
      </div>
    </div>
  )
}

export default App;
