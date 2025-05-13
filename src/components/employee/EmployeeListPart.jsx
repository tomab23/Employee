import React from 'react'
import EmployeeCard from './EmployeeCard'
import SkeletonCard from './SkeletonCard';

const EmployeeListPart = ({ loading }) => {

    if (loading)
        return (
          <div className="flex max-sm:flex-col max-sm:items-center gap-4 mb-20">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        );

  return (
    <div className="flex max-sm:flex-col max-sm:items-center gap-4 mb-20">
    <EmployeeCard />
    <EmployeeCard />
    <EmployeeCard />
</div>
  )
}

export default EmployeeListPart