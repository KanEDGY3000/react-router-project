import { Link, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';

function App() {
  return (
    <>
      <nav>
        <Link to='/'>Главная</Link>
        
        <Link to='/projects'>Проекты</Link>
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
      </Routes>
    </>
  );
}

export default App;