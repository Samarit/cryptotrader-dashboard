export default function ThemeToggle({currentTheme, setCurrentTheme}) {

  const toggleHandler = (e) => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="theme-toggle" onClick={toggleHandler}>
      <span></span>
    </div>
  )
}