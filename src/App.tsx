import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard/Dashboard';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import RoomManagement from './pages/RoomManagement';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import EntityManagement from './pages/EntityManagement';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Authentication Routes without DefaultLayout */}
      <Route
        path="/signin"
        element={
          <>
            <PageTitle title="Signin | Futur Connect" />
            <SignIn />
          </>
        }
      />

      {/* Main app routes using DefaultLayout */}
      <Route path="/" element={<Navigate to="/signin" replace />} />

      <Route
        path="/dashboard"
        element={
          <DefaultLayout>
            <PageTitle title="Dashboard | Futur Connect" />
            <Dashboard />
          </DefaultLayout>
        }
      />
      <Route
        path="/room-management"
        element={
          <DefaultLayout>
            <PageTitle title="Room Management | Futur Connect" />
            <RoomManagement />
          </DefaultLayout>
        }
      />
      <Route
        path="/entity-management"
        element={
          <DefaultLayout>
            <PageTitle title="Entity Management | Futur Connect" />
            <EntityManagement />
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;
