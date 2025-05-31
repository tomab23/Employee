import { useTranslation } from "react-i18next";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import acutalNotes from "../devNotes/AcutalNotes.json";
import acutalNotesEn from "../devNotes/AcutalNotesEn.json";
import futureNotes from "../devNotes/FutureNotes.json";
import futureNotesEn from "../devNotes/FutureNotesEn.json";

const DevNotePage = () => {

  const { t, i18n } = useTranslation();
  const actual = i18n.language === "fr" ? acutalNotes : acutalNotesEn;
  const future = i18n.language === "fr" ? futureNotes : futureNotesEn
  


  return (
    <div className="flex flex-col">
      <Navbar back />

      <div className="w-[40vw] 2xl:w-[35vw] max-sm:w-[80vw] max-xl:w-[60vw] flex flex-col gap-5 self-center px-12 max-sm:px-5 mt-5 mb-20">
        <div>
          <h1 className="text-center text-2xl my-5">{t("DEV.ACTUAL")}</h1>
          <ul className="list-disc 2xl:pl-10">
            {actual.map((item, index) => (
              <li key={index}>{item.text}.</li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-center text-2xl my-5">{t("DEV.FUTURE")}</h1>
          <ul className="list-disc 2xl:pl-10">
            {future.map((item, index) => (
              <li key={index}>{item.text}.</li>
            ))}
          </ul>
        </div>
      </div>

      <Footer fixed />
    </div>
  );
};

export default DevNotePage;
