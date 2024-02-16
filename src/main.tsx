import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

// Routes
import ErrorRoute from './routes/ErrorRoute.tsx';
import PokemonListRoute from './routes/PokemonListRoute.tsx';
import PokemonRoute, { routeLoader as pokemonRouteLoader } from './routes/PokemonRoute.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonListRoute />,
    errorElement: <ErrorRoute />
  },
  {
    path: '/pokemon/:name',
    element: <PokemonRoute />,
    loader: pokemonRouteLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
