import { useState } from "react";
import MembersCard from "../../SearchPageComponents/Members/MembersCard";
import FilterBar from "../../ui/filterBar/FilterBar";

const numOfFriends = [
  1, 5, 3, 8, 22, 26, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
];

const BusinessProfileMember = () => {
  const [numberOfMembers, setNumberOfMembers] = useState(32);

  return (
    <>
      <FilterBar
        numberOfItems={numberOfMembers}
        setNumberOfItems={setNumberOfMembers}
      />

      <div className="grid grid-4-4-4 centered">
        {new Array(numberOfMembers).fill(0).map((member, i) => (
          <MembersCard
            isFriend={numOfFriends.includes(i) ? true : false}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default BusinessProfileMember;
