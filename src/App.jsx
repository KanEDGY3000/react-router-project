import { NavLink, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import './App.css';
import ProjectDetails from './pages/ProjectDetails.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {
  return (
    <>
      <nav className='nav'>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'nav__link nav__link--active'
              : 'nav__link'
          }
          to='/'
          end
        >
          Главная
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'nav__link nav__link--active'
              : 'nav__link'
          }
          to='/projects'
        >
          Проекты
        </NavLink>
      </nav>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/projects'
          element={<Projects />}
        />

        <Route
          path='/projects/:id'
          element={<ProjectDetails/>}
        />

        <Route
          path='*'
          element={<NotFound/>}
        />
      </Routes>
    </>
  );
}

export default App;