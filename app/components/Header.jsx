import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-4 border-b border-[#3a3a3a]">
      <h1 className="text-xl font-bold tracking-wide">Aegis Research Group</h1>
      <DarkModeToggle />
    </header>
  )
}
