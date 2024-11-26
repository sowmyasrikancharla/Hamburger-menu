import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
    <h5 className="credits">Designed by Sowmya</h5>
  </div>
)

export default App
