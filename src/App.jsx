import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.css";
import MarketPlace from "./pages/marketPlace/MarketPlace";
import RealEstate from "./pages/marketPlace/RealEstate";
import AOS from "aos";
import "aos/dist/aos.css";
import MainPage from "./pages/PagesOutlet/Pages";
import MarketDashboard from "./components/marketPlaceComponents/Dashboard/MarketDashboard";
import Automotives from "./pages/marketPlace/Automotives";

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
            <Route path="/marketplace/realestates" element={<RealEstate />} />
            <Route path="/marketplace/automotives" element={<Automotives />} />
            <Route path="/marketplace/dashboard" element={<MarketDashboard />} />
          </Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
