import {Route, BrowserRouter, Switch} from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'
import Questions from './Components/Questions'
import './App.css'
import NotFound from './Components/NotFound'
import Timer from './Components/Timer'
import TerminationPage from './Components/TerminationPage'
import Results from './Components/Results'
import protectedRoute from './Components/protectedRoute'
import ReportPage from './Components/ReportPage'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/q" component={Questions} />
      <Route exact path="/timer" component={Timer} />
      <Route exact path="/t" component={TerminationPage} />
      <Route exact path="/r" component={Results} />
      <Route exact path="/report" component={ReportPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
