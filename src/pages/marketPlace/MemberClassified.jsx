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
const MemberClassified = () => {
	return (
    <div className="member-classifieds-container">

      <Hero />
      <Featured>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={8500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={9500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={10500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={11500} isChecked={false} />
      </Featured>
      <Category />
      <SectionFour />
      <Latest>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={8500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={9500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={10500} isChecked={false} />
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={11500} isChecked={false} />
      </Latest>
      <Location>
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
