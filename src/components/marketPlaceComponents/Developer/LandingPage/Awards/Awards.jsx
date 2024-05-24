import React, { useState } from "react";
import { FaMedal,FaAward,FaTrophy } from "react-icons/fa";
import img_01 from "../../../../../assests/marketplace/developer/Awards/img-01.jpg"
import img_02 from "../../../../../assests/marketplace/developer/Awards/img-02.jpg"
import img_03 from "../../../../../assests/marketplace/developer/Awards/img-03.jpg"
import "./Awards.css";

const Buttons = [
  {
    id: 1,
    name: "1900",
  },
  {
    id: 2,
    name: "1940",
  },
  {
    id: 3,
    name: "2000",
  },
  {
    id: 4,
    name: "2010",
  },
];



const AwardsContent = [
    {
        id:1,
        subtitle:"our history",
        title:"We Started Our Journey",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        img:img_01,
        icon: <FaAward /> ,
        date:"1900"
    },
    {
        id:2,
        subtitle:"Get Rewards",
        title:"We Started Our Journey",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        img:img_02,
        icon: <FaTrophy /> ,
        date:"1940"
    },
    {
        id:3,
        subtitle:"Get Rewards",
        title:"We Started Our Journey",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        img:img_03,
        icon: <FaMedal /> ,
        date:"2000"
    },
    {
        id:4,
        subtitle:"Get Rewards",
        title:"We Started Our Journey",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        img:img_01,
        icon: <FaTrophy /> ,
        date:"2010"
    },
]


const Awards = () => {
  const [activeBtn, setActiveBtn] = useState("1900");
  const handleClick = (id) => {
    setActiveBtn(id);
  };
  const renderButtons = Buttons.map((btn) => (
    <button
      key={btn.id}
      id={btn.name}
      className={activeBtn == btn.name ? "active" : ""}
      onClick={(e) => handleClick(e.target.id)}
    >
      {btn.name}
    </button>
  ));

  const renderAwardsContents = AwardsContent.map( award => (
    <div className={`${activeBtn == award.date ? "show " : ""}grid lg:!grid-cols-2 award-content-wrapper`} key={award.id}>
        <div className="award-img md:pe-[60px]">
            <img src={award.img} alt="" />
            {award.icon}
        </div>

        <div className="award-content">
            <div className="award-heading special-landing-heading">
                <span>{award.subtitle}</span>
                <h1 className="">{award.title}</h1>
                
            </div>

            <p className="my-[30px]">
                {award.content}
            </p>
            <p>
                {award.content}
                {award.content}
                {award.content}
            </p>
        </div>
    </div>
  ))
  return (
    <div className="awards-section bg-white py-[4rem] lg:py-[6rem] mb-[25px]">
      <div className="marketplace-container">
        {/* <div className="Awards-heading special-landing-heading">
              <span>Properties</span>
              <h1>Awards</h1>
          </div> */}
        <div className="buttons relative flex justify-between mb-[4rem]">
          {renderButtons}
        </div>

        <div>
            {renderAwardsContents}
        </div>

      </div>
    </div>
  );
};

export default Awards;
