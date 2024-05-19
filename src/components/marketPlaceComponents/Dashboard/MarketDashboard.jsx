import React, { useEffect, useRef } from "react";
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
import AutoListings from "../Automotives/Listings/AutoListings";
import AutoFav from "../Automotives/Favourites/AutoFav";
import AutoSold from "../Automotives/Sold-Purchased/AutoSold";
import AutoPurchased from "../Automotives/Sold-Purchased/AutoPurchased";
import MemberListings from "../MemberClassifieds/Listings/MemberListings";
import MemberSold from "../MemberClassifieds/Sold-Purchased/MemberSold";
import MemberPurchased from "../MemberClassifieds/Sold-Purchased/AutoPurchased";
import { useSelector } from "react-redux";
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
  const dashboradContent = useRef(null)
  

  const activemarketplacetab = useSelector( state => state.marketplacetabs.activeTabSlice )

  useEffect( ()=>{
    
    // RealForm
    if(activemarketplacetab == 2){
      setActiveButton({title:"Add Property" , parent:"Real Estate"})

      const copyState = {...buttonStates}

      Object.keys(copyState).forEach( key =>{
          copyState[key] = false
      } )

      copyState['real'] = !buttonStates['real']
      setButtonStates(copyState)
    }

    // MemberForm
    if(activemarketplacetab == 1){
      setActiveButton({title:"Add Listing" , parent:"Member Classified"})

      const copyState = {...buttonStates}

      Object.keys(copyState).forEach( key =>{
          copyState[key] = false
      } )

      copyState['member'] = !buttonStates['member']
      setButtonStates(copyState)
    }

    // AutomotiveForm
    if(activemarketplacetab == 3){
      setActiveButton({title:"Add Automotive" , parent:"Automotive"})

      const copyState = {...buttonStates}

      Object.keys(copyState).forEach( key =>{
          copyState[key] = false
      } )

      copyState['auto'] = !buttonStates['auto']
      setButtonStates(copyState)
    }


    // RealForm
  if(activemarketplacetab == 2){
    setActiveButton({title:"Add Property" , parent:"Real Estate"})

    const copyState = {...buttonStates}

    Object.keys(copyState).forEach( key =>{
        copyState[key] = false
    } )

    copyState['real'] = !buttonStates['real']
    setButtonStates(copyState)
  }

  // MemberForm
  if(activemarketplacetab == 1){
    setActiveButton({title:"Add Listing" , parent:"Member Classified"})

    const copyState = {...buttonStates}

    Object.keys(copyState).forEach( key =>{
        copyState[key] = false
    } )

    copyState['member'] = !buttonStates['member']
    setButtonStates(copyState)
  }

  // Scroll to Form
  if(dashboradContent.current){
    window.scrollTo(0,dashboradContent.current.offsetTop-90)
  } 

  },[activemarketplacetab] ) 
  
  return (
    <div className="marketplace-dashboard !mt-[6rem]">
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
      
      <div className="grid !grid-cols-12">
        <SideBarDash
         activeButton={activeButton} setActiveButton={setActiveButton} 
         buttonStates={buttonStates} setButtonStates={setButtonStates}
         dashboardContent={dashboradContent} />

        <div className="account-hub-content col-span-12 xl:col-span-9" ref={dashboradContent}>
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
              {activeButton.parent === "Member Classified" && (
                <>
                  {activeButton.title === "Dashboard" && <div>Dashboard</div>}
                  {activeButton.title === "My Listings" && <MyListings><MemberListings/></MyListings>}
                  {activeButton.title === "Add Listing" && <><MemberForm /></>}
                  {activeButton.title === "Classifieds Chat" && <div>Classifieds Chat</div>}
                  {activeButton.title === "Fav List" && <FavList> <MemberFav /> </FavList>}
                  {activeButton.title === "Sold / Purchased" && <SoldPurchased sold={<MemberSold />} purchased={<MemberPurchased />} />}
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
              {activeButton.parent === "Automotive" && (
                  <>
                    {activeButton.title === "Dashboard" && <div>Dashboard</div>}
                    {activeButton.title === "My Automotives" && <MyListings><AutoListings /></MyListings>}
                    {activeButton.title === "Add Automotive" && <div>Automotive Form</div>}
                    {activeButton.title === "Automotives Chat" && <div>Classifieds Chat</div>}
                    {activeButton.title === "Fav List" && <FavList> <AutoFav /> </FavList>}
                    {activeButton.title === "Sold / Purchased" && <SoldPurchased sold={<AutoSold />} purchased={<AutoPurchased />} />}
                  </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MarketDashboard;
