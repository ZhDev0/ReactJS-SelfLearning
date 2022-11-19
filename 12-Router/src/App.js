import React from 'react';
import { Route ,Routes ,BrowserRouter } from 'react-router-dom';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Navbar } from './Components/NavBar';
function App() {
  return (
   <div>
      <Navbar />
     <BrowserRouter>
      <Routes>
          <Route path='Home' element={<Home />} />
          <Route path="About" element={<About />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
