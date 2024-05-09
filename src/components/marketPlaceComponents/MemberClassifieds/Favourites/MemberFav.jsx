import React from 'react'
import MemberCard from '../../MemberClassifieds/Items/MemberCard';
import "./MemberFav.css"

const MemberFav = () => {
  return (
    <div className="grid md:!grid-cols-2 3xl:!grid-cols-3">
    <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={true} />
    <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={1250000} isChecked={true} />
    <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={true} />
    </div>
  )
}

export default MemberFav