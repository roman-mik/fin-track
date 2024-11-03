import { createBrowserRouter } from 'react-router-dom';

import { routes } from '../constants/routes';

export const createRouter = () =>  createBrowserRouter(routes);