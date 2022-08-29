import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import './index.css';
import Itinerary1 from './routes/Itinerary1';
import Itinerary2 from './routes/Itinerary2';
import Welcome from './routes/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="itinerary-1" element={<Itinerary1 />} />
      <Route path="itinerary-2" element={<Itinerary2 />} />
    </Routes>
  </BrowserRouter>
);
