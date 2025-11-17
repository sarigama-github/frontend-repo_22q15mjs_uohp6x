import DecryptedText from './DecryptedText'
import Section from './Section'

const projects = [
  {
    title: 'TaskPilot',
    desc: 'A clean task manager with drag-and-drop and smart filters.',
    demo: '#',
    code: '#'
  },
  {
    title: 'DevNotes',
    desc: 'Markdown notes with tags, search, and offline sync.',
    demo: '#',
    code: '#'
  },
  {
    title: 'PictoFind',
    desc: 'Image search powered by multiple providers and caching.',
    demo: '#',
    code: '#'
  }
]

export default function Projects() {
  return (
    <Section id="projects" title={<DecryptedText text="Featured Projects" /> }>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.title} className="group rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-black/40 backdrop-blur p-6 transition hover:shadow-lg">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:underline">
              <DecryptedText text={p.title} speed={16} />
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">{p.desc}</p>
            <div className="flex gap-3">
              <a href={p.demo} className="px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-black text-sm">Live Demo</a>
              <a href={p.code} className="px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm text-neutral-800 dark:text-neutral-100">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
