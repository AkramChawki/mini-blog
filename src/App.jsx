import React from 'react'

import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Single from './pages/Single';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/post/:id" exact component={Single} />
    </BrowserRouter>
  )
}

export default App
