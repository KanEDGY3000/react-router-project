import { NavLink, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import './App.css';
import ProjectDetails from './pages/ProjectDetails.jsx';
import NotFound from './pages/NotFound.jsx';
import ProjectsLayout from './layouts/ProjectsLayout.jsx';
import RootLayout from './layouts/RootLayout.jsx';
import About from './pages/About.jsx';


function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<RootLayout />}
        >
          <Route
            index
            element={<Home />}
          />

          <Route
            path='about'
            element={<About/>}
          />

          <Route
            path='projects'
            element={<ProjectsLayout />}
          >
            <Route
              index
              element={<Projects />}
            />
            <Route
              path=':id'
              element={<ProjectDetails />}
            />
          </Route>

          <Route
            path='/projects/:id'
            element={<ProjectDetails />}
          />

          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;