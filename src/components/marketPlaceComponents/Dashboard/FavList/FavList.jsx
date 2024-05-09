import React, { useState } from 'react'
import "./FavList.css"
import { Menu } from '@headlessui/react'
import {IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const filters=[
    "Default Sorting",
    "Popularity",
    "New arrivals",
    "Latest",
    "Price: low to high",
    "Price: high to low",
]


const FavList = (props) => {
    const [active,setActive] = useState({'list-item':false,'grid-item' : true})
    const [activeDrop,setActiveDrop] = useState(false)
    const handleClick = (id) =>{
        setActive({[id]:true})
    }
    const [filter , setFilter] = useState("Default Sorting")
    const handleFilter = (e) =>{
      const {value} = e.target.dataset
      setFilter(value)
    }
    const renderfilterList = filters.map( li =>( 
      <li data-value={li} class={`${filter == li ? "active" : ""}`} onClick={(e) => handleFilter(e)}>{li}</li>
    ) )

  return (
    <div className='market-dashboard-favList'>
      <div className="market-dashboard-favList-container ">
        <nav className='bg-white rounded-[12px] p-[20px] mt-[20px]'> 
            <ul class="flex items-center" role="tablist">
              <li class="list-inline-item mr-auto relative">
                  <div className="favlist-dropdown">
                    <span onClick={() => {setActiveDrop(!activeDrop)}}>{filter}
                      <FaChevronDown className='inline ms-2 absolute top-[12px] right-[15px]' /> 
                    </span>
                    <ul class={`${activeDrop ? "show " : ""}list`}>
                      {renderfilterList}
                    </ul>
                  </div>
              </li>
              <li class="view-item cursor-pointer" >
                <span onClick={() => handleClick("list-item")}>
                  <FaThList className={`${active['list-item'] ? 'active' : ''}`} id='list-item'/>
                  </span>
              </li>
              <li class="view-item cursor-pointer">
                <span onClick={() => handleClick("grid-item")}>
                  <IoGridSharp className={`${active['grid-item'] ? 'active' : ''}`} id='grid-item'/>
                  </span>
              </li>
            </ul>
        </nav>

        <div className="render-favCards pt-[15px]">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default FavList