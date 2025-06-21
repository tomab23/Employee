import { useTranslation } from "react-i18next";
import progress from "../assets/imgs/comingSoon.svg";
import Footer from "../components/layout/Footer";
import { TriangleAlert } from "lucide-react";

const InProgressPage = () => {
    const { t } = useTranslation();

  return (
    <div className="min-h-screen flex-col justify-center items-center">
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <p className="px-4 font-semibold text-xl cursor-default">Employee</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={progress}
          alt="illustrations by Storyset"
          title="illustrations by Storyset"
          className="h-[35rem] max-sm:h-[25rem]"
        />
      </div>

      <div className="flex justify-self-center gap-2">
        <TriangleAlert />
        <h1 className="text-center font-bold uppercase">
          {t('PROGRESS.MAINTENANCE')}
        </h1>
        <TriangleAlert />
      </div>
      <br />
      <h1 className="text-center font-bold uppercase">{t('PROGRESS.SOON')}</h1>
      <Footer fixed />
    </div>
  );
};

export default InProgressPage;
