import LanguageDropdown from "../LanguageDropdown"
import ThemeDropdwon from "../theme/ThemeDropdown"


const Footer = (fixed) => {

  return (
<footer className={`footer sm:footer-horizontal bg-base-300 items-center p-2 px-5
max-sm:text-sm max-sm:flex justify-between ${fixed && "fixed bottom-0"}`}>
  <aside className="grid-flow-col items-center ">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  {/* DROPDOWN */}
  <nav className="grid-flow-col gap-4 max-sm:gap-2 md:place-self-center md:justify-self-end">

{/* LANGUE */}
  <LanguageDropdown />
{/* THEME */}
  <ThemeDropdwon />
  </nav>
</footer>
  )
}

export default Footer