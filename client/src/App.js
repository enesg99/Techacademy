import MyNavbar from './components/navbar'
import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Nutrition from './pages/Nutrition';
import Settings from './pages/Settings';
import Login from './pages/Login';

function App() {
  // Verwende useNavigate, um das Navigieren innerhalb der Anwendung zu steuern
  const navigate = useNavigate();

  // Überprüfe, ob die aktuelle Seite eine ist, auf der die Login-Komponente angezeigt werden soll
  const shouldShowLogin = !['/home', '/exercises', '/nutrition', '/settings'].includes(window.location.pathname);

  return (
      <div>
          <MyNavbar />
          {shouldShowLogin && <Login />}
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/exercises' element={<Exercises />} />
            <Route path='/nutrition' element={<Nutrition />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
      </div>
  );
}

export default App;
