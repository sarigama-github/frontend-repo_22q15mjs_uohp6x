export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-8">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
