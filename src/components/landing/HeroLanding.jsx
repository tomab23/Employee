import { useTranslation } from "react-i18next"
import hero from "/hero.svg"

const HeroLanding = () => {
    const { t } = useTranslation();

  return (
    <div className="hero bg-base-100 ">
    <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-sm:gap-5">
      <img
        src={hero}
        alt="illustrations by Storyset" title='illustrations by Storyset'
        className="max-w-xs rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold md:w-[40rem]">{t('LANDING.WELCOME')} <b className="uppercase">Employee</b></h1>
        <p className="py-6">
          {t('LANDING.INFO')}
        </p>
      </div>
    </div>
  </div>
  )
}

export default HeroLanding