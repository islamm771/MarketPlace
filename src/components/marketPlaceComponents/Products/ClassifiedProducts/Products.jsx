import React from "react";
import "./Products.css";
import MemberCard from "../../MemberClassifieds/Items/MemberCard";
const ClassifiedsProducts = () => {
  return (
    <div className="market-product-cards grid !grid-col-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-6">
      <MemberCard title={"Ladies Gap Jeans"} price={755000} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={1250000} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
      <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} />
      
    </div>
  );
};

export default ClassifiedsProducts;
