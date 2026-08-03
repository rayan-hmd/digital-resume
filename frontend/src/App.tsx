import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { Navbar } from './components/Layout';

const VIDEO_URL = 'https://player.vimeo.com/video/309240312?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0';

function App() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-500/30 selection:text-zinc-100">
        <div className="fixed inset-0 z-0 overflow-hidden bg-zinc-950">
          {!reducedMotion && (
            <div className="video-shell absolute inset-0 overflow-hidden">
              <iframe
                src={VIDEO_URL}
                title="Background video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          )}
        </div>
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
