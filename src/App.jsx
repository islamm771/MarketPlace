import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.css";

import MarketPlace from "./pages/marketPlace/MarketPlace";
import AOS from "aos";
import "aos/dist/aos.css";
import MainPage from "./pages/PagesOutlet/Pages";

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
            <Route path="/marketplace" element={<MarketPlace />} />
          </Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
