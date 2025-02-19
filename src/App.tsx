import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';  // Import 
import './App.css';

import  TopNavigationMenu  from './TopNavigationMenu';   
import  Calendar  from './Calendar';  
import  Home  from './Home';  
import  ClubHistory  from './ClubHistory';  
import  Contact  from './Contact';  
import  Links  from './Links';  
import  Download  from './Download';  
import  BottomNavigatorMenu  from './BottomNavigatorMenu';  


function App() {
  return (
    <div>
      <TopNavigationMenu /> 
<Routes>
          <Route path="/" element={<Home />} />  {/* Home route */}
          <Route path="/home" element={<Home />} />  {/* Home route */}
          <Route path="/calendar" element={<Calendar />} /> 
          <Route path="/history" element={<ClubHistory />} />  
          <Route path="/contact" element={<Contact />} />  
          <Route path="/download" element={<Download />} />  
          <Route path="/links" element={<Links />} />  
          
          </Routes>

<BottomNavigatorMenu />

</div>

  );
  
 
}

export default App;

