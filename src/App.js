import React from 'react';
import { Home, About, Project } from './Pages';
import { Header } from './components';
import { Routes,Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  
  return (
    <AnimatePresence>
      <Header key={111}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Project />}/>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
