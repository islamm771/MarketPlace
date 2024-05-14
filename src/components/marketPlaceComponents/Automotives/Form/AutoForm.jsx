import React from 'react'
import { useState } from "react";
import FormInput from "../../../ui/formInput/FormInput";
import Select from "../../../ui/select/Select";
import FormTextBox from "../../../ui/formTextBox/FormTextBox";
import { FaImage } from "react-icons/fa6";

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

const categories = [
  { value: "Category 1" },
  { value: "Category 2" },
  { value: "Category 3" },
];

const brands = [
  { value: "Brand 1" },
  { value: "Brand 2" },
  { value: "Brand 3" },
];

const conditions = [
  { value: "Condition 1" },
  { value: "Condition 2" },
  { value: "Condition 3" },
];

const currencies = [
  { value: "USD" },
  { value: "EUR" },
  { value: "EGP" },
  { value: "SAR" },
  { value: "AED" },
];
const AutoDashForm = () => {
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
      <p class="widget-box-title">Automotives</p>
      <div class="widget-box-content">
          <form action="">
            <div className="sell-product-form">
                
            <div className="grid !grid-cols-2 !gap-4 mb-4">
            <div class="upload-box relative">
                <label htmlFor="img" className='absolute top-0 left-0 w-[100%] h-[100%] z-10 cursor-pointer'></label>
                <input type="file" id='img' name='img' accept='image/*' className='hidden'/>
                <FaImage />
                <p class="upload-box-title">Add Featue Image</p>
                <p class="upload-box-text">110x110px size minimum</p>
            </div>
            <div class="upload-box relative">
              <label htmlFor="files" className='absolute top-0 left-0 w-[100%] h-[100%] z-10 cursor-pointer'></label>
              <input type="file" id='files' name='files' className='hidden' multiple/>
              <FaImage />
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

            <div className="sell-product-form-item !flex-row items-center">
                <div class="product-switch md:w-[250px] ms-1">
                      <p style={{ fontSize: "0.95rem", fontWeight: "bold" }}>
                      Is Produtc Used ?
                    </p>
                    <section style={{display:"flex" , gap:"0.5rem" , margin:0 , "marginTop":10}}>
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
            </div>

            <div className="sell-product-form-item">
                <Select className="shadow !border-white focus:!border-[#fd6729]"  defaultValue={"Country"} optionsArray={countries} />

                <Select className="shadow !border-white focus:!border-[#fd6729]"  defaultValue={"City"} optionsArray={cities} />
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
                  <Select className="shadow !border-white focus:!border-[#fd6729]"  defaultValue={"Category"} optionsArray={categories} />
                </div>
                <div class="col-span-2 md:col-span-1">
                  <Select className="shadow !border-white focus:!border-[#fd6729]"  defaultValue={"Sub-Category"} optionsArray={categories} />
                </div>
            </div>

            <div className="sell-product-form-item">
                <Select className="shadow !border-white focus:!border-[#fd6729]" defaultValue={"Brand"} optionsArray={brands} />

                <Select className="shadow !border-white focus:!border-[#fd6729]" defaultValue={"Condition"} optionsArray={conditions} />
            </div>

            <div className="sell-product-form-item">
                <Select className="shadow !border-white focus:!border-[#fd6729]" defaultValue={"Currency"} optionsArray={currencies} />

                <FormInput className="shadow !border-white focus:!border-[#fd6729]" label="Price" name="price" type="number" />
            </div>

            </div>
          </form>
      </div>
    </>
  )
}

export default AutoDashForm