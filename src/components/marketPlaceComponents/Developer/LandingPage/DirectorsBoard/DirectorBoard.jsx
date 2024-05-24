import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedin } from "react-icons/fa";
import "./DirectorBoard.css"
import img_01 from "../../../../../assests/marketplace/developer/DirectorBoard/1.jpg"
import img_02 from "../../../../../assests/marketplace/developer/DirectorBoard/2.jpg"
import img_03 from "../../../../../assests/marketplace/developer/DirectorBoard/3.jpg"
import img_04 from "../../../../../assests/marketplace/developer/DirectorBoard/4.jpg"


const Directors = [
    {
        id:1,
        name:"Damble D. Browni",
        positionTitle:"Property Seller",
        socialLinks:{
            facebook:"#",
            twitter:"#",
            linkedIn:"#",
        },
        img:img_01
    },
    {
        id:2,
        name:"Kelian Anderson",
        positionTitle:"Selling Agent",
        socialLinks:{
            facebook:"#",
            twitter:"#",
            linkedIn:"#",
        },
        img:img_02
    },
    {
        id:3,
        name:"Miranda H. Halim",
        positionTitle:"Property Seller",
        socialLinks:{
            facebook:"#",
            twitter:"#",
            linkedIn:"#",
        },
        img:img_03
    },
    {
        id:4,
        name:"Rosalina D. William",
        positionTitle:"Real Estate Broker",
        socialLinks:{
            facebook:"#",
            twitter:"#",
            linkedIn:"#",
        },
        img:img_04
    },
    {
        id:1,
        name:"Damble D. Browni",
        positionTitle:"Property Seller",
        socialLinks:{
            facebook:"#",
            twitter:"#",
            linkedIn:"#",
        },
        img:img_01
    },
    {
        id:2,
        name:"Kelian Anderson",
        positionTitle:"Selling Agent",
        socialLinks:{
            facebook:"#",
            twitter:"#",
            linkedIn:"#",
        },
        img:img_02
    },
]

const DirectorBoard = () => {
    const renderDirectors = Directors.map( direct => (

        <div className='director-card' key={direct.id}>
            <div className="director-card-img">
                <img src={direct.img} alt="" />
            </div>
            <div className="director-card-info">
                <h3 className=''><a href="#">{direct.name}</a></h3>

                <p className=''>{direct.positionTitle}</p>

                <ul className='flex gap-4 justify-center'>
                    <li> <a href={direct.socialLinks.facebook}> <FaFacebookF />  </a> </li>
                    <li> <a href={direct.socialLinks.twitter}> <FaTwitter />  </a> </li>
                    <li> <a href={direct.socialLinks.linkedIn}> <FaLinkedin />  </a> </li>
                </ul>
            </div>
        </div>

    ))

  return (
    <div className="director-board-section bg-white py-[4rem] lg:py-[6rem] mb-[25px]">
        <div className="marketplace-container">
        <div className="DirectorBoard-heading special-landing-heading">
            <span>Properties</span>
            <h1>Board of directors</h1>
        </div>

        <div className="grid md:!grid-cols-2 lg:!grid-cols-3"> 
            {renderDirectors}
        </div>
        </div>
    </div>
  );
}

export default DirectorBoard