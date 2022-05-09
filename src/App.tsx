import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SideNav from './components/Navigation';
import Test from './components/Test';

function App(): any {
  return (
    <>
      <SideNav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </SideNav>
    </>
  );
}

export default App;
