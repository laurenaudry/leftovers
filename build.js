import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from './lib/main'
import Pantry from './lib/pantry'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }/>
    <Route path="/pantry" component={ Pantry }/>
  </Router>
), document.getElementById('app'))
