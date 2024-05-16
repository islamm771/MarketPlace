import React, { useEffect, useRef, useState } from 'react'
import FormCheckbox from '../../components/ui/formCheckbox/FormCheckbox';
import EstateProducts from '../../components/marketPlaceComponents/Products/EstateProducts/Products';
import "./MarketPlace.css"
import {IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { FaChevronDown,FaCheck } from "react-icons/fa6";
import FormInputwithIcon from '../../components/ui/formInputWithSearchIcon/FormInputwithIcon';
import InputSlider from '../../components/ui/inputSlider/Input-Slider';
import { FaAngleDoubleLeft,FaAngleDoubleRight } from "react-icons/fa";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Slider } from 'antd';


const sorts=[
    "Default Sorting",
    "Popularity",
    "New arrivals",
    "Latest",
    "Price: low to high",
    "Price: high to low",
]

const marks = {
  415000: {
    label: <small>4,150,00</small>
  },
  2700500: {
    label: <small>2,700,500</small>,
  },
};


const MarketSearchPage = () => {
    const [active,setActive] = useState({'list-item':false,'grid-item' : true})
    const [activeDropSort,setActiveDropSort] = useState(false)
    const [sort , setSort] = useState(sorts[0])
    const dropSortRef = useRef(null);

    const handleClick = (id) =>{
        setActive({[id]:true})
    }
    const handleSort = (e) =>{
        const {value} = e.target.dataset
        setSort(value)
      }  
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropSortRef.current && !dropSortRef.current.contains(event.target)) {
            setActiveDropSort(false);
          }
          
        };
    
        // Add event listener when component mounts
        document.addEventListener('click', handleClickOutside);
    
        // Remove event listener when component unmounts
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);
  
      const renderSortList = sorts.map( li =>( 
        <li data-value={li} class={`${sort == li ? "active" : ""}`} onClick={(e) => handleSort(e)}>{li} <FaCheck className='hidden' /></li>
      ) )


      function onChange(value) {
        console.log('onChange: ', value);
      }
      
      function onAfterChange(value) {
        console.log('onAfterChange: ', value);
      }
  
  return (
    <div className='search-page-container !my-[6rem]'>
        <div className="dashboard-cont-swiper mb-[50px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="banner-container">
                <img src="/img/ads/ads.jpeg" alt="ads banner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-container">
                <img src="/img/ads/ads.jpeg" alt="ads banner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-container">
                <img src="/img/ads/ads.jpeg" alt="ads banner" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="special-landing-heading">
                <span>Real Estates</span>
                <h1>Find Properties in Egypt</h1>
        </div>
        <nav className='bg-white rounded-[12px] mb-[15px] p-[20px] mt-[20px]'> 
            <ul class="grid !grid-cols-6 !items-center" role="tablist">

              <li className="search-bar col-span-6 lg:col-span-3">
                <FormInputwithIcon label={"Search for..."} id={"product-search"} />
              </li>
              <li class="sort-by relative w-[200px] lg:w-[250px] col-span-3 lg:col-span-2" ref={dropSortRef}>
                  <div className={`${activeDropSort ? "open " : ""}favlist-dropdown`} onClick={() => {setActiveDropSort(!activeDropSort)}}>
                    <span>
                      {sort}
                      <FaChevronDown className='inline ms-2 absolute top-[12px] right-[15px] text-[#fd6729]' /> 
                    </span>
                    <ul class={`${activeDropSort ? "show " : ""}sorts-list list`}>
                      {renderSortList}
                    </ul>
                  </div>
              </li>
              <li class="view-item flex justify-end gap-0 col-span-3 lg:col-span-1">
                <span onClick={() => handleClick("list-item")}>
                    <FaThList className={`${active['list-item'] ? 'active' : ''}`} id='list-item'/>
                    </span>
                <span onClick={() => handleClick("grid-item")}>
                  <IoGridSharp className={`${active['grid-item'] ? 'active' : ''}`} id='grid-item'/>
                  </span>
              </li>
            </ul>
        </nav>
      <div className="grid lg:!grid-cols-12">
        <aside className="search-sidebar lg:col-span-3 bg-white p-3 md:p-6 rounded-[12px]">
            {/* Advance Information widget */}
            <div className="widget ltn__menu-widget">
            <h4 className="ltn__widget-title mb-[15px]">Property Type</h4>
            <ul>
                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"House"} id={"house"} name={"house"} />
                    <span className="categorey-no">3,924</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Single Family"} id={"single-family"} name={"single-family"} />
                    <span className="categorey-no">3,610</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Apartment"} id={"apartment"} name={"apartment"} />
                    <span className="categorey-no">2,912</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                <FormCheckbox label={"Office Villa"} id={"office-villa"} name={"office-villa"} />
                <span className="categorey-no">2,687</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                <FormCheckbox label={"Luxary Home"} id={"luxary-home"} name={"Luxary-home"} />
                <span className="categorey-no">1,853</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Studio"} id={"studio"} name={"studio"} />
                    <span className="categorey-no">893</span>
                </li>
            </ul>
            <hr />
            <h4 className="ltn__widget-title mb-[15px]">Amenities</h4>
            <ul>
                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Dishwasher"} id={"Dishwasher"} name={"Dishwasher"} />
                    <span className="categorey-no">3,924</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                <FormCheckbox label={"Floor Coverings"} id={"floor-coverings"} name={"floor-coverings"} />
                <span className="categorey-no">3,610</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Internet"} id={"internet"} name={"internet"} />
                    <span className="categorey-no">2,912</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Build Wardrobes"} id={"build-wardrobes"} name={"build-wardrobes"} />
                    <span className="categorey-no">2,687</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Supermarket"} id={"supermarket"} name={"supermarket"} />
                    <span className="categorey-no">1,853</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Kids Zone"} id={"kids-zone"} name={"kids-zone"} />
                    <span className="categorey-no">893</span>
                </li>
            </ul>
            <hr />
            <h4 className="ltn__widget-title mb-[15px]">Price Range</h4>
            <ul>
                <li className='flex items-center mb-[15px]'>
                <FormCheckbox label={"Low Budget"} id={"low-budget"} name={"low-budget"} />
                <span className="categorey-no">$5,000 - $10,000</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Medium"} id={"Medium"} name={"Medium"} />
                    <span className="categorey-no">$10,000 - $30,000</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"High Budget"} id={"high-budget"} name={"High-budget"} />
                    <span className="categorey-no">$30,000 Up</span>
                </li>
            </ul>
            <hr />
            <h4 className="ltn__widget-title mb-[15px]">Price Range</h4>
            <div>

            <Slider
              range
              step={1}
              defaultValue={[415000,2700500]}
              marks={marks}
              min={415000}
              max={2700500}
              onChange={onChange}
              onAfterChange={onAfterChange}
            />
            
            </div>
            <h4 className="ltn__widget-title mb-[15px]">Bed/bath</h4>
            <ul>
                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Single"} id={"single"} name={"single"} />
                    <span className="categorey-no">3,924</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Double"} id={"double"} name={"double"} />
                    <span className="categorey-no">3,610</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Up To 3"} id={"up-to-3"} name={"up-to-3"} />
                    <span className="categorey-no">2,912</span>
                </li>

                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Up To 5"} id={"up-to-5"} name={"up-to-5"} />
                    <span className="categorey-no">2,687</span>
                </li>
            </ul>
            <hr />
            <h4 className="ltn__widget-title mb-[15px]">Catagory</h4>
            <ul>
                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Buying"} id={"Buying"} name={"Buying"} />
                    <span className="categorey-no">3,924</span>
                </li>
                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Renting"} id={"Renting"} name={"Renting"} />
                    <span className="categorey-no">3,610</span>
                </li>
                <li className='flex items-center mb-[15px]'>
                    <FormCheckbox label={"Selling"} id={"Selling"} name={"Selling"} />
                    <span className="categorey-no">2,912</span>
                </li>
            </ul>
            </div>
           
        </aside>
        <div className={`${active['list-item'] ? "list-items " : "grid-items "}lg:col-span-9 bg-white p-3 md:p-6 rounded-[12px]`}
        >
            <EstateProducts />
            <div className="search-navigation-buttons flex">
              <button><FaAngleDoubleLeft /></button>
              <button className='active'>1</button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>10</button>
              <button><FaAngleDoubleRight /></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MarketSearchPage