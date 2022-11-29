import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom'; 
import { useAuthContext } from './hooks/useAuthContext';

// pages and components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';

// styles
import './App.css';

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <div className='container'>
            <Routes> 
              <Route path='/' element={user ? <Dashboard /> : <Navigate to="/login" replace />} />
              <Route path='/create' element={user ? <Create /> : <Navigate to="/login" replace />} />
              <Route path='/projects/:id' element={user ? <Project /> : <Navigate to="/login" replace />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' replace />} />
              <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' replace />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
