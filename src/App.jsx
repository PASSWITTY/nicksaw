//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import Samples from "./pages/Samples"


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/work-samples" element={<Samples />} />
    </Routes>
    </Router>
  )
}

export default App
 
{/* <Router>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/work-samples" element={<Samples />} />
  
</Routes>
</Router> */}