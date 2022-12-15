import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Routes
import Home from './routes/Home';
import Login from './routes/Login';
import News from './routes/News';
import NewsDetails from './routes/NewsDetails';
import AddNews from './routes/AddNews';
// Components
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(true);

  return (
    <div className='App'>
      <Router>
        {
          user?
          <Navbar setUser={setUser} />
          : ''
        }

        <div className='page_body'>
          <Routes>
            <Route path='/' element={user? <Home /> : <Navigate to='/login' />} />
            <Route path='/login' element={user? <Navigate to='/' /> : <Login setUser={setUser} />} />
            <Route path='/news' element={user? <News /> : <Navigate to='/login' />} />
            <Route path='/news/:id' element={user? <NewsDetails /> : <Navigate to='/login' />} />
            <Route path='/add-news' element={user? <AddNews /> : <Navigate to='/login' />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
