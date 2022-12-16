import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../assets/react.svg';

import { LoginScreen, RegisterScreen, ProtectedPage } from '../MainModule/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />

          <ul>
            <li>
              <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-active' : ''}>Login</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register</NavLink>
            </li>
            <li>
              <NavLink to="/protected" className={({ isActive }) => isActive ? 'nav-active' : ''}>Protected</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/protected' element={<ProtectedPage />}></Route>
          <Route path='/register' element={<RegisterScreen />}></Route>
          <Route path='/login' element={<LoginScreen />}></Route>

          <Route path='/*' element={<Navigate to="/login" replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
