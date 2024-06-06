import React, { useRef, useState } from "react";
import "./Calculator.css";
import Dropdown from "../../../ui/MySelect/Dropdown";
import { Slider } from "antd";

const Calculator = () => {
  const [term , setTerm] = useState(24)
  const [interest,setInterest] = useState(3.5)
  const [homeprice,setHomePrice] = useState(825000)
  const [downpayment,setDownPayment] = useState(10)
  const [downPrice , setDownPrice] = useState(((downpayment/100) * homeprice))

  const onChangeTerm = (value) =>{
    setTerm(value)
  }
  const onChangeInterestSlider = (value) =>{
    setInterest(value)
  }
  const onChangeHomePriceSlider = (value) =>{
    const finalPrice = ((downpayment/100) * value)
    setDownPrice(finalPrice)
    setHomePrice(value)
  }
  const onChangeDownPaymentSlider = (value) =>{
    const finalPrice = ((value/100) * homeprice)
    setDownPrice(finalPrice)
    setDownPayment(value)
  }


  const priceFormater = (number) => {
    // Convert number to string
    let value = Math.floor(number);
    let numStr = value.toString();

    // Check if number is long enough to add commas
    if (numStr.length > 3) {
        // Add commas
        let result = '';
        for (let i = numStr.length - 1, j = 1; i >= 0; i--, j++) {
            result = numStr[i] + result;
            if (j % 3 === 0 && i !== 0) {
                result = ',' + result;
            }
        }
        return result;
    } 
    // Number is short, no need for commas
    return numStr;
}
  return (
    <div className="property-details-calculator mb-[15px]">
      <h3 className="prop-calc-title">Mortgage Calculator</h3>
      <div className="cost-cirlce">
        <div className="cost-info">
          <h3>$1,345</h3>
          <p>per month</p>
        </div>
      </div>
      <div class="mc_term_interest flex justify-center gap-2 mb-[10px]">
        <p>
          <span class="mc_term_value font-bold">{term}</span> Years Fixed,
          </p>
        <p>
          <span class="mc_interest_value font-bold">{interest}</span>
          <span>%</span> Interest
        </p>
      </div>
      <div class="mc_cost text-center mb-[40px]">
        <p>Principle and Interest <span className="font-bold">$3,334</span></p>
      </div>

      <div className="terms-wrapper mb-[25px]">
        <label htmlFor="" className="font-[700] mb-[10px] ms-[5px]">Term</label>
        <p className="border border-solid border-[#ddd] p-3 font-semibold">{term} Years Fixed</p>
        <Slider
          step={12}
          defaultValue={term}
          min={12}
          max={96}
          tooltipVisible={false}
          onChange={onChangeTerm}
        />
      </div>

      <div className="interest-wrapper mb-[30px]">
        <label htmlFor="" className="font-[700] mb-[10px]">Interest</label>
        <p className="border border-solid border-[#ddd] p-3 font-semibold">{interest}%</p>
        <Slider
          step={0.1}
          defaultValue={interest}
          min={0}
          max={10}
          tooltipVisible={false}
          onChange={onChangeInterestSlider}
        />
      </div>

      <div className="homeprice-wrapper mb-[30px]">
        <label htmlFor="" className="font-[700] mb-[10px]">Home Price</label>
        <p className="border border-solid border-[#ddd] p-3 font-semibold">{priceFormater(homeprice)} EGP</p>
        <Slider
          step={1}
          defaultValue={homeprice}
          tooltipVisible={false}
          min={100000}
          max={2750000}
          onChange={onChangeHomePriceSlider}
        />

      </div>

      <div className="downpayment-wrapper">
        <label htmlFor="" className="font-[700] mb-[10px]">Down Payment</label>
        <p className="border border-solid border-[#ddd] p-3 mb-[10px] font-semibold">{priceFormater(downPrice)} EGP</p>
        <p className="border border-solid border-[#ddd] p-3 font-semibold">{downpayment}%</p>
        <Slider
          step={1}
          defaultValue={downpayment}
          tooltipVisible={false}
          min={1}
          max={100}
          onChange={onChangeDownPaymentSlider}
        />

      </div>
    </div>
  );
};

export default Calculator;
