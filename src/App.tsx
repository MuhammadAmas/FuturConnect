import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import RoomManagement from './pages/RoomManagement';
import EntityManagement from './pages/EntityManagement';
import DefaultLayout from './layout/DefaultLayout';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

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

      <Route
        path="/signup"
        element={
          <>
            <PageTitle title="Signup | Futur Connect" />
            <SignUp />
          </>
        }
      />

      {/* Redirect to sign-in if accessing root */}
      <Route path="/" element={<Navigate to="/signin" replace />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DefaultLayout>
              <PageTitle title="Dashboard | Futur Connect" />
              <Dashboard />
            </DefaultLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/room-management"
        element={
          <ProtectedRoute>
            <DefaultLayout>
              <PageTitle title="Room Management | Futur Connect" />
              <RoomManagement />
            </DefaultLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/entity-management"
        element={
          <ProtectedRoute>
            <DefaultLayout>
              <PageTitle title="Entity Management | Futur Connect" />
              <EntityManagement />
            </DefaultLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
