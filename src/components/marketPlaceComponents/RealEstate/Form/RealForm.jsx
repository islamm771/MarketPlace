import React from 'react'
import { useState } from "react";
import FormInput from "../../../ui/formInput/FormInput";
import Select from "../../../ui/select/Select";
import FormTextBox from "../../../ui/formTextBox/FormTextBox";
import { FaImage } from "react-icons/fa6";
import DesignedSelect from '../../../ui/HeadlessSelect/Select';
import "./RealForm.css"
import FormCheckbox from '../../../ui/formCheckbox/FormCheckbox';

const countries = [
  { value: "Afghanistan" },
  { value: "Albania" },
  { value: "Algeria" },
  { value: "Andorra" },
  { value: "Angola" },
];

const cities = [
  { value: "Kabul" },
  { value: "Tirana" },
  { value: "Algiers" },
  { value: "Andorra la Vella" },
  { value: "Luanda" },
];

const conditions = [
  { value: "Condition 1" },
  { value: "Condition 2" },
  { value: "Condition 3" },
];


const categories = {
    type:[
      {id:1 , value: "None"},
      {id:2 , value: "Apartments"},
      {id:3 , value: "Condos"},
      {id:4 , value: "Duplexes"},
      {id:5 , value: "Houses"},
      {id:6 , value: "Industrial"},
      {id:7 , value: "Offices"},
      {id:8 , value: "Retail"},
      {id:9 , value: "Villas"},
    ],
  
    pay:[
      {id:1 , value: "None"},
      {id:2 , value: "Rental"},
      {id:3 , value: "Sales"},
    ],
  
    status:[
      {id:1 , value: "no status"},
      {id:2 , value: "Active"},
      {id:3 , value: "hot offer"},
      {id:4 , value: "new offer"},
      {id:5 , value: "open house"},
      {id:6 , value: "sold"},
    ]
  
}

const currencies = [
  { value: "USD" },
  { value: "EUR" },
  { value: "EGP" },
  { value: "SAR" },
  { value: "AED" },
];

const videoSources = [
    {id:1,value:"Video from"},
    {id:2,value:"vimeo"},
    {id:3,value:"youtube"}
]

const structure_types = [
    { id:1,value:"Not Available" },
    { id:2,value:"Brick" },
    { id:3,value:"Wood" },
    { id:4,value:"Cement" },
]

const floor_nums = [
    { id:1,value:"1" },
    { id:2,value:"2" },
    { id:3,value:"3" },
    { id:4,value:"4" },
    { id:4,value:"5" },
]
const energy_classes = [
    { id:1,value:"A+" },
    { id:2,value:"A" },
    { id:3,value:"B" },
    { id:4,value:"C" },
    { id:4,value:"D" },
    { id:4,value:"E" },
]



const RealForm = () => {
  const [checked,setChecked] = useState(false)
  return (
    <>
      <div className="real-estate-form py-[1rem]">
        <form action="#">
                    
                    {/* Start Describtion */}
                    <div className="describtion bg-white p-[20px] rounded-[12px]" id="desc">
                        <h2 className='text-[20px]'>1. Description</h2>
                        <p><small>These fields are mandatory: Title, Property Media</small></p>
                        <h6 className='my-[20px]'>Property Description</h6>
                        <div className="grid !gap-4">
                            <div className="input-item input-item-name">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Title" name="product-title" type="text" />
                            </div>
                            <div className="input-item input-item-textarea">
                                <FormTextBox
                                    label="Description"
                                    name="desc"
                                    type="text"
                                    className="shadow !border-white focus:!border-[#fd6729]"
                                    cols={4}
                                    rows={4}
                                    />                                
                            </div>
                        </div>
                        <h6 className='my-[20px]'>Property Price</h6>
                        <div className="grid !grid-cols-1  md:!grid-cols-2 lg:!grid-cols-3 !gap-4">
                            <div className="col-md-6">
                                <div className="input-item input-item-name">
                                    <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Price" name="product-price" type="number" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-name">
                                    <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="After Price Label (ex: /month)" name="product-price-Alabel" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-name">
                                    <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Before Price Label (ex: from)" name="product-price-BLabel" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Yearly Tax Rate" name="product-price-tax" type="text" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Homeowners Association Fee(monthly)" name="product-ownerFee" type="text" />
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-name">
                                    <DesignedSelect style={{marginTop:15}} items={currencies} />
                                </div>
                            </div>
                        </div>
                        <h6 className='my-[20px]'>Select Categories</h6>
                        <div className="grid !grid-cols-1  md:!grid-cols-2 lg:!grid-cols-3 !gap-4">
                            <div className="col-lg-4 col-md-6">
                            <div className="input-item">
                                <DesignedSelect items={categories.type} />
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="input-item">
                                    <DesignedSelect items={categories.pay} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <div className="input-item">
                                <DesignedSelect items={categories.status} />
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* End Describtion */}

                    {/* Start Media */}
                    <div className="media bg-white p-[20px] rounded-[12px] mt-[20px]" id="media">
                        <h2 className='text-[20px]'>2. Media</h2>
                        <h6 className='mt-[15px] mb-[20px]'>Listing Media</h6>
                        <div className="grid !grid-cols-2 !gap-4 mb-4">
                            <div class="upload-box relative">
                                <label htmlFor="img" className='absolute top-0 left-0 w-[100%] h-[100%] z-10 cursor-pointer'></label>
                                <input type="file" id='img' name='img' accept='image/*' className='hidden'/>
                                <FaImage className='text-[#36e9f7]' />
                                <p class="upload-box-title">Add Featue Image</p>
                                <p class="upload-box-text">110x110px size minimum</p>
                            </div>
                            <div class="upload-box relative">
                                <label htmlFor="files" className='absolute top-0 left-0 w-[100%] h-[100%] z-10 cursor-pointer'></label>
                                <input type="file" id='files' name='files' className='hidden' multiple/>
                                <FaImage className='text-[#36e9f7]' />
                                <p class="upload-box-title">Add Gallery Images</p>
                                <p class="upload-box-text">1184x300px size minimum</p>
                            </div>
                        </div>
                        <p>
                            <small>* At least 1 image is required for a valid submission.Minimum size is 500/500px.</small><br />
                            <small>* PDF files upload supported as well.</small><br />
                            <small>* Images might take longer to be processed.</small>
                        </p>
                        <h6 className='my-[20px]'>Video Option</h6>
                        <div className="grid md:!grid-cols-2">
                            <div className="col-md-6">
                            <div className="input-item">
                                <DesignedSelect items={videoSources} />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name">
                                <FormInput type="text" className="shadow !border-white focus:!border-[#fd6729]" label="Embed Video ID" name="product-videoID" />
                            </div>
                            </div>
                        </div>
                        <h6 className='my-[20px]'>Virtual Tour</h6>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                            <FormTextBox
                                label="Virtual Tour"
                                name="desc"
                                type="text"
                                className="shadow !border-white focus:!border-[#fd6729]"
                                cols={4}
                                rows={4}
                                /> 
                        </div>
                    </div>
                    {/* End Media */}

                    {/* Start Location */}
                    <div className="location bg-white p-[20px] rounded-[12px] mt-[20px]" id="location">
                        <h2 className='text-[20px]'>3. Location</h2>
                        <h6 className='my-[20px]'>Listing Location</h6>
                        <div className="grid md:!grid-cols-2 !gap-4">
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Address" name="product-addr" type="text" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Country" name="product-country" type="text" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="County / State" name="product-state" type="text" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="City" name="product-city" type="text" />

                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Neighborhood" name="product-neighborhood" type="text" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Zip" name="product-zip" type="text" />
                            </div>
                            </div>
                            <div className="!col-span-2">
                            <div className="property-details-google-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Latitude (for Google Maps)" name="product-latitude" type="text" />

                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Longitude (for Google Maps)" name="product-longtitude" type="text" />

                            </div>
                            </div>
                            <div className="col-md-6 pt-3">
                            <FormCheckbox label={"Enable Google Street View"} id={"Enable-Google-Street-View"} />
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Google Street View - Camera Angle (value from 0 to 360)" name="product-title" type="text" />
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* End Location */}

                    {/* Start Details */}
                    <div className="details bg-white p-[20px] rounded-[12px] mt-[20px]" id="details">
                        <h2 className='text-[20px]'>4. Details</h2>

                        <h6 className='my-[20px]'>Listing Details</h6>
                        <div className="grid md:!grid-cols-2 !gap-4">
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Size in m2 (*only numbers)" name="product-size" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Lot Size in m2 (*only numbers)" name="product-lotSize" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Rooms (*only numbers)" name="product-rooms" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Bedrooms (*only numbers)" name="product-bedrooms" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Bathrooms (*only numbers)" name="product-bathrooms" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Custom ID (*text)" name="product-size" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Garages (*text)" name="product-size" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Year Built (*numeric)" name="product-size" type="text" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Garage Size (*text)" name="product-size" type="text" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Available from (*date)" name="product-size" type="text" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Basement (*text)" name="product-size" type="text" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Extra Details (*text)" name="product-size" type="text" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Roofing (*text)" name="product-size" type="text" />

                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Exterior Material (*text)" name="product-size" type="text" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="input-item">
                        <DesignedSelect items={structure_types} />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="input-item">
                        <DesignedSelect items={floor_nums} />
                        </div>
                        </div>
                        <div className="col-span-2">
                        <div className="input-item input-item-textarea ltn__custom-icon">
                        <FormTextBox
                        label="Owner/Agent notes (*not visible on front end)"
                        name="desc"
                        type="text"
                        className="shadow !border-white focus:!border-[#fd6729]"
                        cols={4}
                        rows={4}
                        /> 
                        </div>
                        </div>
                        </div>

                        <h6 className='my-[20px]'>Select Energy Class</h6>
                        <div className="grid !grid-cols-1 md:!grid-cols-2">
                        <div className="col-md-6">
                        <div className="input-item">
                        <DesignedSelect items={energy_classes} />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Energy Index in kWh/m2a" name="product-size" type="text" />
                        </div>
                        </div>
                        </div>
                    </div>
                    {/* End Details */}

                    {/* Start Amenities*/}
                    <div className="amenities bg-white p-[20px] rounded-[12px] mt-[20px]" id="amenities">
                        <h2 className='text-[20px]'>5. Amenities</h2>
                        <h6 className='my-[20px]'>Amenities and Features</h6>  
                        <h6 className='mb-[15px]'>Interior Details</h6>                      
                        <div className="grid md:!grid-cols-2 lg:!grid-cols-3">                                
                            <div className="">
                            <FormCheckbox label={"Equipped Kitchen"} id={"Equipped-Kitchen"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Gym"} id={"Gym"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Laundry"} id={"Laundry"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Media Room"} id={"Media-Room"} />
                            </div>
                        </div>  
                        <h6 className="mt-20 mb-[15px]">Outdoor Details</h6>                      
                        <div className="grid md:!grid-cols-2 lg:!grid-cols-3">                                
                            <div className="">
                            <FormCheckbox label={"Back yard"} id={"Back-yard"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Basketball court"} id={"Basketball-court"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Front-yard"} id={"Front-yard"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Laundry"} id={"Garage-Attached"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Hot-Bath"} id={"Hot-Bath"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Pool"} id={"Pool"} />
                            </div>
                        </div> 
                        <h6 className="mt-20 mb-[15px]">Utilities</h6>                      
                        <div className="grid md:!grid-cols-2 lg:!grid-cols-3">                                
                            <div className="">
                            <FormCheckbox label={"Central Air"} id={"Central-Air"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Electricity"} id={"Electricity"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Heating"} id={"Heating"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Natural Gas"} id={"Natural-Gas"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Ventilation"} id={"Ventilation"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Water"} id={"Laundry"} />
                            </div>
                        </div> 
                        <h6 className="mt-20 mb-[15px]">Other Features</h6>                      
                        <div className="grid md:!grid-cols-2 lg:!grid-cols-3">                                
                            <div className="">
                                <FormCheckbox label={"Chair Accessible"} id={"Chair-Accessible"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Elevator"} id={"Elevator"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Fireplace"} id={"Fireplace"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Smoke detectors"} id={"Smoke-detectors"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"Washer and dryer"} id={"Washer-dryer"} />
                            </div>
                            <div className="">
                            <FormCheckbox label={"WiFi"} id={"WiFi"} />
                            </div>
                        </div>

                        <div className="grid !grid-cols-2 !mt-[45px]">
                            <button className="button white small-space">Discard All</button>
                            <button className="button primary">Add Property</button>
                        </div>
                    </div>
                    {/* End Amenities */}

                    
        </form>
      </div>
    </>
  )
}

export default RealForm