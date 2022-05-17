import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Settings from './components/Settings';
import Login from './components/Login';
import Callback from './components/Login/callback';
import * as routeConfig from './components/routeConfig';

function App(): any {
  // const { data, error, loading } = useUserDiscordData();

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
        </Routes>
      </Navigation>
    </>
  );
}

export default App;
