import React, { useEffect, useRef, useState } from "react";
import FormCheckbox from "../../components/ui/formCheckbox/FormCheckbox";
import EstateProducts from "../../components/marketPlaceComponents/Products/EstateProducts/Products";
import "./MarketPlace.css";
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import FormInputwithIcon from "../../components/ui/formInputWithSearchIcon/FormInputwithIcon";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Slider } from "antd";
import Dropdown from "../../components/ui/MySelect/Dropdown";
import ClassifiedsProducts from "../../components/marketPlaceComponents/Products/ClassifiedProducts/Products";

const Categories = [
  { id: 1, value: "Category 1" },
  { id: 2, value: "Category 2" },
  { id: 3, value: "Category 3" },
  { id: 4, value: "Category 4" },
  { id: 5, value: "Category 5" },
];
const SubCategories = [
  { id: 1, value: "SubCategory 1" },
  { id: 2, value: "SubCategory 2" },
  { id: 3, value: "SubCategory 3" },
  { id: 4, value: "SubCategory 4" },
  { id: 5, value: "SubCategory 5" },
];

const Countries = [
  { id: 1, value: "Egypt" },
  { id: 2, value: "France" },
  { id: 3, value: "Germany" },
  { id: 5, value: "Spain" },
];

const Cities = {
  Egypt: [
    { id: 1, value: "Cairo", count: 3447 },
    { id: 2, value: "Alexandria", count: 2477 },
    { id: 3, value: "Tanta", count: 1051 },
    { id: 4, value: "Giza", count: 1023 },
  ],
  France: [
    { id: 1, value: "Paris", count: 3447 },
    { id: 2, value: "Lyon", count: 2477 },
    { id: 3, value: "Marseille", count: 1051 },
    { id: 4, value: "Nice", count: 1023 },
  ],
  Germany: [
    { id: 1, value: "Berlin", count: 3447 },
    { id: 2, value: "Hamburg", count: 2477 },
    { id: 3, value: "Munich", count: 1051 },
    { id: 4, value: "Frankfurt", count: 1023 },
  ],
  Spain: [
    { id: 1, value: "Madrid", count: 3447 },
    { id: 2, value: "Barcelona", count: 2477 },
    { id: 3, value: "Seville", count: 1051 },
    { id: 4, value: "Valencia", count: 1023 },
  ],
};

const Providers = [
  { id: 1, value: "All" },
  { id: 2, value: "Agency" },
  { id: 3, value: "Developer" },
  { id: 4, value: "Owner" },
];

const Developers = [
  { id: 1, value: "Dev 1" },
  { id: 2, value: "Dev 2" },
  { id: 3, value: "Dev 3" },
  { id: 4, value: "Dev 4" },
  { id: 5, value: "Dev 5" },
];

const Sorts = [
  { id: 1, value: "Featured" },
  { id: 2, value: "Newest" },
  { id: 4, value: "Latest" },
  { id: 5, value: "Price (low)" },
  { id: 6, value: "Price (high)" },
  { id: 7, value: "Beds (least)" },
  { id: 8, value: "Beds (most)" },
];

const marks = {
  20: {
    label: <>20 KM</>,
  },
  100000: {
    label: <>100,000 KM</>,
  },
};

const AreaMarks = {
  10: {
    label: <>10</>,
  },
  1000000: {
    label: <>1,000,000</>,
  },
};

const Communities = [
  {
    id: 1,
    value: "Soul",
    compounds: [
      {
        id: 1,
        value: "Locanda",
      },
      {
        id: 2,
        value: "Sea view",
      },
      {
        id: 3,
        value: "Heights",
      },
      {
        id: 4,
        value: "Lagoons",
      },
    ],
  },
  {
    id: 2,
    value: "Bellevie",
    compounds: [
      {
        id: 1,
        value: "Plaza residence",
      },
      {
        id: 2,
        value: "Fields Villas",
      },
      {
        id: 3,
        value: "Lake Villas",
      },
      {
        id: 4,
        value: "The town center",
      },
    ],
  },
  {
    id: 3,
    value: "Marassi",
    compounds: [
      {
        id: 1,
        value: "Locanda",
      },
      {
        id: 1,
        value: "Sea view",
      },
      {
        id: 1,
        value: "Heights",
      },
      {
        id: 1,
        value: "Lagoons",
      },
    ],
  },
  {
    id: 4,
    value: "Cairo uptown",
    compounds: [
      {
        id: 1,
        value: "Locanda",
      },
      {
        id: 1,
        value: "Sea view",
      },
      {
        id: 1,
        value: "Heights",
      },
      {
        id: 1,
        value: "Lagoons",
      },
    ],
  },
];

const ClassifiedSearch = () => {
  const [active, setActive] = useState({
    "list-item": false,
    "grid-item": true,
  });

  // Start Dropdown States
  const [sort, setSort] = useState(null);
  const [country, setCountry] = useState(null);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubCategory] = useState(null);
  const [provider, setProvider] = useState(null);
  const [developer, setDeveloper] = useState(null);
  const [community, setCommunity] = useState(null);
  const [compound , setCompound] = useState(null)
  // Start Reference
  const dropSortRef = useRef(null);
  const dropCountryRef = useRef(null);
  const dropCategoryRef = useRef(null);
  const dropSubCategoryRef = useRef(null);
  const dropProviderRef = useRef(null);
  const dropDeveloperRef = useRef(null);
  const dropCommunityRef = useRef(null);
  const dropCompoundRef = useRef(null);

  // Start Handelers
  const handleClick = (id) => {
    setActive({ [id]: true });
  };
  function onChange(value) {
    console.log("onChange: ", value);
  }
  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
  }

  useEffect( ()=>{
    setCompound(null)
  }, [community] )


  return (
    <div className="search-page-container !my-[6rem]">
      <div className="swiper-container mb-[50px]">
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
        <span>Member Classifieds</span>
        <h1>Find Products in Egypt</h1>
      </div>

      <div className="grid lg:!grid-cols-12">
        <aside className="search-sidebar lg:col-span-3 bg-white p-3 md:p-4 rounded-[12px]">
          {/* Advance Information widget */}
          <div className="widget ltn__menu-widget">
            <h4 className="ltn__widget-title mb-[15px]">Categories</h4>
            <ul className="grid">
              <li ref={dropCategoryRef}>
                <Dropdown
                  optionsArray={Categories}
                  defaultValue={"Categories"}
                  selectedValue={category}
                  setValue={setCategory}
                  dropRef={dropCategoryRef}
                />
              </li>
              <li ref={dropSubCategoryRef}>
                <Dropdown
                  optionsArray={SubCategories}
                  defaultValue={"Sub-Categories"}
                  selectedValue={subcategory}
                  setValue={setSubCategory}
                  dropRef={dropSubCategoryRef}
                />
              </li>
            </ul>
            <hr />

            <h4 className="ltn__widget-title mb-[15px]">Brands</h4>
            <ul>
              <li className="flex items-center mb-[15px]">
                <FormCheckbox label={"Brand 1"} id={"Brand 1"} name={"Brand 1"} />
                <a className="categorey-no" href="#">
                  893
                </a>
              </li>
              <li className="flex items-center mb-[15px]">
                <FormCheckbox label={"Brand 2"} id={"Brand 2"} name={"Brand 2"} />
                <a className="categorey-no" href="#">
                  648
                </a>
              </li>
              <li className="flex items-center mb-[15px]">
                <FormCheckbox label={"Brand 3"} id={"Brand 3"} name={"Brand 3"} />
                <a className="categorey-no" href="#">
                  248
                </a>
              </li>
              <li className="flex items-center mb-[15px]">
                <FormCheckbox label={"Brand 4"} id={"Brand 4"} name={"Brand 4"} />
                <a className="categorey-no" href="#">
                  591
                </a>
              </li>
            </ul>
            <hr />

            <h4 className="ltn__widget-title mb-[15px]">Locations</h4>
            <ul className={`${country ? "gap-4" : "!gap-0"} grid`}>
              <li ref={dropCountryRef}>
                <Dropdown
                  optionsArray={Countries}
                  defaultValue={"Countries"}
                  selectedValue={country}
                  setValue={setCountry}
                  dropRef={dropCountryRef}
                />
              </li>
              <li>
                {country && <p>{country}</p>}

                {country && (
                  <div className="mt-[8px] ms-[10px] flex flex-col gap-2">
                    {Cities[country].map((city) => (
                      <a className="flex justify-between font-[600]" href="#">
                        {city.value}
                        <span className="categorey-no">{city.count}</span>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            </ul>
            <hr />

            <h4 className="ltn__widget-title mb-[15px]">Location</h4>
            <div className="price-filter-slider">
              <Slider
                step={20}
                defaultValue={20}
                marks={marks}
                min={20}
                max={100000}
                onChange={onChange}
                onAfterChange={onAfterChange}
              />
            </div>
            <hr />

            <h4 className="ltn__widget-title mb-[15px]">Product Status</h4>
            <ul>
              <li className="flex items-center mb-[15px]">
                <FormCheckbox label={"New"} id={"New"} name={"New"} />
                <a className="categorey-no" href="#">
                  893
                </a>
              </li>
              <li className="flex items-center mb-[15px]">
                <FormCheckbox label={"Used"} id={"Used"} name={"Used"} />
                <a className="categorey-no" href="#">
                  893
                </a>
              </li>
            </ul>
            
          </div>
        </aside>

        <div className="lg:col-span-9">
          <nav className="bg-white rounded-[12px] mb-[15px] p-[20px]">
            <ul class="grid !grid-cols-6 !items-center" role="tablist">
              <li className="search-bar col-span-6 lg:col-span-3">
                <FormInputwithIcon
                  label={"Search for..."}
                  id={"product-search"}
                />
              </li>
              <li
                class="sort-by relative w-[200px] lg:w-[250px] col-span-3 lg:col-span-2"
                ref={dropSortRef}
              >
                <Dropdown
                  optionsArray={Sorts}
                  defaultValue={"Sort By"}
                  selectedValue={sort}
                  setValue={setSort}
                  dropRef={dropSortRef}
                />
              </li>
              <li class="view-item flex justify-end gap-0 col-span-3 lg:col-span-1">
                <span
                  className="cursor-pointer"
                  onClick={() => handleClick("list-item")}
                >
                  <FaThList
                    className={`${active["list-item"] ? "active" : ""}`}
                    id="list-item"
                  />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => handleClick("grid-item")}
                >
                  <IoGridSharp
                    className={`${active["grid-item"] ? "active" : ""}`}
                    id="grid-item"
                  />
                </span>
              </li>
            </ul>
          </nav>

          <div
            className={`${active["list-item"] ? "list-items " : "grid-items "}`}
          >
            <ClassifiedsProducts />
            <div className="search-navigation-buttons flex">
              <button>
                <FaAngleDoubleLeft />
              </button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>10</button>
              <button>
                <FaAngleDoubleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassifiedSearch;
