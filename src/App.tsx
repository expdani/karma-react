import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Navigation from './components/navigation';
import Settings from './components/settings';
import Login from './components/login';
import Callback from './components/login/callback';
import * as routeConfig from './components/routeConfig';

function App(): any {
  return (
    <>
      <Navigation>
        <Routes>
          <Route path={routeConfig.default.Dashboard} element={<Dashboard />} />
          <Route path={routeConfig.default.Settings} element={<Settings />} />
          <Route path={routeConfig.default.Login} element={<Login />} />
          <Route
            path={routeConfig.default.Callback_$CODE}
            element={<Callback />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Navigation>
    </>
  );
}

export default App;
