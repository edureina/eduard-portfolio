import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = React.useState(true);

  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen">
      <Header dark={dark} setDark={setDark} />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <footer className="text-center text-sm py-8 opacity-70">
          © {new Date().getFullYear()} Eduard Reina — Built with React + Vite
        </footer>
      </main>
    </div>
  );
}
