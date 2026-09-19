import { NavLink, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import './App.css';
import ProjectDetails from './pages/ProjectDetails.jsx';

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
      </Routes>
    </>
  );
}

export default App;