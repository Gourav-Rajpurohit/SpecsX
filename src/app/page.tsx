"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessEngineering from "@/components/ProcessEngineering";
import FeaturedProducts from "@/components/FeaturedProducts";
import RetailersChoice from "@/components/RetailersChoice";
import InquirySection from "@/components/InquirySection";
import InquiryModal from "@/components/InquiryModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | undefined>(undefined);

  const handleOpenModal = (model?: string) => {
    setSelectedModel(model);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#0B0F19] selection:bg-[#1D63FF] selection:text-white">
      <Navbar onOpenModal={handleOpenModal} />
      <HeroSection />
      <FeaturedProducts onOpenModal={handleOpenModal} />
      {/* Disabled Explore Catalog Range section */}
      {/* <CatalogCategories onSelectCategory={(cat) => handleOpenModal(cat)} /> */}
      <ProcessEngineering />
      {/* Disabled Color Possibilities section */}
      {/* <ColorPossibilities /> */}
      <RetailersChoice />
      {/* Disabled Inside SpecsX section */}
      {/* <InsideSpecsX /> */}
      <InquirySection />
      <Footer />
      
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedModel={selectedModel}
      />
    </main>
  );
}
