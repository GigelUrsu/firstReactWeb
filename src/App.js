import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
//import axios from 'axios';
// import ScraperData from './components/scraper_data';
// import HHeader from './components/HeaderFolder/Header';
import App2 from './z_site2/app2';
import App1 from './components/app1';
import AppHomepage from './z_homepage/app_home';
import ItemPage from './z_site2/components2/b_body/itemPage';
import WallpaperHtml from './wallpaperHtml/wallpaperHtml';

function App(){
  return (
      <BrowserRouter> 
      <Routes>  
        <Route path="/" element={<AppHomepage/>}/>
        <Route path="1" element={<App1/>}/>
        <Route path="2">
          <Route path="products">
            <Route path=":queries" element={<App2/>}/>
          </Route>
          <Route path="item" element={<App2/>}>
            <Route path=":queries" element={<ItemPage/>}/>
          </Route>
        </Route>
        <Route path="wallpaper" element={<WallpaperHtml/>}/>
        <Route path="*" element={<Link to='/'>404 Not Found! Home</Link>}/>
      </Routes>
      </BrowserRouter>
  );
  
}

export default App

