import react from 'react'
import Home from './home/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends react.Component{

  render(){
    return (
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    )
  }
}

export default App;