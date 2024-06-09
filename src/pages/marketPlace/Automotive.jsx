import React, { useEffect } from "react";
import './MarketPlace.css'
import Hero from "../../components/marketPlaceComponents/LandingPage/HeroSection/Hero";
import Featured from "../../components/marketPlaceComponents/LandingPage/FeaturedSection/Featured";
import Category from "../../components/marketPlaceComponents/LandingPage/CategorySection/Category";
import SectionFour from "../../components/marketPlaceComponents/LandingPage/SectionFour/SectionFour";
import Latest from "../../components/marketPlaceComponents/LandingPage/LatestSection/Latest";
import Location from "../../components/marketPlaceComponents/LandingPage/LocationSection/Location";
import AutoCard from "../../components/marketPlaceComponents/Automotives/Items/AutoCard";
import AutoLandingForm from "../../components/marketPlaceComponents/Automotives/Form/AutoLandingForm";

const Automotive = () => {
	return (
    <div className="automotives-container mt-[3rem] md:!mt-[5rem]">
      <Hero
        title={"Automotive"}
        svg={
          <svg
            className="me-[5px] inline"
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
          >
            <path d="M14.42 7.5L16 11H8l1.42-3.5zM9 12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6-7v6c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4zm-3 7l-2.16-5c-.2-.58-.76-1-1.42-1h-5C8.76 6 8.2 6.42 8 7l-2 5v4c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1z" />
          </svg>
        }
      >
        <AutoLandingForm />
      </Hero>

      <Featured pageTitle={"Automotives"} link={"#"}>
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"owner"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"developer"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
      </Featured>

      <Category pageTitle={"Automotives"} link={"#"} />

      <SectionFour pageTitle={"Automotives"} />

      <Latest pageTitle={"Automotives"} link={"#"}>
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
      </Latest>

      <Location pageTitle={"Automotives"} link={"#"}>
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
        <AutoCard
          title={"BMW M6 Gran Coupe 2019"}
          location={"Cairo, El Maadi"}
          price={3500000}
          owner={"Agency"}
          isFav={false}
          carBrand={"BMW"}
          carModel={"M6"}
          carYear={"2019"}
        />
      </Location>
    </div>
  );
};

export default Automotive;
