import { Dispatch, SetStateAction } from "react";


const InputTheme = ({ name, setTheme}) => {

    // Récupere la 1ere lettre et la met en Majuscule + récupère le nom sans la 1ere lettre
    const label = name.charAt(0).toUpperCase() + name.slice(1);

    
  return (
    <input
    data-set-theme={name}
    type="radio"
    name="theme-dropdown"
    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
    aria-label={label}
    value={name} 
    onClick={() => setTheme(name)}/>
    
  )
}

export default InputTheme