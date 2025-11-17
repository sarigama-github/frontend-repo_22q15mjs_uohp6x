import { useEffect, useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export default function DecryptedText({ text = '', speed = 18, className = '', trigger = true }) {
  const [output, setOutput] = useState('')
  const frame = useRef(0)
  const queue = useRef([])
  const raf = useRef(null)

  useEffect(() => {
    if (!trigger) return
    const from = output
    const length = Math.max(from.length, text.length)
    queue.current = []
    for (let i = 0; i < length; i++) {
      const fromChar = from[i] || ''
      const toChar = text[i] || ''
      const start = Math.floor(Math.random() * speed)
      const end = start + Math.floor(Math.random() * speed)
      queue.current.push({ from: fromChar, to: toChar, start, end, char: '' })
    }
    cancelAnimationFrame(raf.current)
    frame.current = 0
    raf.current = requestAnimationFrame(update)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, trigger])

  const update = () => {
    let complete = 0
    let out = ''
    for (let i = 0; i < queue.current.length; i++) {
      let { from, to, start, end, char } = queue.current[i]
      if (frame.current >= end) {
        complete++
        out += to
      } else if (frame.current >= start) {
        if (!char || Math.random() < 0.28) {
          char = CHARS[Math.floor(Math.random() * CHARS.length)]
          queue.current[i].char = char
        }
        out += `<span class="text-cyan-400/80 dark:text-cyan-300/80">${char}</span>`
      } else {
        out += from
      }
    }
    setOutput(out)
    frame.current++
    if (complete !== queue.current.length) {
      raf.current = requestAnimationFrame(update)
    }
  }

  return (
    <span className={className} dangerouslySetInnerHTML={{ __html: output || text }} />
  )
}
