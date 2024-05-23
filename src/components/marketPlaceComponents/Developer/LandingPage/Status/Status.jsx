import { useEffect, useRef, useState } from "react";
import { RiArmchairLine } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuAreaChart } from "react-icons/lu";
import excavator from "../../../../../assests/marketplace/developer/Status/excavator.png"


export const SectionItems = [
    {
      title:"Total Area Sq",
      goal:560,
      name: 'first',
      icon:<LuAreaChart className="mx-auto text-[#fd6729] text-[70px] mb-[15px]" />
    },
    {
      title:"Apartments Sold",
      goal:197,
      name: 'second',
      icon: <HiOutlineBuildingOffice2 className="mx-auto text-[#fd6729] text-[70px] mb-[15px]" />
    },
    {
      title:"Total Constructions",
      goal:268,
      name: 'third',
      icon: "",
      img:excavator
    },
    {
      title:"Apartio Rooms",
      goal:340,
      name: 'fourth',
      icon: <RiArmchairLine className="mx-auto text-[#fd6729] text-[70px] mb-[15px]" />
    },
  ]


const Status = () => {
  const [started,setStarted] = useState(false)
  const statusRef = useRef(null)
  const [num,setNum] = useState({
    "first":0,
    "second":0,
    "third":0,
    "fourth":0,
  })

  const Counter = (key , goal) => {
    const counter = setInterval(() => {
      const updated = ++num[key];
      setNum({ ...num, [key]: updated });
      if (num[key] == goal) {
        clearInterval(counter);
      }
    }, 2000 / goal);
  };
  
  useEffect( ()=>{
    window.onscroll = function(){
        if(window.scrollY >= statusRef.current.offsetTop-500){
          if(!started){
            SectionItems.forEach( item =>{
              Counter(item.name, item.goal);
            } )
          }
          setStarted(true);
        }
      }
      
    console.log(statusRef.current.offsetTop)
  },[window.scrollY] )
  return (
    <section className="status-section bg-white py-[4rem] lg:py-[6rem] mb-[25px]" ref={statusRef}>
      <div className="marketplace-container">
        <div className="grid md:!grid-cols-4">
          {SectionItems.map((item) => (
            <div
              className="text-center item"
              key={item.goal}
            >
              <span className="icon">{item.icon}</span>
              {item.img && <span><img src={item.img} alt="" className="w-[70px] mx-auto mb-[15px]"/></span> }
              <h2 className="text-[30px] mb-[10px]">{num[item.name]}+</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Status