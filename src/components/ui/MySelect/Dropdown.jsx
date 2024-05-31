import React, { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import { BiSolidChevronDown } from "react-icons/bi";


const Dropdown = ({optionsArray , defaultValue , dropRef ,selectedValue , setValue }) => {
  const [activeDrop,setActiveDrop] = useState(false)
  const height = 44.8 * optionsArray.length
  const renderDropList = optionsArray.map( li =>( 
    <li 
    class={`${selectedValue == li.value ? "active" : ""}`} 
    data-value={li.value} onClick={(e) => setValue(e.target.dataset.value)}
    key={li.id}>
      {li.value} <FaCheck className='hidden' />
    </li>
  ) )

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setActiveDrop(false);
      }
    };
    // Add event listener when component mounts
    document.addEventListener('click', handleClickOutside);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${activeDrop ? "open " : ""}favlist-dropdown`} onClick={() => {setActiveDrop(!activeDrop)}}>
        <span>
            { selectedValue ?  selectedValue  : defaultValue}
            <BiSolidChevronDown className='inline ms-2 absolute top-[12px] right-[15px] text-[#fd6729]' /> 
        </span>
        <ul class={"sorts-list list"}
            style={ activeDrop ? {height:height , opacity:"1"} : {}}>
            
            {renderDropList}
        </ul>
    </div>
  )
}

export default Dropdown