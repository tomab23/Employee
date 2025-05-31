import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import acutalNotes from "../devNotes/AcutalNotes.json";
import futureNotes from "../devNotes/FutureNotes.json";

const DevNotePage = () => {
  return (
    <div className="flex flex-col">
      <Navbar back />

      <div className="w-[70vw] xl:w-[25vw] max-sm:w-[80vw] flex flex-col gap-10 self-center p-10">
        <div>
          <h1 className="text-center text-2xl my-5">Actuellement fonctionnel</h1>
          <ul className="list-disc">
            {acutalNotes.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-center text-2xl my-5">Fonctionnalités à venir</h1>
          <ul className="list-disc">
            {futureNotes.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>

      <Footer fixed />
    </div>
  );
};

export default DevNotePage;
