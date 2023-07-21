import React from 'react';
import { Home, About, Project } from './Pages'
import { Header } from './components'
import { Routes,Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Project />}/>
      </Routes>
    </>
  );
}

export default App;
