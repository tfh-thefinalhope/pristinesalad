import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuHighlights from "@/components/MenuHighlights";
import MapSection from "@/components/MapSection";
import DeliverySection from "@/components/DeliverySection";
import OfferPopup from "@/components/OfferPopup";
import content from "@/data/content.json";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-brand-light font-sans">
            <Navbar />
            <Hero />
            <MenuHighlights />
            <AboutSection data={content.story} />
            <TestimonialsSection data={content.testimonials} />
            <MapSection />
            <DeliverySection />
            <OfferPopup data={content.offer} />
        </main>
    );
}
