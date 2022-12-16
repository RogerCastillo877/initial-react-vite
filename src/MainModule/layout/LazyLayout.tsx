import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { LoginScreen } from '../pages/LoginScreen';
import { ProtectedPage } from '../pages/ProtectedPage';
import { RegisterScreen } from '../pages/RegisterScreen';

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="register">Register</NavLink>
        </li>
        <li>
          <NavLink to="protected">Protected</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="protected" element={<ProtectedPage />} />

        {/* <Route path="*" element={<div>Not Found</div>} /> */}
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </div>
  )
}

export default LazyLayout;
