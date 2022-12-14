import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/layout/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ListadoProductos from './components/productos/ListadoProductos'
import FormularioCrear from './components/productos/FormularioCrear'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home /> 
  },
  {
    path: '/productos',
    element: <ListadoProductos />
  },
  {
    path: '/crear',
    element: <FormularioCrear />
  }
])

function App() {
  return (
    <section className='container'>
      <RouterProvider router={router} />
    </section>
  )
}

export default App
