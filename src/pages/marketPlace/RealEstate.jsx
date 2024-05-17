import React, { useEffect } from "react";
import './MarketPlace.css'
import MarketPlaceNavigation from "../../components/marketPlaceComponents/MarketPlaceNavigation";
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
import RealCard from "../../components/marketPlaceComponents/RealEstate/Items/RealCard";
import RealLandingForm from "../../components/marketPlaceComponents/RealEstate/Form/RealLandingForm";

const RealEstate = () => {
	return (
    <div className="real-estate-container !mt-[5rem]">
      <Hero
        title={"Real Estate"}
        svg={
          <svg
            className="w-[40px] inline"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path d="M16.923 15.02q-.154-.59-.6-1.1q-.446-.512-1.135-.766l-6.992-2.62q-.136-.05-.27-.06q-.134-.012-.307-.012H7v-2.34q0-.385.177-.743t.5-.575l4.885-3.479q.223-.159.458-.229t.478-.07t.49.07t.45.229l4.885 3.479q.323.217.5.575T20 8.12v6.898zM14.5 8.441q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m2 2q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m1.01 11.23q.198.055.482.048q.283-.007.48-.06L21 19.5q0-.696-.475-1.137q-.475-.44-1.179-.44h-5.158q-.498 0-1.02-.06t-.978-.22l-1.57-.526q-.162-.055-.237-.211t-.025-.315q.05-.14.202-.21t.313-.016l1.433.502q.407.146.893.217q.486.07 1.053.07h1.202q.283 0 .453-.162q.17-.161.17-.455q0-.389-.309-.81q-.308-.421-.716-.565l-6.021-2.21q-.137-.042-.273-.074t-.293-.032h-2.08v6.737zM2.385 19.922q0 .46.308.768q.309.309.769.309h.846q.46 0 .768-.309t.309-.768v-6q0-.46-.309-.768t-.768-.309h-.846q-.46 0-.769.309q-.308.308-.308.768z" />
          </svg>
        }
      >
        <RealLandingForm />
      </Hero>

      <Featured pageTitle={"Real Estates"}>
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"owner"}
          isFav={false}
        />
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
      </Featured>

      <Category pageTitle={"Real Estates"} />
      <SectionFour pageTitle={"Real Estates"} />

      <Latest pageTitle={"Real Estates"}>
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
      </Latest>

      <Location pageTitle={"Real Estates"}>
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
        />
      </Location>
    </div>
  );
};

export default RealEstate;
