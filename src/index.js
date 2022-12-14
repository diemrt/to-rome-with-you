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
import Itinerary3 from './routes/Itinerary3';
import Itinerary4 from './routes/Itinerary4';
import Itinerary5 from './routes/Itinerary5';
import Itinerary6 from './routes/Itinerary6';
import Itinerary7 from './routes/Itinerary7';
import Itinerary8 from './routes/Itinerary8';
import Itinerary9 from './routes/Itinerary9';
import Goodbye from './routes/Goodbye';
import Welcome from './routes/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="itinerary-1" element={<Itinerary1 />} />
      <Route path="itinerary-2" element={<Itinerary2 />} />
      <Route path="itinerary-3" element={<Itinerary3 />} />
      <Route path="itinerary-4" element={<Itinerary4 />} />
      <Route path="itinerary-5" element={<Itinerary5 />} />
      <Route path="itinerary-6" element={<Itinerary6 />} />
      <Route path="itinerary-7" element={<Itinerary7 />} />
      <Route path="itinerary-8" element={<Itinerary8 />} />
      <Route path="itinerary-9" element={<Itinerary9 />} />
      <Route path="goodbye" element={<Goodbye />} />
    </Routes>
  </BrowserRouter>
);
