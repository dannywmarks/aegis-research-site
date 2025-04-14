'use client'

import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-sm px-4 py-2 border rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

