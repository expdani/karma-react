import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SideNav from './components/Navigation';
import Settings from './components/Settings';

function App(): any {
  return (
    <>
      <SideNav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </SideNav>
    </>
  );
}

export default App;
