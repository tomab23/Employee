import React from "react";
import Navbar from "../components/layout/Navbar";
import EmployeeListPart from "../components/employee/EmployeeListPart";
import Footer from "./../components/layout/Footer";
import { Search } from "lucide-react";
import ListTestEmployee from "../components/employee/ListTestEmployee";

const ListEmployeePage = () => {
  return (
    <div className="flex flex-col">
      <Navbar back log />

      <h1 className="text-center font-semibold text-3xl uppercase my-5">
        Vos employés
      </h1>

      {/* SEARCH */}
      {/* TEST 1 */}
      <div className="flex justify-center gap-0.5">
        <input
          type="text"
          placeholder="John doe"
          className="input input-bordered max-md:w-auto"
        />
        <button className="btn btn-primary">
          <Search />
          Search
        </button>
      </div>
      {/* TEST 2 */}
      <div className="join flex justify-center mt-2">
        <div>
          <div>
            <input
              className="input join-item input-bordered w-80 max-md:w-auto"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>

      {/* FILTER */}
      <div className="flex justify-center mt-2">
        <form className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          <input
            className="btn"
            type="radio"
            name="employee"
            aria-label="En acitivité"
          />
          <input
            className="btn"
            type="radio"
            name="employee"
            aria-label="N'est plus en acitvité"
          />
        </form>
      </div>

      {/* LIST EMPLOYEE */}
      <div className="mx-10 max-sm:mx-2 max-lg:mx-5 max-xl:mx-10 mt-5">
        <EmployeeListPart loading={false} />
      </div>

      <div className="mx-10 max-sm:mx-2 max-lg:mx-5 max-xl:mx-10 mb-40 w-[50vw] self-center flex justify-center">
        <ListTestEmployee />
      </div>

      <Footer fixed />
    </div>
  );
};

export default ListEmployeePage;
