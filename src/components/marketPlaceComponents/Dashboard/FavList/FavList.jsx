import React, { useState } from 'react'
import "./FavList.css"
import {IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const sorts=[
    "Default Sorting",
    "Popularity",
    "New arrivals",
    "Latest",
    "Price: low to high",
    "Price: high to low",
]

const perPages = [
  "Per Page: 12",
  "Per Page: 20",
  "Per Page: 30",
  "Per Page: 50",
  "Per Page: 100",
]


const FavList = (props) => {
    const [active,setActive] = useState({'list-item':false,'grid-item' : true})
    const [activeDropSort,setActiveDropSort] = useState(false)
    const [activeDropPage,setActiveDropPage] = useState(false)
    const [sort , setSort] = useState(sorts[0])
    const [perPage , setPerPage] = useState(perPages[0])


    const handleClick = (id) =>{
      setActive({[id]:true})
  }
    const handleSort = (e) =>{
      const {value} = e.target.dataset
      setSort(value)
    }

    const handlePerPage = (e) =>{
      const {value} = e.target.dataset
      setPerPage(value)
    }

    const renderSortList = sorts.map( li =>( 
      <li data-value={li} class={`${sort == li ? "active" : ""}`} onClick={(e) => handleSort(e)}>{li}</li>
    ) )

    const renderPerPageList = perPages.map( li =>( 
      <li data-value={li} class={`${perPage == li ? "active" : ""}`} onClick={(e) => handlePerPage(e)}>{li}</li>
    ) )

  return (
    <div className='market-dashboard-favList'>
      <div className="market-dashboard-favList-container ">
        <nav className='bg-white rounded-[12px] p-[20px] mt-[20px]'> 
            <ul class="flex items-center" role="tablist">

              <li class="sort-by me-3 relative">
                  <div className={`${activeDropSort ? "open " : ""}favlist-dropdown`} onClick={() => {setActiveDropSort(!activeDropSort)}}>
                    <span>
                      {sort}
                      <FaChevronDown className='inline ms-2 absolute top-[12px] right-[15px]' /> 
                    </span>
                    <ul class={`${activeDropSort ? "show " : ""}sorts-list list`}>
                      {renderSortList}
                    </ul>
                  </div>
              </li>

              <li class="per-page mr-auto relative">
                  <div className={`${activeDropPage ? "open " : ""}favlist-dropdown`} onClick={() => {setActiveDropPage(!activeDropPage)}}>
                    <span>
                      {perPage}
                      <FaChevronDown className='inline ms-2 absolute top-[12px] right-[15px]' /> 
                    </span>
                    <ul class={`${activeDropPage ? "show " : ""}perPages-list list`}>
                      {renderPerPageList}
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