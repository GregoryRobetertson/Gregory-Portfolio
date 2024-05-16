import Cards from "./Cards";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Cards/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
