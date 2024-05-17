import React from 'react'
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";

const sidebarItems = [
    {
      id: 1,
      title: "Member Classified",
      function: "member",
      svg:<svg
      className="w-[40px] text-[#36e9f7]"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g fill="none" fill-rule="evenodd">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM5 5h4v4H5zm16 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 0h4v4h-4zm-6 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm4 2a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1-1-1"
        />
      </g>
          </svg>,
  
      buttons: ["Dashboard" , "My Listings" , "Add Listing" , "Classifieds Chat" , "Fav List" , "Sold / Purchased"]
    },
    {
      id: 2,
      title: "Real Estate",
      function: "real",
      svg:<svg
      className="w-[40px] fill-[#36e9f7]"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path d="M16.923 15.02q-.154-.59-.6-1.1q-.446-.512-1.135-.766l-6.992-2.62q-.136-.05-.27-.06q-.134-.012-.307-.012H7v-2.34q0-.385.177-.743t.5-.575l4.885-3.479q.223-.159.458-.229t.478-.07t.49.07t.45.229l4.885 3.479q.323.217.5.575T20 8.12v6.898zM14.5 8.441q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m2 2q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m1.01 11.23q.198.055.482.048q.283-.007.48-.06L21 19.5q0-.696-.475-1.137q-.475-.44-1.179-.44h-5.158q-.498 0-1.02-.06t-.978-.22l-1.57-.526q-.162-.055-.237-.211t-.025-.315q.05-.14.202-.21t.313-.016l1.433.502q.407.146.893.217q.486.07 1.053.07h1.202q.283 0 .453-.162q.17-.161.17-.455q0-.389-.309-.81q-.308-.421-.716-.565l-6.021-2.21q-.137-.042-.273-.074t-.293-.032h-2.08v6.737zM2.385 19.922q0 .46.308.768q.309.309.769.309h.846q.46 0 .768-.309t.309-.768v-6q0-.46-.309-.768t-.768-.309h-.846q-.46 0-.769.309q-.308.308-.308.768z" />
          </svg>,
      
      buttons: ["Dashboard" , "My Properties" , "Add Property" , "Property Chat" , "Fav List" , "Sold / Purchased"]
  
    },
    {
      id: 3,
      title: "Automotive",
      function: "auto",
      svg:<svg
        className="w-[40px] fill-[#36e9f7]"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        >
        <path d="M14.42 7.5L16 11H8l1.42-3.5zM9 12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6-7v6c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4zm-3 7l-2.16-5c-.2-.58-.76-1-1.42-1h-5C8.76 6 8.2 6.42 8 7l-2 5v4c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1z" />
          </svg>,
  
      buttons: ["Dashboard" , "My Automotives" , "Add Automotive" , "Automotives Chat" , "Fav List" , "Sold / Purchased"]
  
    },
  ];



const SideBarDash = ({activeButton,setActiveButton,buttonStates,setButtonStates,dashboardContent}) => {

    const handleToggleActive = (button) =>{
        const copyState = {...buttonStates}

        Object.keys(copyState).forEach( key =>{
            copyState[key] = false
        } )

        copyState[button] = !buttonStates[button]
        setButtonStates(copyState)
    }

    const handleMainButton = (button) =>{
        handleToggleActive(button)
        setActiveButton({title:"Marketplace" , parent:"Main Dashboard"})
    }
    
      const handleClick = (title,text) => {
        setActiveButton({title,parent:text})
        if(dashboardContent.current){
          window.scrollTo(0,dashboardContent.current.offsetTop-90)
        }
      };
    
      const renderItems = sidebarItems.map((item) => (
        <div class="sidebar-menu-item" key={item.id}>
          <div
            className={` ${buttonStates[item.function] && "active"} ${activeButton.parent == item.title && "active"}  sidebar-menu-header accordion-trigger-linked`}
            onClick={() => handleToggleActive(item.function)}
          >
            {item.svg}
    
            <div className="flex-1">
              <h4 className="sidebar-menu-header-title">{item.title}</h4>
              <p class="sidebar-menu-header-text">This area is a description area for this dashboard and what is inside it</p>
            </div>
            <div className="sidebar-menu-header-control-icon">
              {buttonStates[item.function] ? (
                <FaMinus size={12} />
              ) : (
                <FaPlus size={12} />
              )}
            </div>
    
            
          </div>
    
          <div
            className={`sidebar-menu-cont ${
              buttonStates[item.function] ? "active" : ""
            }`}
          >
            <div className="sidebar-menu-body accordion-content-linked accordion-open !p-4 !ps-[50px]">
              {item.buttons.map( title => (
                <button 
                  className={title == activeButton.title && activeButton.parent == item.title && "active"}
                  onClick={()=>handleClick(title,item.title)}>
                  {title}
                </button>
              ) )}
            </div>
          </div>

        </div>
      ));

  return (
    <>
    <div className="account-hub-sidebar col-span-12 xl:col-span-3">
          <div className="sidebar-box no-padding overflow-hidden">
            <div className="sidebar-menu">
                <div className="sidebar-menu-item">
                    <div
                        className={`${buttonStates['main'] && "active"} sidebar-menu-header accordion-trigger-linked !h-[60px]`}
                        onClick={() => handleMainButton('main')}
                    >
                        <BsShop className='w-[40px] text-[#36e9f7]' />
                        <div className="flex-1">
                        <h4 className="sidebar-menu-header-title">Main Dashboard</h4>
                        </div>
                        
                    </div>

                </div>
                {renderItems}
            </div>
          </div>
          
        </div>
    </>
  )
}

export default SideBarDash