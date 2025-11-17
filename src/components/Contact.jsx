import DecryptedText from './DecryptedText'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title={<DecryptedText text="Get In Touch" /> }>
      <form className="max-w-2xl mx-auto grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input required placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/40 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100" />
          <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/40 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100" />
        </div>
        <input placeholder="Subject" className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/40 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100" />
        <textarea rows="5" required placeholder="Message" className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/40 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100" />
        <button className="justify-self-start px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black">Send</button>
      </form>
    </Section>
  )
}
