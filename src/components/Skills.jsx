import DecryptedText from './DecryptedText'
import Section from './Section'

const skills = {
  Frontend: ['React', 'Vite', 'Tailwind', 'TypeScript', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'FastAPI', 'MongoDB', 'REST'],
  Tools: ['Git', 'Docker', 'Vercel', 'Postman', 'Jest']
}

export default function Skills() {
  return (
    <Section id="skills" title={<DecryptedText text="Skills" /> }>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group} className="rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-black/40 backdrop-blur p-6">
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4"><DecryptedText text={group} speed={18} /></h3>
            <div className="flex flex-wrap gap-2">
              {list.map(item => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 text-sm border border-neutral-200 dark:border-neutral-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-neutral-700 dark:text-neutral-300"><DecryptedText text="Currently learning: Next.js, GraphQL" speed={22} /></div>
    </Section>
  )
}
