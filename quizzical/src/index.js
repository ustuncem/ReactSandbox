import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Intro from './pages/Intro';
import Quiz from './pages/Quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Intro />} />
        <Route path="quiz" element={<Quiz />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
