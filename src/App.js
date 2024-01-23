
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Layout from'./componements/layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="*" element={<Navigate to="/" replace />} /> 
         <Route path="*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;