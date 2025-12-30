/**
 * PublicLayout Component
 * Main layout wrapper for all public-facing pages
 * Includes TopInfoBar, MainNavbar, and Footer
 */

import { Outlet } from 'react-router-dom';
import TopInfoBar from './TopInfoBar';
import MainNavbar from './MainNavbar';
import Footer from './Footer';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Info Bar - Yellow */}
      <TopInfoBar />
      
      {/* Main Navigation */}
      <MainNavbar />
      
      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PublicLayout;
