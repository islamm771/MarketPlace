import React, { useEffect } from "react";
import './MarketPlace.css'
import Hero from "../../components/marketPlaceComponents/LandingPage/HeroSection/Hero";
import Featured from "../../components/marketPlaceComponents/LandingPage/FeaturedSection/Featured";
import Category from "../../components/marketPlaceComponents/LandingPage/CategorySection/Category";
import SectionFour from "../../components/marketPlaceComponents/LandingPage/SectionFour/SectionFour";
import Latest from "../../components/marketPlaceComponents/LandingPage/LatestSection/Latest";
import Location from "../../components/marketPlaceComponents/LandingPage/LocationSection/Location";
import AutoCard from "../../components/marketPlaceComponents/Automotives/Items/AutoCard";

const Automotive = () => {
	return (
    <div className="automotives-container">

      <Hero />

      <Featured>
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"owner"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"developer"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
      </Featured>

      <Category />
      <SectionFour />

      <Latest>
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
      </Latest>
      
      <Location>
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
        <AutoCard 
          title={"BMW M6 Gran Coupe 2019"} 
          location={"Cairo, El Maadi"}
          price={3500000} 
          owner={"Agency"} 
          isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
          />
      </Location>
    </div>
  );
};

export default Automotive;
