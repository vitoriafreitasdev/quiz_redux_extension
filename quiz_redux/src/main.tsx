import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'
import Home from './componentes/Home.tsx'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './redux/store.ts'
import Cadastrar from './componentes/Cadastrar.tsx'
import StartOfGame from './componentes/StartOfGame.tsx'
import UsersScores from './componentes/UsersScores.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cadastrar",
        element: <Cadastrar/>
      },
      {
        path: "/:id/inicio",
        element: <StartOfGame/>
      },
      {
        path: "/usersScore",
        element: <UsersScores/>
      }

    ]
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
