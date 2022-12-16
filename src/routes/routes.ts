import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../MainModule/pages/NoLazy';

type JSXCOmponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXCOmponent> | JSXCOmponent;
  name: string;
  children?: Route[];
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../MainModule/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'LazyLayout'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No lazy'
  }
]
