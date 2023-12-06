import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import UserInfoPage from './pages/Info';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Login from './pages/Login';
import IntroPage from './pages/IntroPage';
import Register from './pages/Register';
import MovieDetail from './pages/MovieDetail';
import SeriesDetail from './pages/SeriesDetail';
import Running from './pages/Running'

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
          <Route path='/Movies' element={<Movies/>}/>
          <Route path='/Series' element={<Series />}/>
          <Route path='/Search' element={<Search />}/>
          <Route path='/movie/:title' element={<MovieDetail />}/>
          <Route path='/Series/:title' element={<SeriesDetail />} />
          <Route path='/Running' element = {<Running />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
