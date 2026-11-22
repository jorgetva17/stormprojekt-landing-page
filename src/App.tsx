import React from 'react';
import { SoundwaveCanvas } from './components/SoundwaveCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { RhythmsSection } from './components/RhythmsSection';
import { AudioPreview } from './components/AudioPreview';
import { SetlistExplorer } from './components/SetlistExplorer';
import { TourDates } from './components/TourDates';
import { MediaGallery } from './components/MediaGallery';
import { BookingCalculator } from './components/BookingCalculator';
import { QAMural } from './components/QAMural';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-storm-950 text-slate-100 selection:bg-storm-cyan selection:text-storm-950">
      {/* Background Animated Soundwave / Electric Aura Canvas */}
      <SoundwaveCanvas />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* High-Voltage Hero Section */}
        <Hero />

        {/* Story & Essence: Matheus Azevedo & Stormprojekt */}
        <About />

        {/* Musical Diversity: Rock, Jazz, Blues, Fusion */}
        <RhythmsSection />

        {/* Audio Console Preview Simulator */}
        <AudioPreview />

        {/* Dynamic Setlist & Repertoire Explorer */}
        <SetlistExplorer />

        {/* Live Tour Dates & Upcoming Band Actions */}
        <TourDates />

        {/* Instagram Actions & Media Gallery */}
        <MediaGallery />

        {/* Interactive Booking & Quote Calculator */}
        <BookingCalculator />

        {/* Client & Fan Q&A Mural + Official FAQ */}
        <QAMural />

        {/* Verified Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
