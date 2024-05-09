import React from 'react'
import { useState } from "react";
import FormInput from "../../../ui/formInput/FormInput";
import Select from "../../../ui/select/Select";
import FormTextBox from "../../../ui/formTextBox/FormTextBox";
import { FaImage } from "react-icons/fa6";
import DesignedSelect from '../../../ui/HeadlessSelect/Select';

const countries = [
  { id:1, img:"" , value: "Afghanistan" },
  { id:2, img:"" , value: "Albania" },
  { id:3, img:"" , value: "Algeria" },
  { id:4, img:"" , value: "Andorra" },
  { id:5, img:"" , value: "Angola" },
];

const cities = [
  { id:1, img:"" ,value: "Kabul" },
  { id:2, img:"" ,value: "Tirana" },
  { id:3, img:"" ,value: "Algiers" },
  { id:4, img:"" ,value: "Andorra la Vella" },
  { id:5, img:"" ,value: "Luanda" },
];

const categories = [
  { value: "Category 1" , img:"" , id:1 },
  { value: "Category 2" , img:"" , id:2 },
  { value: "Category 3" , img:"" , id:3 },
];

const brands = [
  { value: "Brand 1" , img:"" , id:1 },
  { value: "Brand 2" , img:"" , id:2 },
  { value: "Brand 3" , img:"" , id:3 },
];

// const conditions = [
//   { value: "Condition 1" },
//   { value: "Condition 2" },
//   { value: "Condition 3" },
// ];

const currencies = [
  { id:1, img:"" ,value: "USD" },
  { id:2, img:"" ,value: "EUR" },
  { id:3, img:"" ,value: "EGP" },
  { id:4, img:"" ,value: "SAR" },
  { id:5, img:"" ,value: "AED" },
];


const MemberForm = () => {
  const [image, setImage] = useState(null);
  const [isFromHome, setIsFromHome] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
} 
  return (
    <>
      <div class="widget-box-content bg-white p-[20px] rounded-[12px]">
          <form action="">
            <div className="sell-product-form">
                
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
            {/* <div style={{position:"relative"}}>
                <label className="sell-upload-product-img" htmlFor="upload-product-img">
                    <BsCameraFill />
                    <p>Product image</p>
                </label>
                <input
                type="file"
                id="upload-product-img"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
                />

                <div className= {`${image ? "active" : ""} img-upload-container`}>
                    {image && <img src={image} alt="" className="uploaded-img-product" onClick={() =>setImage(null)} />}
                </div>
            </div> */}

            <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Product name" name="product-name" type="text" />

            <div className="sell-product-form-item">
                <DesignedSelect items={countries} />
                <DesignedSelect items={cities} />
            </div>

            <div className="sell-product-form-item">
                <DesignedSelect items={brands} />
                <div class="product-switch w-[100%] ms-1 flex items-center justify-between">
                    <p style={{ fontSize: "0.95rem", fontWeight: "bold" }}>
                    Is The Item Condition Used?
                    </p>
                    <section style={{display:"flex" , gap:"0.5rem" , margin:0 }}>
                      <span>No</span>
                      <div
                        className={`form-switch ${isFromHome ? "active" : ""}`}
                        onClick={() => {
                          setIsFromHome((prev) => !prev);
                        }}
                      >
                        <div className="form-switch-button"></div>
                      </div>

                      <span>Yes</span>
                    </section>
                </div>
                {/* <Select className="shadow !border-white focus:!border-[#fd6729]" defaultValue={"Condition"} optionsArray={conditions} /> */}
            </div>

            <div class="grid grid-rows-2 !grid-cols-2 gap-4">
              <div class="row-span-2 col-span-2 md:col-span-1">
                <FormTextBox
                label="Description"
                name="desc"
                type="text"
                className="shadow !border-white focus:!border-[#fd6729]"
                cols={4}
                rows={4}
                />
              </div>
                <div class="col-span-2 md:col-span-1">
                  <DesignedSelect items={categories} />
                </div>
                <div class="col-span-2 md:col-span-1">
                  <DesignedSelect items={categories} />
                </div>
            </div>

            <div className="sell-product-form-item">
                <DesignedSelect items={currencies} />
                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Price" name="price" type="number" />
            </div>

            <div className="sell-product-form-item">
              <button class="button white small-space">Discard All</button>
              <button class="button primary">Add Listing</button>
            </div>

            </div>
          </form>
      </div>
    </>
  )
}

export default MemberForm