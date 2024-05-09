import { Menu } from '@headlessui/react'
import {IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import "./RealFav.css"


import React, { useState } from 'react'
import RealCard from '../Items/RealCard';

const RealFav = () => {
  const [active,setActive] = useState({'list-item':false,'grid-item' : true})
  const handleClick = (id) =>{
    setActive({[id]:true})
  }
  console.log(active)
  return (
    <div className='real-favList'>
      <div className="real-favList-container ">
        <nav className='bg-white rounded-[12px] p-[20px] mt-[20px]'> 
            <ul class="flex items-center" role="tablist">
              <li class="list-inline-item mr-auto relative">
                  <span class="title-text text-[14px] me-3">Sort by</span>
                  <Menu>
                    <Menu.Button className={"w-fit font-[600]"}>Based Properties <FaChevronDown className='inline text-[10px]'/> </Menu.Button>
                    <Menu.Items className={"flex flex-col favlist-dropdown"}>
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            className={`${active && 'bg-blue-500'}`}
                            href="#"
                          >
                            Low to High Price
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            className={`${active && 'bg-blue-500'}`}
                            href="#"
                          >
                            High to Low Price
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            className={`${active && 'bg-blue-500'}`}
                            href="#"
                          >
                            Sell Properties
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            className={`${active && 'bg-blue-500'}`}
                            href="#"
                          >
                            Rent Properties
                          </p>
                        )}
                      </Menu.Item>
                      
                    </Menu.Items>
                  </Menu>
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

        <div className="render-favCards">
          <div className="grid md:!grid-cols-2 3xl:!grid-cols-3">
          <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} />
          <RealCard title={"vila in coral gables with pool, garden"} downPayment={35000} owner={"Owner"}/>
          <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Developer"}/>
          <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealFav