import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.css";
import MarketPlace from "./pages/marketPlace/MarketPlace";
import RealEstate from "./pages/marketPlace/RealEstate";
import RealEstateSearch from "./pages/marketPlace/RealEstateSearch";
import AOS from "aos";
import "aos/dist/aos.css";
import MainPage from "./pages/PagesOutlet/Pages";
import MarketDashboard from "./components/marketPlaceComponents/Dashboard/MarketDashboard";
import Automotive from "./pages/marketPlace/Automotive";
import MemberClassified from "./pages/marketPlace/MemberClassified";
import MarketDeveloperPage from "./pages/marketPlace/Developer";
import DevCountry from "./pages/marketPlace/DevCountry";
import CountryProperties from "./pages/marketPlace/DevCountryProperties";
import PropertyDetails from "./pages/marketPlace/PropertyDetails";
import ClassifiedDetails from "./pages/marketPlace/ClassifiedDetails";
import ClassifiedSearch from "./pages/marketPlace/ClassifiedSearch";

function App() {
  AOS.init();
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            handleActiveColor: "#fd6729",
            dotBorderColor: "#fd6729",
            handleColor: "#fd6729",
            trackBg: "#fd6729",
            trackHoverBg: "#fd6729",
          },
          Input: {
            hoverBorderColor: "#fd6729",
            activeBorderColor: "#fd6729",
            activeShadow: "none",
          },
        },
      }}
    >
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainPage />}
          >
            <Route path="/" element={<MarketPlace />} />
            <Route path="/marketplace/dashboard" element={<MarketDashboard />} />

            <Route path="/marketplace/memberclassifieds" element={<MemberClassified />} />
            <Route path="/marketplace/memberclassifieds/details" element={<ClassifiedDetails />} />
            <Route path="/marketplace/memberclassifieds/search" element={<ClassifiedSearch />} />

            <Route path="/marketplace/realestates" element={<RealEstate />} />
            <Route path="/marketplace/realestates/search" element={<RealEstateSearch />} />
            <Route path="/marketplace/realestates/property" element={<PropertyDetails />} />
            
            <Route path="/marketplace/developer" element={<MarketDeveloperPage />} />
            <Route path="/marketplace/developer/country" element={<DevCountry />} />
            <Route path="/marketplace/developer/country/communitiy" element={<CountryProperties />} />

            <Route path="/marketplace/automotives" element={<Automotive />} />
          </Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
