import React from 'react'
import EmployeeCard from './EmployeeCard';
import SkeletonCard from './SkeletonCard';

const EmployeePart = ({ loading }) => {

    if (loading)
        return (
          <div className="flex max-sm:flex-col max-sm:items-center gap-4 my-20 mx-5">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        );

  return (
    <div className="mx-5 mt-10 flex flex-col gap-3">
    <div className="flex justify-between gap-5">
    <p className="text-xl">Vos employés (3)</p>
    <button className="btn btn-outline btn-primary btn-sm" onClick={() => alert("/create")}>+ Ajouter un employé</button>
    </div>
    <div className="flex max-sm:flex-col max-sm:items-center gap-4 mb-20">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
    </div>
  </div>
  )
}

export default EmployeePart