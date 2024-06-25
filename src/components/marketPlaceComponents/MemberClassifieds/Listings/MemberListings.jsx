import React from 'react'
import MemberCard from '../Items/MemberCard'

const MemberListings = () => {
  return (
    <div className="grid md:!grid-cols-2 3xl:!grid-cols-3">
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={1250000} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
      </div>
  )
}

export default MemberListings