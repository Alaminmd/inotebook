import './App.css';
import { useState, useEffect } from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteBackground from './components/NoteBackground';
import Offline from './components/Offline';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NoteState from './contex/notes/NoteState';
import Manifesto from './components/Manifesto';
import { Bounce, ToastContainer } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [isOnline, setisOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setisOnline(true);
    const handleOffline = () => setisOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offlien', handleOffline);
    }
  }, []);
  const [Progress, setProgress] = useState(0);

  return (
    <>
      <div className="App">
        {/* 1. The Animated Background */}
        <NoteBackground />
        {/* 2. Main Content Wrapper */}
        <div className="app-content">
          {/* <h1>My Sticky Notes App</h1> */}
          {/* Your notes and UI components go here */}
          {isOnline ? (
            <NoteState>
              <Router>
                <LoadingBar
                  color='#ff0000'
                  progress={Progress}
                  />
                <Navbar setProgress={setProgress} />
                <div className="container">
                  {/* Your other components that need the alert context */}
                  <ToastContainer
                    position="bottom-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition={Bounce}
                  />
                  <Routes>
                    <Route exact path="/inotebook" element={<Home setProgress={setProgress} />} />
                    <Route exact path="/about" element={<About setProgress={setProgress} />} />
                    <Route exact path="/login" element={<Login setProgress={setProgress} />} />
                    <Route exact path="/signup" element={<Signup setProgress={setProgress} />} />
                    <Route exact path="/manifesto" element={<Manifesto setProgress={setProgress} />} />
                  </Routes>
                </div>
              </Router>
            </NoteState>
          ) : <Offline />}

        </div>
      </div>

    </>
  );
}

export default App;
