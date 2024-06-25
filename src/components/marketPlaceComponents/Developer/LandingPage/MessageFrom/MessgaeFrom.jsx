import React from "react"

import img from "../../../../../assests/marketplace/developer/MessageFrom/img-01.jpg"

const MessageFrom = () =>{

    return(
        <div className="messgage-from-section bg-white py-[4rem] lg:py-[6rem] mb-[25px]">
            <div className="marketplace-container">
                <div className="grid md:!grid-cols-2">
                    <div className="img">
                        <img src={img} alt="" />
                    </div>
                    <div className="message-from-content">
                        <p className="message-from-sub text-[#fd6729] text-[0.75rem] font-[700] mb-[5px]">Message From</p>
                        <h1 className="text-[30px] mb-[30px]">Founder Name</h1>
                        <p className="message-content font-[500]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quo, voluptatem voluptas ad nostrum laborum veritatis facilis 
                            earum delectus animi molestias dicta cum, consectetur ab at dolore 
                            ducimus reprehenderit minima exercitationem.
                        </p>
                    </div>
                </div>
            </div>
        </div>

)}


export default MessageFrom