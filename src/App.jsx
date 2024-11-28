import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Features from "./components/Features.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <NavBar />
            <Hero />
            <About />
            <Features />
            <Contact />
            <Footer />
        </main>
    )
}
export default App
