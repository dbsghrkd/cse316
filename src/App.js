import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import UserInfoPage from './pages/Info';
import Home from './pages/Home';
import Documentary from './pages/Documentary';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Entertainment from './pages/Entertainment';
import Login from './pages/Login';
import IntroPage from './pages/IntroPage';
import Register from './pages/Register';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path='/' element={<IntroPage />} />
          <Route path='/Register' element={<Register />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Info' element={<UserInfoPage />}/>
          <Route path='/Documentary' element={<Documentary />}/>
          <Route path='/Movies' element={<Movies/>}/>
          <Route path='/Series' element={<Series />}/>
          <Route path='/Entertainment' element={<Entertainment />}/>
          <Route path='/Search' element={<Search />}/>
          <Route path='/movie/:title' element={<MovieDetail />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
