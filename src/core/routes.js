import { Board, NotFound, Main } from 'pages';

const routes = [{
  path: '/board',
  component: Board,
}, {
  path: '/',
  component: Main,
}, {
  path: '*',
  component: NotFound,
}];

export default routes;
