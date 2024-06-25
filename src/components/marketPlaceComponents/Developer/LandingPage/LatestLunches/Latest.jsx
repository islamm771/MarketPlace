import React from "react";
import img_01 from "../../../../../assests/marketplace/developer/LatestLunches/img-01.jpg";
import img_02 from "../../../../../assests/marketplace/developer/LatestLunches/img-02.jpg";
import img_03 from "../../../../../assests/marketplace/developer/LatestLunches/img-03.jpg";
import img_04 from "../../../../../assests/marketplace/developer/LatestLunches/img-04.jpg";
import img_05 from "../../../../../assests/marketplace/developer/LatestLunches/img-05.jpg";

import "./Latest.css"

const LatestLunches = () => {
  return (
    <div className="latest-lunches-section bg-white py-[4rem] lg:py-[6rem] mb-[25px]">
      <div className="marketplace-container">
        <div className="grid lg:!grid-cols-12">
          <div className="lg:col-span-4">
            <div className="latestlunches-heading special-landing-heading">
              <span>Properties</span>
              <h1 className="">latest Lunches</h1>
              <p className="my-[30px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae perspiciatis, reprehenderit iure aspernatur quaerat
                minus quibusdam dignissimos deleniti repudiandae commodi
                assumenda, ipsum dolores temporibus quasi dicta cumque quo
                tempore excepturi!
              </p>
              <a className="btn-viewAll button secondary w-[250px]" href="">View All Properties</a>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid md:!grid-cols-12 !gap-5">

                <div className="md:col-span-6">
                    <div class="prop-block mb-[20px]">
                    <div class="prop-block-img">
                        <a href="#">
                        <img className="w-[100%] object-cover" src={img_01} alt="" />
                        </a>
                    </div>
                    <section className="prop-title">
                        <a href="#" class="prop-name">
                        Haven Villas
                        </a>
                        <span>Egypt</span>
                        <span class="comm-name">Cairo Gate</span>
                    </section>
                    </div>
                    <div class="prop-block mb-[20px]">
                    <div class="prop-block-img">
                        <a href="#">
                        <img src={img_05} alt="" />
                        </a>
                    </div>
                    <section className="prop-title">
                        <a href="#" class="prop-name">
                        Haven Villas
                        </a>
                        <span>Egypt</span>
                        <span class="comm-name">Cairo Gate</span>
                    </section>
                    </div>
                </div>

                <div className="md:col-span-6">
                    <div class="prop-block mb-[20px]">
                    <div class="prop-block-img">
                        <a href="#">
                        <img src={img_04} alt="" />
                        </a>
                    </div>
                    <section className="prop-title">
                        <a href="#" class="prop-name">
                        Haven Villas
                        </a>
                        <span>Egypt</span>
                        <span class="comm-name">Cairo Gate</span>
                    </section>
                    </div>
                    <div class="prop-block mb-[20px]">
                    <div class="prop-block-img">
                        <a href="#">
                        <img src={img_02} alt="" />
                        </a>
                    </div>
                    <section className="prop-title">
                        <a href="#" class="prop-name">
                        Haven Villas
                        </a>
                        <span>Egypt</span>
                        <span class="comm-name">Cairo Gate</span>
                    </section>
                    </div>
                    <div class="prop-block mb-[20px]">
                    <div class="prop-block-img">
                        <a href="#">
                        <img src={img_03} alt="" />
                        </a>
                    </div>
                    <section className="prop-title">
                        <a href="#" class="prop-name">
                        Haven Villas
                        </a>
                        <span>Egypt</span>
                        <span class="comm-name">Cairo Gate</span>
                    </section>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestLunches;
