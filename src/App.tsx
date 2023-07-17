import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes/routes';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import NotFound from './pages/NotFound';
import './styles/global.css'

function App() {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
      <Route element={<ProtectedRoutes />}>
        {privateRoutes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
