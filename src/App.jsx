import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-cyan-200/60 selection:text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Your Name — All rights reserved.</footer>
    </div>
  )
}

export default App
