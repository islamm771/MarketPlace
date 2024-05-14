import React from 'react'
import MemberCard from "../../MemberClassifieds/Items/MemberCard"
import { HiArrowLongRight } from 'react-icons/hi2'

const MemberSuggested = () => {
  return (
    <>
      <div className="suggested-heading mt-[50px] mb-[35px] flex items-center justify-between">
        <h3 className='text-[22px]'>Member Classifieds</h3>
        <a className='latest-heading-link font-[500]' href="/marketplace/memberclassifieds">
          View All <HiArrowLongRight className='inline text-[14px]' /> 
        </a>
      </div>
      <div className='grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3'>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
      </div>
    </>
  )
}

export default MemberSuggested