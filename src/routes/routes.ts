import { lazy, LazyExoticComponent } from 'react';


type JSXCOmponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXCOmponent> | JSXCOmponent;
  name: string;
  children?: Route[];
}

const Login = lazy(() => import(/* webpackChunkName: "LazyLogin" */ '../MainModule/pages/LoginScreen'));
const Register = lazy(() => import(/* webpackChunkName: "LazyRegister" */ '../MainModule/pages/RegisterScreen'));
const Protected = lazy(() => import(/* webpackChunkName: "LazyProtected" */ '../MainModule/pages/ProtectedPage'));

export const routes: Route[] = [
  {
    to: '/login',
    path: 'login',
    Component: Login,
    name: 'Login'
  },
  {
    to: '/register',
    path: 'register',
    Component: Register,
    name: 'register'
  },
  {
    to: '/protected',
    path: 'protected',
    Component: Protected,
    name: 'protected'
  },
]
