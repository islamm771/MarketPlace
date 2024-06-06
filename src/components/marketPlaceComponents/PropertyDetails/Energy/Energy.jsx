import React, { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import "./Energy.css";

const classes = [
  {
    id:1,
    color:"#00845a",
    text:"A+",
  },
  {
    id:2,
    color:"#18b058",
    text:"A",
  },
  {
    id:3,
    color:"#8dc643",
    text:"B",
  },
  {
    id:4,
    color:"#ffcc01",
    text:"C",
  },
  {
    id:5,
    color:"#f6ac63",
    text:"D",
  },
  {
    id:6,
    color:"#f78622",
    text:"E",
  },
  {
    id:5,
    color:"#ef1d3a",
    text:"F",
  },
  {
    id:5,
    color:"#d10400",
    text:"G",
  },
]

const Energy = () => {
  const [isactive, setIsActive] = useState(true);
  const [Engclass, setEngClass] = useState(classes[2])

  const renderClasses = classes.map( cl => (
    <li class={cl.text} style={{backgroundColor:cl.color}} key={cl.id}>
      {
        Engclass == cl && <span style={{borderTopColor:cl.color}}></span>
      }
      {cl.text}
    </li>
  ))
  return (
    <div className="property-details-energy bg-white mb-[15px]">
      <div
        className="energy-header relative cursor-pointer"
        onClick={() => setIsActive(!isactive)}
      >
        <h3 className="text-[25px] capitalize">Energy Performance</h3>
        <span className="absolute top-[7px] right-0 text-[#fd6729]">
          {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
        </span>
      </div>

      {isactive && (
        <div className="property-energy mt-[30px]">
          <ul className="property-energy-info" style={{borderColor: Engclass.color }}>
            <li>
              ENERGY CLASS:
              <span>B</span>
            </li>
            <li>
              ENERGY PERFORMANCE:
              <span>78 kWh/m²a</span>
            </li>
            <li>
              EPC CURRENT RATING:
              <span>75</span>
            </li>
            <li>
              EPC POTENTIAL RATING:
              <span>84</span>
            </li>
          </ul>

          <ul class="energy-class">
            {renderClasses}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Energy;
