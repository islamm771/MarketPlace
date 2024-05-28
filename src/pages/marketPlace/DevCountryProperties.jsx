import React from "react";
import { FaRegStar } from "react-icons/fa";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiMiniArrowLongLeft } from "react-icons/hi2";

import Latest from "../../components/marketPlaceComponents/LandingPage/LatestSection/Latest";
import RealCard from "../../components/marketPlaceComponents/RealEstate/Items/RealCard";
import bg_img from "../../assests/marketplace/Properties/Hero/img-01.jpg";
import img_01 from "../../assests/marketplace/developer/LatestLunches/img-03.jpg";
import img_02 from "../../assests/marketplace/developer/LatestLunches/img-02.jpg";
import img_03 from "../../assests/marketplace/developer/LatestLunches/img-04.jpg";
import map_img from "../../assests/marketplace/Properties/Map/img-01.jpg"

const CountryProperties = () => {
  return (
    <div className="developer-country-properties-container mt-[3rem] md:!mt-[5rem]">
      <div className="hero-country-property">
        <img src={bg_img} alt="" />
        {/* <div className="marketplace-container">
          <div className="landing-hero-header-title mb-[50px]">
            <h1 className="text-white text-[50px] mb-[10px]">Properties</h1>
            <p className="text-white text-[20px] font-semibold">
              Explore Our Properties
            </p>
          </div>
        </div> */}
      </div>

      <div className="bg-white py-[4rem] lg:py-[6rem] mb-[25px]">
        <div className="marketplace-container">
          <div className="special-landing-heading">
            <span>A PLACE UNLIKE ANY OTHER</span>
            <h1 className="mb-[3rem] !text-[40px]">Soul</h1>
            <p className="md:w-[50%] mb-[2rem]">
              Soul Luxury Beach Resort, by Emaar Misr | EH, is a pioneering 580
              acres; that is located 30 KMs away from Marassi. It’s a place that
              instills a sense of belonging, inspiration, and peace amidst one
              of the world’s most stunning natural beach landscapes in the North
              Coast.
            </p>
            <p className="md:w-[50%]">
              Soul Luxury Beach Resort boast an unprecedented master plan
              featuring beach mansions and homes connected to nature, the
              unrivalled sea views of the Mediterranean, and the water front
              lagoons, lush green spaces and an array of unique amenities that
              cater to your every need.
            </p>
          </div>
        </div>
      </div>

      <Latest pageTitle={"Premium Properties"}>
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
          owner={"developer"}
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
          owner={"developer"}
          isFav={false}
        />
        <RealCard
          title={"vila in coral gables with pool, garden"}
          price={3500000}
          owner={"owner"}
          isFav={false}
        />
      </Latest>

      <div className="bg-white py-[4rem] lg:py-[6rem] mb-[25px]">
        <div className="marketplace-container">
          <div className="special-landing-heading">
            {/* <span>Country</span> */}
            <h1 className="mb-[15px]">Properties</h1>
            <p className="md:w-[50%]">
              Soul Luxury Beach Resort is home for an exclusive community
              offering 85% standalone villas with infinity terraces for
              uninterrupted views along with unique beach houses.
            </p>
          </div>

          <div className="grid md:!grid-cols-2 lg!grid-cols-3">
            <div className="developer-country-card">
              <div class="card_image-header">
                <div class="ribbon text-capitalize">
                  <span>
                    <FaRegStar className="inline me-1" />
                    featured
                  </span>
                </div>
                <img src={img_01} alt="" class="img-transition w-[100%]" />
              </div>

              <div class="card_image-body !p-0 !py-4">
                <h6 class="text-capitalize">
                  <a
                    href="/marketplace/realestate/search"
                    className="uppercase"
                  >
                    LOCANDA SERVICED RESIDENCE
                  </a>
                </h6>

                <p className="mb-[10px] uppercase">
                  UNVEILING A NEW ERA IN HOSPITALITY
                </p>

                <p className="">Serviced Residence</p>
              </div>
            </div>
            <div className="developer-country-card">
              <div class="card_image-header">
                <div class="ribbon text-capitalize">
                  <span>
                    <FaRegStar className="inline me-1" />
                    featured
                  </span>
                </div>
                <img src={img_02} alt="" class="img-transition w-[100%]" />
              </div>

              <div class="card_image-body !p-0 !py-4">
                <h6 class="text-capitalize">
                  <a
                    href="/marketplace/realestate/search"
                    className="uppercase"
                  >
                    Seaview
                  </a>
                </h6>

                <p className="mb-[10px] uppercase">Seaview</p>

                <p className="city">Villas</p>
              </div>
            </div>
            <div className="developer-country-card">
              <div class="card_image-header">
                <div class="ribbon text-capitalize">
                  <span>
                    <FaRegStar className="inline me-1" />
                    featured
                  </span>
                </div>
                <img src={img_03} alt="" class="img-transition w-[100%]" />
              </div>

              <div class="card_image-body !p-0 !py-4">
                <h6 class="text-capitalize">
                  <a
                    href="/marketplace/realestate/search"
                    className="uppercase"
                  >
                    HEIGHTS
                  </a>
                </h6>

                <p className="mb-[10px] uppercase">ELEVATED VIEWS</p>

                <p className="">Villas and townhouses</p>
              </div>
            </div>
            <div className="developer-country-card">
              <div class="card_image-header">
                <div class="ribbon text-capitalize">
                  <span>
                    <FaRegStar className="inline me-1" />
                    featured
                  </span>
                </div>
                <img src={img_01} alt="" class="img-transition w-[100%]" />
              </div>

              <div class="card_image-body !p-0 !py-4">
                <h6 class="text-capitalize">
                  <a
                    href="/marketplace/realestate/search"
                    className="uppercase"
                  >
                    LAGOONS
                  </a>
                </h6>

                <p className="mb-[10px] uppercase">LAGOONS</p>

                <p className="city">Villas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section bg-white py-[4rem] pb-[5rem] lg:py-[6rem] lg:pb-[8rem] mb-[25px]">
        <div className="marketplace-container">
          <div>
            <img src={map_img} alt="" />
          </div>

          <div className="flex gap-[3rem] justify-center mt-[5rem] mb-[3rem]">
            <div>
              <h3 className="text-[25px] mb-[10px] uppercase">10 MINS</h3>
              <p className="text-[14px] uppercase">FROM AL DABAA CORRIDOR</p>
            </div>
            <div>
              <h3 className="text-[25px] mb-[10px] uppercase">35 MINS</h3>
              <p className="text-[14px] uppercase">FROM MARASSI</p>
            </div>
          </div>

          <a
            className="btn-viewAll button secondary !block w-[250px] mx-auto"
            href=""
          >
            Register Interest
          </a>
        </div>
      </div>

      <div class="country-properties-sticky-bar">
        <div class="marketplace-container">
          <div class="grid !grid-cols-4">
            <div class="col-md-3 col-lg-3 d-none d-md-block">
              <a
                href="/marketplace/developer/country"
                class="mb-[6px] block w-fit"
              >
                <HiMiniArrowLongLeft className="inline" /> All
                Communities{" "}
              </a>
              <h5>Soul</h5>
            </div>
            <div class="col-md-3 col-lg-2 offset-lg-1 d-none d-md-block">
              <h4 className="mb-[6px]">Properties</h4>
              <p class="prop-dtl">Standalone Villas and beach houses</p>
            </div>
            <div class="col-md-3 col-lg-2 d-none d-md-block">
              <h4 className="">Prices From </h4>
              <a
                href="#"
                data-toggle="modal"
                data-target="#registerModal"
                data-formname="Register your Interest"
                class="link-clickable"
              >
                Click for prices
              </a>
            </div>
            <div class="col-12 col-md-3 col-lg-3 offset-lg-1 d-flex justify-content-end align-items-center">
              <a
                className="btn-viewAll button secondary !block w-[250px] mx-auto"
                href=""
              >
                Register Interest
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryProperties;
