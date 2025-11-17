import DecryptedText from './DecryptedText'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title={<DecryptedText text="About Me" /> }>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-40 h-40 md:w-56 md:h-56">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 blur-2xl opacity-40" />
            <img src="https://i.pravatar.cc/300" alt="avatar" className="relative w-full h-full object-cover rounded-full ring-4 ring-white dark:ring-neutral-900 shadow-xl" />
          </div>
        </div>
        <div className="md:col-span-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p className="mb-4"><DecryptedText text="I’m a junior full‑stack developer who enjoys crafting clean interfaces and reliable backends." speed={20} /></p>
          <p className="mb-4">I work mainly with React, Node/Express, and modern tooling. I value accessibility, performance, and developer experience.</p>
          <p>Outside of coding, I explore UI motion, write notes, and tinker with small tools that make life easier.</p>
        </div>
      </div>
    </Section>
  )
}
