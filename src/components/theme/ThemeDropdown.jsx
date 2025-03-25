import { useEffect, useState } from "react";
import { ThemeList } from "../../models/ThemeList";
import InputTheme from "./InputTheme";
import { themeChange } from "theme-change";


const ThemeDropdwon = () => {

  const themes = ThemeList;

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (theme) {
      document.querySelector('html')?.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  


  return (
    <div className="dropdown dropdown-top dropdown-end z-50">
  <div tabIndex={0} role="button" className="btn m-1">
    Themes
    <svg
      width="12px"
      height="12px"
      className="inline-block h-2 w-2 fill-current opacity-60 rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048">
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box w-52 p-2 shadow-2xl z-50">
    {themes.map((theme) => (
      <li key={theme.id}>
        <InputTheme name={theme.name} setTheme={setTheme} />
      </li>
    ))}
  </ul>
</div>
  )
}

export default ThemeDropdwon