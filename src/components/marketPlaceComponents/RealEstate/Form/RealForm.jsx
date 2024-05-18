import React from 'react'
import { useState } from "react";
import FormInput from "../../../ui/formInput/FormInput";
import Select from "../../../ui/select/Select";
import FormTextBox from "../../../ui/formTextBox/FormTextBox";
import { FaImage } from "react-icons/fa6";
import "./RealForm.css"
import FormCheckbox from '../../../ui/formCheckbox/FormCheckbox';

const countries = [
  { id:1,value: "Afghanistan" },
  { id:2,value: "Albania" },
  { id:3,value: "Algeria" },
  { id:4,value: "Andorra" },
  { id:5,value: "Angola" },
];

const cities = [
  { id:1,value: "Kabul" },
  { id:2,value: "Tirana" },
  { id:3,value: "Algiers" },
  { id:4,value: "Andorra la Vella" },
  { id:5,value: "Luanda" },
];

const conditions = [
  { value: "Condition 1" },
  { value: "Condition 2" },
  { value: "Condition 3" },
];


const categories = {
    cat:[
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
  
    subCat:[
      {id:1 , value: "Sub Category 1"},
      {id:2 , value: "Sub Category 2"},
      {id:3 , value: "Sub Category 3"},
      {id:3 , value: "Sub Category 4"},
    ],
  
    property:[
      {id:1 , value: "House"},
      {id:2 , value: "Single Family"},
      {id:3 , value: "Apartment"},
      {id:4 , value: "Office Villa"},
      {id:5 , value: "Luxary Home"},
      {id:6 , value: "Studio"},
    ],

    delivery_types:[
        {id:1 , value: "type 1"},
        {id:2 , value: "type 2"},
        {id:3 , value: "type 3"},
        {id:4 , value: "type 4"},
        {id:5 , value: "type 5"},
    ],
    communities:[
        {id:1 , value: "Soul"},
        {id:2 , value: "Marassi"},
        {id:3 , value: "Uptown Cairo"},
        {id:4 , value: "Bellevie"},
        {id:5 , value: "Cairo Gate"},
        {id:6 , value: "Mivida"},
    ],
    property_form:[
        {id:1 , value: "Sale"},
        {id:2 , value: "Resale"},
    ],
    developers : [
        {id:1 ,value:"Dev 1"},
        {id:2 ,value:"Dev 2"},
        {id:3 ,value:"Dev 3"},
        {id:4 ,value:"Dev 4"},
        {id:5 ,value:"Dev 5"},
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

const agents = [
    { id:1,value:"Agent 1" },
    { id:2,value:"Agent 2" },
    { id:3,value:"Agent 3" },
    { id:4,value:"Agent 4" },
]




const RealForm = () => {
    const [checked,setChecked] = useState(false)
    const [floorNo , setFloorNo] = useState(0)
    const createUploadFloorBox = [];
    for (let i = 1; i <= floorNo; i++) {
        createUploadFloorBox.push(
            <div key={i} className="upload-box relative">
                <label htmlFor={`img${i}`} className='absolute top-0 left-0 w-[100%] h-[100%] z-10 cursor-pointer'></label>
                <input type="file" id={`img${i}`} name={`img${i}`} accept='image/*' className='hidden'/>
                <FaImage className='text-[#36e9f7]' />
                <p className="upload-box-title">Add Image For Floor {i}</p>
                <p className="upload-box-text">110x110px size minimum</p>
            </div>
        );
    }
    const renderUploadFloorBox = createUploadFloorBox.map( box => (<div className='col-md-6'>{box}</div>) )

  return (
    <>
      <div className="real-estate-form py-[1rem]">
        <form action="#">
                    
                    {/* Start Describtion */}
                    <div className="describtion bg-white p-[20px] rounded-[12px]" id="desc">
                        <p className='mb-[40px] font-[700]'>Description</p>
                        <div className="grid !gap-4">
                            <div className="input-item input-item-name">
                                <FormInput label="Title" name="product-title" type="text" />
                            </div>
                            <div className="input-item input-item-textarea">
                                <FormTextBox
                                    label="Description"
                                    name="desc"
                                    type="text"
                                    
                                    cols={4}
                                    rows={4}
                                    />                                
                            </div>
                        </div>
                    </div>
                    {/* End Describtion */}

                    {/* Start Price */}
                    <div className="price bg-white p-[20px] rounded-[12px] mt-[20px]" id="price">
                    <p className='mb-[40px] font-[700]'>Price</p>
                        <div className="grid !grid-cols-1  md:!grid-cols-2 !gap-4">
                            <div className="col-md-6">
                                <div className="input-item input-item-name">
                                    <FormInput  label="Price" name="product-price" type="number" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-name">
                                    <FormInput  label="Downpayment" name="product-price" type="number" />
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                            <div className="input-item input-item-name">
                                <FormInput  label="Monthly Installment" name="product-price-tax" type="text" />
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-name">
                                    <Select optionsArray={currencies} defaultValue={"Currencies"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Price */}


                    {/* Start Details */}
                    <div className="details bg-white p-[20px] rounded-[12px] mt-[20px]" id="details">
                    <p className='mb-[40px] font-[700]'>Details</p>
                        <div className="grid !grid-cols-1  md:!grid-cols-2 !gap-4">
                            <div className="col-md-6">
                                <div className="input-item">
                                    <Select optionsArray={categories.cat} defaultValue={"Category"} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item">
                                    <Select optionsArray={categories.subCat} defaultValue={"Subcategory"} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item">
                                    <Select optionsArray={categories.property} defaultValue={"Property Types"} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item">
                                    <Select optionsArray={categories.property_form} defaultValue={"Property Form"} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item">
                                    <Select optionsArray={categories.developers} defaultValue={"Developers"} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item">
                                    <Select optionsArray={categories.delivery_types} defaultValue={"Delivery Types"} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item">
                                    <Select optionsArray={categories.communities} defaultValue={"Communities"} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput  label="Size in m2 (*only numbers)" name="product-size" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput  label="Year Built (*numeric)" name="product-size" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput label="Available from (*date)" icon={"date"} name="product-size" type="text" value={"August 24th, 1987"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Details */}

                    {/* Start Media */}
                    <div className="media bg-white p-[20px] rounded-[12px] mt-[20px]" id="media">
                        <p className='mb-[40px] font-[700]'>Media</p>
                        <div className="grid !grid-cols-2 !gap-4 mb-4">
                            <div class="upload-box relative">
                                <label htmlFor="img" className='absolute top-0 left-0 w-[100%] h-[100%] z-10 cursor-pointer'></label>
                                <input type="file" id='img' name='img' accept='image/*' className='hidden'/>
                                <FaImage className='text-[#36e9f7]' />
                                <p class="upload-box-title">Add Featue Image</p>
                                <p class="upload-box-text">500*500px size minimum</p>
                            </div>
                            <div class="upload-box relative">
                                <label htmlFor="files" className='absolute top-0 left-0 w-[100%] h-[100%] z-10 cursor-pointer'></label>
                                <input type="file" id='files' name='files' className='hidden' multiple/>
                                <FaImage className='text-[#36e9f7]' />
                                <p class="upload-box-title">Add Gallery Images</p>
                                <p class="upload-box-text">500*500px size minimum</p>
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
                                <Select optionsArray={videoSources} defaultValue={"Video Sources"} />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name">
                                <FormInput type="text"  label="Embed Video ID" name="product-videoID" />
                            </div>
                            </div>
                        </div>
                        <h6 className='my-[20px]'>Virtual Tour</h6>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                            <FormTextBox
                                label="Virtual Tour"
                                name="desc"
                                type="text"
                                cols={4}
                                rows={4}
                                /> 
                        </div>
                    </div>
                    {/* End Media */}

                    {/* Start Location */}
                    <div className="location bg-white p-[20px] rounded-[12px] mt-[20px]" id="location">
                        <p className='mb-[40px] font-[700]'>Location</p>
                        <div className="grid !grid-cols-1 md:!grid-cols-2 !gap-4">
                            <div className="md:!col-span-2">
                                <div className="input-item input-item-name ltn__custom-icon">
                                    <FormInput  label="Enter Google Location Link" name="product-googleLocation" type="text" />
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <Select optionsArray={countries} defaultValue={"Countries"} /> 
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <Select optionsArray={cities} defaultValue={"Cities"} /> 
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput  label="Address" name="product-addr" type="text" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput  label="Neighborhood" name="product-neighborhood" type="text" />
                            </div>
                            </div>
                            <div className="md:!col-span-2">
                            <div className="property-details-google-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput  label="Latitude (for Google Maps)" name="product-latitude" type="text" />

                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput  label="Longitude (for Google Maps)" name="product-longtitude" type="text" />

                            </div>
                            </div>
                            <div className="col-md-6 pt-3">
                                <FormCheckbox label={"Enable Google Street View"} id={"Enable-Google-Street-View"} />
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <FormInput  label="Google Street View - Camera Angle (value from 0 to 360)" name="product-title" type="text" />
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* End Location */}


                    {/* Start Agent */}
                    <div className="agent bg-white p-[20px] rounded-[12px] mt-[20px]">
                        <p className='mb-[40px] font-[700]'>Agent</p>
                        <div className="grid !grid-cols-1 md:!grid-cols-2 !gap-4">
                            <div className="col-md-6">
                            <div className="input-item">
                            <Select optionsArray={agents} defaultValue={"Agents"} />
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* End Agent */}


                    {/* Start Details */}
                    <div className="lisitng-details bg-white p-[20px] rounded-[12px] mt-[20px]" id="listing-details">
                        <p className='mb-[40px] font-[700]'>Listing Details</p>
                        <div className="grid !grid-cols-1 md:!grid-cols-2 !gap-4">
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput  label="Lot Size in m2 (*only numbers)" name="product-lotSize" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput  label="Rooms (*only numbers)" name="product-rooms" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput  label="Bedrooms (*only numbers)" name="product-bedrooms" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput  label="Bathrooms (*only numbers)" name="product-bathrooms" type="text" />
                        </div>
                        </div>
                        <div className="">
                        <div className="input-item input-item-name ltn__custom-icon">
                        <FormInput  label="Garages (*text)" name="product-size" type="text" />
                        </div>
                        </div>

                        <div className="col-md-6">
                        <div className="input-item">
                        <Select optionsArray={energy_classes} defaultValue={"Energy Classes"} />
                        </div>
                        </div>

                        </div>
                    </div>
                    {/* End Details */}


                    {/* Start Floor Plans */}
                    <div className="floor-plans bg-white p-[20px] rounded-[12px] mt-[20px]" id="listing-details">
                        <p className='mb-[40px] font-[700]'>Floor Plans</p>
                        <div className="grid !grid-cols-1 md:!grid-cols-2 !gap-4">
                        <div className="col-md-6">
                        <div className="input-item">
                        <Select optionsArray={floor_nums} defaultValue={"Floor no"} setValue={setFloorNo} />
                        </div>
                        </div>
                        <br />
                        {renderUploadFloorBox}
                        </div>
                    </div>
                    {/* end Floor Plan */}


                    {/* Start Amenities*/}
                    <div className="amenities bg-white p-[20px] rounded-[12px] mt-[20px]" id="amenities">
                        <h2 className='mb-[40px] font-[700]'>Amenities</h2>
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

                    </div>
                    {/* End Amenities */}

                    {/* Start Owner Notes */}
                    <div className="owner-notes bg-white p-[20px] rounded-[12px] mt-[20px]" id="listing-details">
                        <p className='mb-[40px] font-[700]'>Owner Notes</p>
                        <div className="grid !grid-cols-1 !gap-4">
                        
                        <div className="col-md-6">
                            <div className="input-item input-item-textarea ltn__custom-icon">
                            <FormTextBox
                            label="Owner/Agent notes (*not visible on front end)"
                            name="desc"
                            type="text"
                            
                            cols={4}
                            rows={4}
                            /> 
                            </div>
                        </div>

                        </div>
                    </div>
                    {/* End Owner Notes */}

                    <div className="submit-buttons bg-white p-[20px] rounded-[12px] mt-[20px]">
                        <div className="grid !grid-cols-2">
                            <button className="button white small-space">Discard All</button>
                            <button className="button primary">Add Property</button>
                        </div>
                    </div>
        </form>
      </div>
    </>
  )
}

export default RealForm