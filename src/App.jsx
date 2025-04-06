import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Connect from './pages/Connect';
import Dealroom from './pages/Dealroom';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import './App.css';

function App() {
  const routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/dealroom', element: <Dealroom /> },
    { path: '/profile', element: <Profile /> },
    { path: '/profile/:id', element: <ProfileDetails /> },
    { path: '/analytics', element: <Analytics /> },
    { path: '/connect', element: <Connect /> },
    { path: '/settings', element: <Settings /> },
    { path: '*', element: <NotFound /> },
  ];

  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;