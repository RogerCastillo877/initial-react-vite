import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';

import logo from '../assets/react.svg';
import { ShoppingPage } from '../patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />

            <ul>
              {
                routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                  </li>
                ))
              }
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            {
              routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />}></Route>
              ))
            }

            <Route path='/' element={<ShoppingPage />}></Route>
            <Route path='/*' element={<Navigate to={routes[0].to} replace />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
