import React, { useEffect, useRef, useState } from 'react'
import FormCheckbox from '../../components/ui/formCheckbox/FormCheckbox';
import EstateProducts from '../../components/marketPlaceComponents/Products/EstateProducts/Products';
import "./MarketPlace.css"
import {IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import FormInputwithIcon from '../../components/ui/formInputWithSearchIcon/FormInputwithIcon';
import { FaAngleDoubleLeft,FaAngleDoubleRight } from "react-icons/fa";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Slider } from 'antd';
import Dropdown from '../../components/ui/MySelect/Dropdown';

const Categories=[
  {id:1 ,value:"Category 1"},
  {id:2 ,value:"Category 2"},
  {id:3 ,value:"Category 3"},
  {id:4 ,value:"Category 4"},
  {id:5 ,value:"Category 5"}
]
const SubCategories=[
  {id:1 ,value:"SubCategory 1"},
  {id:2 ,value:"SubCategory 2"},
  {id:3 ,value:"SubCategory 3"},
  {id:4 ,value:"SubCategory 4"},
  {id:5 ,value:"SubCategory 5"}
]


const Countries=[
  {id:1 ,value:"Egypt"},
  {id:2 ,value:"France"},
  {id:3 ,value:"Germany"},
  {id:5 ,value:"Spain"}
]
const Cities={
  Egypt : [
    {id:1 ,value:"Cairo", count:3447},
    {id:2 ,value:"Alexandria", count:2477},
    {id:3 ,value:"Tanta", count:1051},
    {id:4 ,value:"Giza", count:1023},
  ],
  France : [
    {id:1 ,value:"Paris", count:3447},
    {id:2 ,value:"Lyon", count:2477},
    {id:3 ,value:"Marseille", count:1051},
    {id:4 ,value:"Nice", count:1023},
  ],
  Germany : [
    {id:1 ,value:"Berlin", count:3447},
    {id:2 ,value:"Hamburg", count:2477},
    {id:3 ,value:"Munich", count:1051},
    {id:4 ,value:"Frankfurt", count:1023},
  ],
  Spain : [
    {id:1 ,value:"Madrid", count:3447},
    {id:2 ,value:"Barcelona", count:2477},
    {id:3 ,value:"Seville", count:1051},
    {id:4 ,value:"Valencia", count:1023},
  ],
}


const Sorts=[
  {id:1 ,value:"Default Sorting"},
  {id:2 ,value:"Popularity"},
  {id:3 ,value:"New arrivals"},
  {id:4 ,value:"Latest"},
  {id:5 ,value:"Price: low to high"},
  {id:6 ,value:"Price: high to low"}
]

const marks = {
  415000: {
    label: <>4,150,00</>
  },
  2700500: {
    label: <>2,700,500</>,
  },
};

const AreaMarks = {
  10: {
    label: <>10</>
  },
  1000000: {
    label: <>1,000,000</>
  },
};


const MarketSearchPage = () => {
    const [active,setActive] = useState({'list-item':false,'grid-item' : true})
    const [sort , setSort] = useState(null)
    const [country , setCountry] = useState(null)
    const [category , setCategory] = useState(null)
    const [subcategory , setSubCategory] = useState(null)
    const dropSortRef = useRef(null);
    const dropCountryRef = useRef(null);
    const dropCategoryRef = useRef(null);
    const dropSubCategoryRef = useRef(null);

    const handleClick = (id) =>{
        setActive({[id]:true})
    }

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

        <div className="grid lg:!grid-cols-12">

          <aside className="search-sidebar lg:col-span-3 bg-white p-3 md:p-4 rounded-[12px]">
              {/* Advance Information widget */}
              <div className="widget ltn__menu-widget">

              <h4 className="ltn__widget-title mb-[15px]">Categories</h4>
              <ul className='grid'>
                <li ref={dropCategoryRef}> 
                  <Dropdown optionsArray={Categories} defaultValue={"Categories"} selectedValue={category} setValue={setCategory} dropRef={dropCategoryRef} />
                </li>
                <li ref={dropSubCategoryRef}>
                  <Dropdown optionsArray={SubCategories} defaultValue={"Sub-Categories"} selectedValue={subcategory} setValue={setSubCategory} dropRef={dropSubCategoryRef} />
                </li>
              </ul>
              <hr />

              <h4 className="ltn__widget-title mb-[15px]">Locations</h4>
              <ul className={`${country ? "gap-4" : "!gap-0"} grid`}>
                <li ref={dropCountryRef}> 
                  <Dropdown optionsArray={Countries} defaultValue={"Countries"} selectedValue={country} setValue={setCountry} dropRef={dropCountryRef} />
                </li>
                <li >
                  {country && <p>{country}</p>}

                  {country && 
                  <div className='mt-[8px] ms-[10px] flex flex-col gap-2'> 
                  {Cities[country].map( city  => ( <a href="#">{city.value} ({city.count})</a> ))} 
                  </div> }
                </li>
              </ul>
              <hr />

              <h4 className="ltn__widget-title mb-[15px]">Price</h4>
              <div className='price-filter-slider'>
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
              <hr />

              <h4 className="ltn__widget-title mb-[15px]">Down Payment</h4>
              <div className='downpay-filter-slider'>
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
              <hr />

              <h4 className="ltn__widget-title mb-[15px]">Area (m<sup>2</sup>)</h4>
              <div className='area-filter-slider'>
              <Slider
                range
                step={1}
                defaultValue={[10,1000000]}
                marks={AreaMarks}
                min={10}
                max={1000000}
                onChange={onChange}
                onAfterChange={onAfterChange}
              />
              </div>
              <hr />

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
              <h4 className="ltn__widget-title mb-[15px]">Level</h4>
              <ul>
                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"1"} id={"1"} name={"1"} />
                      <span className="categorey-no">3,924</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"2"} id={"2"} name={"2"} />
                      <span className="categorey-no">3,610</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"3"} id={"3"} name={"3"} />
                      <span className="categorey-no">2,912</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                  <FormCheckbox label={"4"} id={"4"} name={"4"} />
                  <span className="categorey-no">2,687</span>
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

              <h4 className="ltn__widget-title mb-[15px]">Bedroom</h4>
              <ul>
                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Single"} id={"single-bed"} name={"single"} />
                      <span className="categorey-no">3,924</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Double"} id={"double-bed"} name={"double"} />
                      <span className="categorey-no">3,610</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Up To 3"} id={"up-to-3-bed"} name={"up-to-3"} />
                      <span className="categorey-no">2,912</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Up To 5"} id={"up-to-5-bed"} name={"up-to-5"} />
                      <span className="categorey-no">2,687</span>
                  </li>
              </ul>
              <hr />

              <h4 className="ltn__widget-title mb-[15px]">Bathroom</h4>
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
              <h4 className="ltn__widget-title mb-[15px]">Payment Option</h4>
              <ul>
                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Cash or Installment"} id={"cash-install"} name={"single"} />
                      <span className="categorey-no">13,671</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Cash"} id={"cash"} name={"cash"} />
                      <span className="categorey-no">10,020</span>
                  </li>


                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Installment"} id={"installment"} name={"installment"} />
                      <span className="categorey-no">50,647</span>
                  </li>
              </ul>
              <hr />

              <h4 className="ltn__widget-title mb-[15px]">Delivery Date</h4>
              <ul>
                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Ready to move"} id={"ready-move"} name={"ready-move"} />
                      <span className="categorey-no">13,671</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"2027"} id={"2027"} name={"2027"} />
                      <span className="categorey-no">1,640</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"2026"} id={"2026"} name={"2026"} />
                      <span className="categorey-no">1,512</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"soon"} id={"soon"} name={"soon"} />
                      <span className="categorey-no">1,647</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"2025"} id={"2025"} name={"2025"} />
                      <span className="categorey-no">1,057</span>
                  </li>
              </ul>
              <hr />

              <h4 className="ltn__widget-title mb-[15px]">Delivery Term</h4>
              <ul>
                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Finished"} id={"Finished"} name={"Finished"} />
                      <span className="categorey-no">1,640</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Semi Finished"} id={"Semi-Finished"} name={"Semi-Finished"} />
                      <span className="categorey-no">1,512</span>
                  </li>
                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Not Yet"} id={"Not-Yet"} name={"Not-Yet"} />
                      <span className="categorey-no">1,647</span>
                  </li>

                  <li className='flex items-center mb-[15px]'>
                      <FormCheckbox label={"Core & Shell"} id={"Core-Shell"} name={"Core-Shell"} />
                      <span className="categorey-no">1,057</span>
                  </li>
              </ul>

              </div>
            
          </aside>

          <div className='lg:col-span-9'>
            <nav className='bg-white rounded-[12px] mb-[15px] p-[20px]'> 
                <ul class="grid !grid-cols-6 !items-center" role="tablist">

                  <li className="search-bar col-span-6 lg:col-span-3">
                    <FormInputwithIcon label={"Search for..."} id={"product-search"} />
                  </li>
                  <li class="sort-by relative w-[200px] lg:w-[250px] col-span-3 lg:col-span-2" ref={dropSortRef}>
                      <Dropdown optionsArray={Sorts} defaultValue={"Sort By"} selectedValue={sort} setValue={setSort} dropRef={dropSortRef} />
                  </li>
                  <li class="view-item flex justify-end gap-0 col-span-3 lg:col-span-1">
                    <span className='cursor-pointer' onClick={() => handleClick("list-item")}>
                        <FaThList className={`${active['list-item'] ? 'active' : ''}`} id='list-item'/>
                        </span>
                    <span className='cursor-pointer' onClick={() => handleClick("grid-item")}>
                      <IoGridSharp className={`${active['grid-item'] ? 'active' : ''}`} id='grid-item'/>
                      </span>
                  </li>
                </ul>
            </nav>
          
            <div className={`${active['list-item'] ? "list-items " : "grid-items "}`}
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
    </div>
  );
}

export default MarketSearchPage