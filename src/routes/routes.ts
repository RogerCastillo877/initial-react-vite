import { LazyExoticComponent } from 'react';
import { lazy } from 'react';
import { LoginScreen, ProtectedPage, RegisterScreen } from '../MainModule/pages';
import { } from '../MainModule/pages/RegisterScreen';
import { Route } from 'react-router-dom';

type JSXCOmponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXCOmponent> | JSXCOmponent;
  name: string;
  children?: Route[];
}

// const LazyPage = lazy(() => import(/* webpackChunkName: "LazyPage" */'../routes/'))

export const routes: Route[] = [
  {
    to: '/login',
    path: 'login',
    Component: LoginScreen,
    name: 'Login'
  },
  {
    to: '/register',
    path: 'register',
    Component: RegisterScreen,
    name: 'register'
  },
  {
    to: '/protected',
    path: 'protected',
    Component: ProtectedPage,
    name: 'protected'
  },
]
