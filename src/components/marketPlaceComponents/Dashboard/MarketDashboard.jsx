import React from "react";
import "./MarketDashboard.css";
import { useState } from "react";
import MemberForm from "../MemberClassifieds/Form/MembeFrom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import SideBarDash from "./SideBarDashboard/SideBarDash";
import RealForm from "../RealEstate/Form/RealForm";
import RealFav from "../RealEstate/Favourites/RealFav";
import FavList from "./FavList/FavList";
import MemberFav from "../MemberClassifieds/Favourites/MemberFav";
import SoldPurchased from "./Sold-Purchased/SoldPurchased";
import RealSold from "../RealEstate/Sold-Purchased/RealSold";
import RealPurchased from "../RealEstate/Sold-Purchased/RealPurchased";
import MyListings from "./MyLisitngs/MyListings";
import RealListings from "../RealEstate/Listings/RealListings";

const MarketDashboard = () => {
  const [activeButton , setActiveButton] = useState({
    title:"Marketplace",
    parent:"Main Dashboard"
  })
  const [buttonStates, setButtonStates] = useState({
    main: true,
    member: false,
    real: false,
    auto: false,
  });

  return (
    <div className="dashboard-container">
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
      {/* <div class="section-banner">
            <img class="section-banner-icon" src={imghub} alt="accounthub-icon" />
            <p class="section-banner-title">Dashboard Hub</p>
            <p class="section-banner-text">Add Member Classifieds , Real State , Automotives</p>
      </div> */}
      <div className="grid !grid-cols-12">
        <SideBarDash activeButton={activeButton} setActiveButton={setActiveButton} buttonStates={buttonStates} setButtonStates={setButtonStates} />

        <div className="account-hub-content col-span-12 xl:col-span-9">
          <div class="section-header !mb-[5px]">
            <div class="section-header-info">
              <p class="section-pretitle">{activeButton.parent}</p>
              <h2 class="section-title">{activeButton.title}</h2>
            </div>
          </div>
          
          <div class="Dashform-box">
            <div class="Dashform-box-content">

              {/* Main Dashboard Contents */}
              {activeButton.parent === "Main Dashboard" && (
              <>
                {activeButton.title === "Marketplace" && <div>Main Dashboard</div>}
              </>
              )}

              {/* Member Classifieds Contents */}
              {activeButton.parent === "Member Classifieds" && (
                <>
                  {activeButton.title === "Dashboard" && <div>Dashboard</div>}
                  {activeButton.title === "My Listings" && <div>My List</div>}
                  {activeButton.title === "Add Listing" && <><MemberForm /></>}
                  {activeButton.title === "Classifieds Chat" && <div>Classifieds Chat</div>}
                  {activeButton.title === "Fav List" && <FavList> <MemberFav /> </FavList>}
                  {activeButton.title === "Sold / Purchased" && <SoldPurchased></SoldPurchased>}
                </>
              )}

              {/* Real Estate Contents */}
              {activeButton.parent === "Real Estate" && (
                  <>
                    {activeButton.title === "Dashboard" && <div>Dashboard</div>}
                    {activeButton.title === "My Properties" && <MyListings><RealListings/></MyListings>}
                    {activeButton.title === "Add Property" && <><RealForm /></>}
                    {activeButton.title === "Property Chat" && <div>Classifieds Chat</div>}
                    {activeButton.title === "Fav List" && <FavList> <RealFav /> </FavList>}
                    {activeButton.title === "Sold / Purchased" && <SoldPurchased sold={<RealSold />} purchased={<RealPurchased />}  />}
                  </>
              )}

              {/* Automotive Contents */}
              {activeButton.parent === "Automotives" && (
                  <>
                    {activeButton.title === "Dashboard" && <div>Dashboard</div>}
                    {activeButton.title === "My Automotives" && <div>My List</div>}
                    {activeButton.title === "Add Automotives" && <div><MemberForm /></div>}
                    {activeButton.title === "Automotives Chat" && <div>Classifieds Chat</div>}
                    {activeButton.title === "Fav List" && <div>Fav List</div>}
                    {activeButton.title === "Sold / Purchased" && <SoldPurchased></SoldPurchased>}
                  </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDashboard;
