import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from './lib/main'
import Pantry from './lib/pantry'
import Grocery from './lib/grocery.js'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }/>
    <Route path="/pantry" component={ Pantry }/>
    <Route path="/grocery" component={ Grocery }/>
  </Router>
), document.getElementById('app'))
