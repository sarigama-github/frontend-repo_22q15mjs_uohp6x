import Spline from '@splinetool/react-spline'
import DecryptedText from './DecryptedText'
import LetterGlitch from './LetterGlitch'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 -z-10 opacity-80">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 dark:from-black/70 dark:via-black/40 dark:to-black/90" />
      </div>

      <div className="relative z-10 px-6 md:px-10 max-w-5xl mx-auto text-center">
        <LetterGlitch className="mb-6" />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          <DecryptedText text="Hi, I'm a Junior Full‑stack Developer" />
        </h1>
        <p className="mt-4 md:mt-6 text-neutral-700/80 dark:text-neutral-300/80 text-base md:text-lg">
          <DecryptedText text="I build fast, modern web apps with React, Node, and thoughtful UX." speed={22} />
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 md:gap-4">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-neutral-900 text-white dark:bg-white dark:text-black transition shadow hover:shadow-lg">
            <span>View Projects</span>
            <span className="transition -translate-x-1 group-hover:translate-x-0">→</span>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/70 backdrop-blur text-neutral-900 dark:bg-black/40 dark:text-white border border-neutral-200/60 dark:border-neutral-700/60 transition hover:bg-white hover:dark:bg-black/60">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
