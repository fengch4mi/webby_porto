import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import { SkeletonGrid, SkeletonAbout } from './components/SkeletonLoader';
import './App.css';

// Code splitting: Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <Suspense fallback={<div className="loading-container"><SkeletonGrid count={3} /></div>}>
              <Home />
            </Suspense>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<div className="loading-container"><SkeletonAbout /></div>}>
              <About />
            </Suspense>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <Suspense fallback={<div className="loading-container"><SkeletonGrid count={6} /></div>}>
              <Portfolio />
            </Suspense>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router basename="/webby_porto">
      <div className="App">
        <Header />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
