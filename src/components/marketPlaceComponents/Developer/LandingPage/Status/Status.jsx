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

  const Counter = (key, goal) => {
    const counter = setInterval(() => {
      setNum(prevNum => {
        const updated = prevNum[key] + 1;
        if (updated === goal) {
          clearInterval(counter);
        }
        return { ...prevNum, [key]: updated };
      });
    }, 2000 / goal);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (statusRef.current && window.scrollY + window.innerHeight >= statusRef.current.offsetTop + 200) {
        if (!started) {
          SectionItems.forEach(item => {
            Counter(item.name, item.goal);
          });
          setStarted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [started, SectionItems]);

  return (
    <section className="status-section bg-white py-[4rem] lg:py-[6rem] mb-[25px]" ref={statusRef}>
      <div className="marketplace-container">
        {/* <div className="Status-heading special-landing-heading">
              <span>Properties</span>
              <h1>Status</h1>
          </div> */}
        <div className="grid md:!grid-cols-4">
          {SectionItems.map((item) => (
            <div
              className="text-center item"
              key={item.goal}
            >
              <span className="icon">{item.icon}</span>
              {item.img && <span><img src={item.img} alt="" className="w-[70px] mx-auto mb-[15px]"/></span> }
              <h2 className="text-[35px] mb-[10px]">{num[item.name]}+</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Status