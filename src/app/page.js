
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  
  return (
    <>
     <Header/> 
   <main className="container">
      
      <Hero/>
      <About/>
      <Skills/>
    </main>
    </>
  
  );
}
