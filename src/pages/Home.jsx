// src/pages/Home.jsx
import BannerSection from '../components/BannerSection';
import ResourceTiles from '../components/ResourceTiles';
import CTASection from '../components/CTASection';
import ClientLogos from '../components/ClientLogos';

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Promotional Banner */}
      <BannerSection />

      {/* Resource Tiles with Sidebar */}
      <ResourceTiles />

      {/* CTA Section - Ready to Talk */}
      <CTASection />

      {/* Client Logos */}
      <ClientLogos />
    </main>
  );
};

export default Home;
