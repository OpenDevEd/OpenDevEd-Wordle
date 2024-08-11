import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import Game from './pages/Game.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Game />
          </Suspense>
        ),
      }
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
