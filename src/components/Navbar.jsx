import { useEffect, useState } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold text-neutral-900 dark:text-white">My Portfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white">About</a>
          <a href="#skills" className="hover:text-neutral-900 dark:hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
        </nav>
        <button onClick={() => setDark(v => !v)} className="text-sm rounded-full px-3 py-1.5 border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-black/40 text-neutral-800 dark:text-neutral-100">
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  )
}
