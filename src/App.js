import React, { useState } from 'react';
import Navbar from './components/navbar';
import './App.css';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


  export default function App() {
    const [selectedCountry, setSelectedCountry] = useState("in"); // Default country codea
  
    const handleCountryChange = (countryCode) => {
      setSelectedCountry(countryCode);
     
    };
  return (
    <>
    <div className='main'>
      <BrowserRouter>
        <Navbar onCountryChange={handleCountryChange}/>
        <Routes>
        <Route path="#" element={<News selectedCountry={selectedCountry} category="general" />} />
          <Route path="/business/*" element={<News key="business" selectedCountry={selectedCountry} category="business" />} />
          <Route path="/entertainment/*" element={<News key="entertainmenet" selectedCountry={selectedCountry} category="entertainment" />} />
          <Route path="/general/*" element={<News key="general" selectedCountry={selectedCountry} category="general" />} />
          <Route path="/health/*" element={<News key="health" selectedCountry={selectedCountry} category="health" />} />
          <Route path="/science/*" element={<News key="science" selectedCountry={selectedCountry} category="science" />} />
          <Route path="/sports/*" element={<News key="sports" selectedCountry={selectedCountry} category="sports" />} />
          <Route path="/technology/*" element={<News key="technology" selectedCountry={selectedCountry} category="technology" />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}
