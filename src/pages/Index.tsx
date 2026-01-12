import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArchitectSummary from "@/components/ArchitectSummary";
import SelectedSystems from "@/components/SelectedSystems";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import OperationalExcellence from "@/components/OperationalExcellence";
import ToolingExpertise from "@/components/ToolingExpertise";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ArchitectSummary />
        <SelectedSystems />
        <DesignPhilosophy />
        <OperationalExcellence />
        <ToolingExpertise />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
