import React, { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import "./FloorPlans.css";
import img_01 from "../../../../assests/marketplace/Properties/Floor/1.png";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const floors = [
  {
    id: 1,
    name: "floor one",
    describtion:
      "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    img: img_01,
  },
  {
    id: 2,
    name: "floor two",
    describtion:
      "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    img: img_01,
  },
  {
    id: 3,
    name: "floor three",
    describtion:
      "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    img: img_01,
  },
  {
    id: 4,
    name: "floor four",
    describtion:
      "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    img: img_01,
  },
];

const FloorPlans = () => {
  const [isOpened , setIsOpened] = useState(false)
  const [isactive, setIsActive] = useState(true);
  const [activeFloor, setActiveFloor] = useState(1);
  const imageUrl = img_01; // Replace with actual image URL
  const thumbnailUrl = img_01; // Replace with actual thumbnail URL
  const [floor, setFloor] = useState(
    floors.filter((floor) => floor.id == 1)[0]
  );
  const handleClick = (id) => {
    setActiveFloor(id);
    setFloor(floors.filter((floor) => floor.id == id)[0]);
  };

  const handleShow = () => {
    setIsOpened(!isOpened);
  };
  const renderFloorTabs = floors.map((fl) => (
    <li
      className={`${activeFloor == fl.id ? "active" : ""}`}
      key={fl.id}
      onClick={() => {
        handleClick(fl.id);
      }}
    >
      {fl.name}
    </li>
  ));
  return (
    <div className="property-details-floor bg-white mb-[15px]">
      <div
        className="floor-header relative cursor-pointer"
        onClick={() => setIsActive(!isactive)}
      >
        <h3 className="text-[25px] capitalize">Floor Plans</h3>
        <span className="absolute top-[7px] right-0 text-[#fd6729]">
          {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
        </span>
      </div>

      {isactive && (
        <div className="details-floor-plans mt-[30px]">
          <nav className="floor-plans-nav">
            <ul className="">{renderFloorTabs}</ul>
          </nav>
          <div className="floor-plans-content">
            <div className="grid lg:!grid-cols-12">
              <div className="lg:col-span-7">
              <Zoom>
                <img
                  src={thumbnailUrl}
                  alt="Example"
                  style={{cursor: 'pointer' }}
                />
              </Zoom>

              </div>
              <div className="apartments-plan-info lg:col-span-5">
                <h2>{floor.name}</h2>
                <p>{floor.describtion}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorPlans;