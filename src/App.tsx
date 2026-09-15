import { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/shared/CustomCursor';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { ConsultationModal } from './components/shared/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { TheWorkPage } from './pages/TheWorkPage';
import { NidhiPage } from './pages/NidhiPage';
import { JournalPage } from './pages/JournalPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { LibraryPage } from './pages/LibraryPage';
import { MediaPage } from './pages/MediaPage';
import { SpeakingPage } from './pages/SpeakingPage';
import { StartHereFlow } from './pages/StartHereFlow';

import './styles/global.css';

export function App() {
  // Initialize Lenis smooth scroll and GSAP ticker sync
  useLenis();

  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string>('the-art-of-unspoken-agreements');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('Individual Therapy');

  // Handle browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setConsultationService(serviceTitle);
    }
    setIsConsultationOpen(true);
  };

  const handleSelectArticle = (slug: string) => {
    setSelectedArticleSlug(slug);
    handleNavigate(`/journal/${slug}`);
  };

  const isArticleDetail = currentPath.startsWith('/journal/') && currentPath !== '/journal';
  const articleSlug = isArticleDetail ? currentPath.replace('/journal/', '') : selectedArticleSlug;

  return (
    <div className="pgt-experience-root">
      {/* Subtle Desktop Cursor Accent */}
      <CustomCursor />

      {/* Editorial Navigation */}
      <Navigation
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Routing */}
      {currentPath === '/' && (
        <HomePage
          onNavigate={handleNavigate}
          onOpenConsultation={handleOpenConsultation}
        />
      )}

      {(currentPath === '/the-work' || currentPath === '/work') && (
        <TheWorkPage
          onOpenConsultation={handleOpenConsultation}
          onNavigate={handleNavigate}
        />
      )}

      {(currentPath === '/nidhi' || currentPath === '/about') && (
        <NidhiPage
          onOpenConsultation={handleOpenConsultation}
          onNavigate={handleNavigate}
        />
      )}

      {(currentPath === '/journal' || currentPath === '/perspectives') && (
        <JournalPage
          onSelectArticle={handleSelectArticle}
          onOpenConsultation={handleOpenConsultation}
        />
      )}

      {isArticleDetail && (
        <ArticleDetailPage
          slug={articleSlug}
          onBack={() => handleNavigate('/journal')}
          onOpenConsultation={handleOpenConsultation}
        />
      )}

      {currentPath === '/library' && (
        <LibraryPage />
      )}

      {currentPath === '/media' && (
        <MediaPage />
      )}

      {currentPath === '/speaking' && (
        <SpeakingPage
          onOpenConsultation={handleOpenConsultation}
        />
      )}

      {currentPath === '/start-here' && (
        <StartHereFlow
          onComplete={(_answers) => {}}
          onNavigate={handleNavigate}
          onOpenConsultation={handleOpenConsultation}
        />
      )}

      {/* Editorial Footer (hidden only on Start Here flow for pure questionnaire immersion) */}
      {currentPath !== '/start-here' && (
        <Footer
          onNavigate={handleNavigate}
          onOpenConsultation={handleOpenConsultation}
        />
      )}

      {/* Confidential Consultation Modal Drawer */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationService}
      />
    </div>
  );
}

export default App;
