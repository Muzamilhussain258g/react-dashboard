import React from 'react'
import { Route, Routes } from 'react-router'

import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Dashboard from './pages/Dashboard'

// DASHBOARD PAGES
import Overview from './pages/dashboard-pages/Overview'
import Products from './pages/dashboard-pages/Products'
import Users from './pages/dashboard-pages/Users'
import Orders from './pages/dashboard-pages/Orders'
import Analytics from './pages/dashboard-pages/Analytics'
import Settings from './pages/dashboard-pages/Settings'
import Home from './pages/Home'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,  // Correct way to specify index route
        element: <Overview />,
      },
      {
        path: 'product',
        element: <Products />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
];

const App = () => {
  return (
    <Routes>
      {routes.map((parentRoute, i) => (
        <Route key={parentRoute.path} path={parentRoute.path} element={parentRoute.element}>
          {/* Handle child routes properly */}
          {parentRoute.children?.map((childRoute) => (
            childRoute.index ? (
              <Route
                key="index" // Unique key for index route
                index
                element={childRoute.element}
              />
            ) : (
              <Route
                key={childRoute.path}
                path={childRoute.path}
                element={childRoute.element}
              />
            )
          ))}
        </Route>
      ))}
    </Routes>
  )
}

export default App