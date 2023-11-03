import './App.css';
import AsteroidForm from './components/AsteroidForm';
// import AsteroidInfo from './components/AsteroidInfo';
import AsteroidContext from './AsteroidContext';

import * as React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import AsteroidInfo from './components/AsteroidInfo';

const Layout = () => {
  return (
    <>
      {/* {user && <Welcome />} */}

      <div>
        <div>
          {' '}
          <Outlet />{' '}
        </div>
      </div>
    </>
  );
};

function App() {
  const [asteroidData, setAsteroidData] = React.useState();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <AsteroidForm />,
        },
        {
          path: '/info',
          element: <AsteroidInfo />,
        },
      ],
    },
  ]);

  return (
    <>
      <AsteroidContext.Provider value={{ asteroidData, setAsteroidData }}>
        <RouterProvider router={router}>
          <Route index element={<Navigate to="/" />} />
        </RouterProvider>
      </AsteroidContext.Provider>
    </>
  );
}

export default App;
