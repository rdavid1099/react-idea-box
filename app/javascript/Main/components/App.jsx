import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import IdeasDisplay from './IdeasDisplay'

const App = (props) => (
  <Router>
    <div>
      <Route path='/'
             component={IdeasDisplay}
      />
    </div>
  </Router>
)

export default App
