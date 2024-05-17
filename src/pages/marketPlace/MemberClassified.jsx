import React, { useEffect } from "react";
import './MarketPlace.css'
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Hero from "../../components/marketPlaceComponents/LandingPage/HeroSection/Hero";
import Featured from "../../components/marketPlaceComponents/LandingPage/FeaturedSection/Featured";
import Category from "../../components/marketPlaceComponents/LandingPage/CategorySection/Category";
import SectionFour from "../../components/marketPlaceComponents/LandingPage/SectionFour/SectionFour";
import Latest from "../../components/marketPlaceComponents/LandingPage/LatestSection/Latest";
import Location from "../../components/marketPlaceComponents/LandingPage/LocationSection/Location";
import MemberCard from "../../components/marketPlaceComponents/MemberClassifieds/Items/MemberCard"
import MemberLandingForm from "../../components/marketPlaceComponents/MemberClassifieds/Form/MemberLandingForm";
const MemberClassified = () => {
	return (
    <div className="member-classifieds-container">

      <Hero
      title={"Classiefieds"}
      svg={
        <svg
        className="w-[40px] inline"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM5 5h4v4H5zm16 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 0h4v4h-4zm-6 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm4 2a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1-1-1"
          />
        </g>
        </svg>
      }
      >
          <MemberLandingForm /> 
      </Hero>
      <Featured pageTitle={"Member Classifieds"}>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={8500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={9500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={10500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={11500} isChecked={false} />
      </Featured>

      <Category pageTitle={"Member Classifieds"} />

      <SectionFour pageTitle={"Member Classifieds"} />

      <Latest pageTitle={"Member Classifieds"}>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={8500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={9500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={10500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={11500} isChecked={false} />
      </Latest>

      <Location pageTitle={"Member Classifieds"}>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={8500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={9500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={10500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={11500} isChecked={false} />
      </Location>
    </div>
  );
};

export default MemberClassified;
