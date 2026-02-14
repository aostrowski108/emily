import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import QuestionnairePage from './components/QuestionnairePage';
import ProduceDoodles from './components/ProduceDoodles';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1350);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 420);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (isLoading) {
      return undefined;
    }

    const revealNodes = Array.from(document.querySelectorAll('.reveal'));

    if (!revealNodes.length) {
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      revealNodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    revealNodes.forEach((node, index) => {
      node.style.setProperty('--reveal-delay', `${Math.min(index * 55, 360)}ms`);
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [location.pathname, isLoading]);

  useEffect(() => {
    const updateScrollVars = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      document.documentElement.style.setProperty('--scroll-progress', ratio.toFixed(4));
      document.documentElement.style.setProperty('--scroll-shift', `${Math.round(window.scrollY)}px`);
    };

    updateScrollVars();

    window.addEventListener('scroll', updateScrollVars, { passive: true });
    window.addEventListener('resize', updateScrollVars);

    return () => {
      window.removeEventListener('scroll', updateScrollVars);
      window.removeEventListener('resize', updateScrollVars);
    };
  }, []);

  return (
    <div className="site-shell">
      <div className={`startup-loader ${isLoading ? 'is-visible' : ''}`} aria-hidden={!isLoading}>
        <div className="loader-core">
          <h1>TABLE</h1>
          <p className="loader-kicker">by chef emily</p>
          <span className="loader-line" />
        </div>
      </div>

      <div className="page-frame">
        <div className="ambient-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <ProduceDoodles />

        <NavBar />
        <div className="scroll-indicator" aria-hidden="true">
          <span />
        </div>

        <main className={`route-shell ${isTransitioning ? 'is-transitioning' : ''}`} key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/howitworks" element={<QuestionnairePage />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>Chef Emily Private Dining</p>
          <a href="mailto:emily@tablebyemily.com">emily@tablebyemily.com</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
