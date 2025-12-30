import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LoaderProvider } from '@/context/LoaderContext'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import OurStory from '@/pages/OurStory'
import OurMenu from '@/pages/OurMenu'
import Gallery from '@/pages/Gallery'

// Placeholder components for other pages until refactored
import Admin from '@/pages/Admin'

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function Layout() {
    return (
        <div className="font-sans antialiased text-gray-900">
            <ScrollToTop />
            {/* Navbar is in Home page in Next.js version, but usually better in Layout. 
          However, Home page specifically had it. I'll put it here for now. */}
            {/* <Navbar /> */}
            {/* Wait, relying on page specific Navbar might be the design. 
          But looking at the Home page code, it has <Navbar />. 
          I will stick to the components for now and check if I can unify. 
          Let's verify logic in next steps. For now, basic routing. */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/our-menu" element={<OurMenu />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <LoaderProvider>
                <Layout />
            </LoaderProvider>
        </BrowserRouter>
    )
}
