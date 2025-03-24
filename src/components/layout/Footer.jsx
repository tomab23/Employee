import ThemeDropdwon from "../theme/ThemeDropdwon"

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
<div className="dropdown dropdown-top dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1">Langue
  <svg
      width="12px"
      height="12px"
      className="inline-block h-2 w-2 fill-current opacity-60 rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048">
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
    <li><a>Français</a></li>
    <li><a>English</a></li>
  </ul>
</div>
{/* THEME */}
  <ThemeDropdwon />
  </nav>
</footer>
  )
}

export default Footer