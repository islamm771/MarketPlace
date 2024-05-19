import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.css";
import MarketPlace from "./pages/marketPlace/MarketPlace";
import RealEstate from "./pages/marketPlace/RealEstate";
import AOS from "aos";
import "aos/dist/aos.css";
import MainPage from "./pages/PagesOutlet/Pages";
import MarketDashboard from "./components/marketPlaceComponents/Dashboard/MarketDashboard";
import Automotive from "./pages/marketPlace/Automotive";
import { useState } from "react";
import MemberClassified from "./pages/marketPlace/MemberClassified";
import MarketSearchPage from "./pages/marketPlace/MarketSearch";

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
            <Route path="/marketplace/memberclassifieds" element={<MemberClassified />} />
            <Route path="/marketplace/realestates" element={<RealEstate />} />
            <Route path="/marketplace/automotives" element={<Automotive />} />
            <Route path="/marketplace/dashboard" element={<MarketDashboard />} />
            <Route path="/marketplace/search" element={<MarketSearchPage />} />
          </Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
