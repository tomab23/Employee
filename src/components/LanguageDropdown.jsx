import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {

  const { i18n } = useTranslation();

  const langueEn = () => {
    i18n.changeLanguage("en")
    document.activeElement.blur()
  }

  const langueFr = () => {
    i18n.changeLanguage("fr")
    document.activeElement.blur()
  }

  return (
    <div className="dropdown dropdown-top dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1"><Languages />
  <svg
      width="12px"
      height="12px"
      className="inline-block h-2 w-2 fill-current opacity-60 rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048">
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box z-1 w-32 p-2 shadow-sm">
    <li><a onClick={langueFr} className='font-semibold'>Français</a></li>
    <li><a onClick={langueEn} className='font-semibold'>English</a></li>
  </ul>
</div>
  )
}

export default LanguageDropdown