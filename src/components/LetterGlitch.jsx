import { useEffect, useRef } from 'react'

export default function LetterGlitch({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let interval = null

    const onOver = () => {
      let iteration = 0
      clearInterval(interval)
      const original = el.dataset.value || el.textContent
      interval = setInterval(() => {
        el.textContent = original
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' '
            if (idx < iteration) return original[idx]
            return letters[Math.floor(Math.random() * 26)]
          })
          .join('')
        if (iteration >= original.length) clearInterval(interval)
        iteration += 1/2
      }, 30)
    }

    el.addEventListener('mouseover', onOver)
    return () => {
      clearInterval(interval)
      el.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <div ref={ref} data-value="FULL-STACK • CREATIVE • BUILDER" className={`tracking-[0.3em] text-xs md:text-sm uppercase text-neutral-700/60 dark:text-neutral-300/30 select-none ${className}`}>
      FULL-STACK • CREATIVE • BUILDER
    </div>
  )
}
