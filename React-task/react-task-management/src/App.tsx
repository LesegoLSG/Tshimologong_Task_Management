import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/Home';
import AuthenticationPage from './Pages/AuthenticationPage';
import Register from './Components/LoginAndRegister/Register';
import Login from './Components/LoginAndRegister/Login';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavigationBar/NavBar';


function App() {
  return (

    <div className="App">

      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthenticationPage />} />
          {/* <Route path="/register" element={<} */}

          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
