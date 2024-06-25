import { Modal } from "antd";
import { useState } from "react";
import FormInput from "../../../ui/formInput/FormInput";
import Select from "../../../ui/select/Select";
import { BsCameraFill } from "react-icons/bs";

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

const QuickPostSellProduct = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button className="more-btn" onClick={() => setIsOpened(!isOpened)}>
        <span className="more-btn-img">
          <img
            src="https://develop.abncw.com/themes/sunshine/img/icons/pub-product.svg"
            alt="Sell product"
          />
        </span>

        <span className="more-btn-text">Sell product</span>
      </button>

      <Modal
        title={null}
        open={isOpened}
        onCancel={() => setIsOpened(!isOpened)}
        footer={null}
        width={800}
        zIndex={100000000000}
      >
        <div className="sell-product-container">
          <h2 className="sell-product-title">Sell product</h2>

          <form action="">
            <div className="sell-product-form">
              <label
                className="sell-upload-product-img"
                htmlFor="upload-product-img"
              >
                <input
                  type="file"
                  id="upload-product-img"
                  style={{ display: "none" }}
                />

                <BsCameraFill />

                <p>Product image</p>
              </label>

              <FormInput label="Product name" name="product-name" type="text" />

              <div className="sell-product-form-item">
                <Select defaultValue={"Country"} optionsArray={countries} />

                <Select defaultValue={"City"} optionsArray={cities} />
              </div>

              <div className="sell-product-form-item">
                <Select defaultValue={"Category"} optionsArray={categories} />

                <Select defaultValue={"Condition"} optionsArray={conditions} />
              </div>

              <div className="sell-product-form-item">
                <Select defaultValue={"Currency"} optionsArray={currencies} />

                <FormInput label="Price" name="price" type="number" />
              </div>

              <FormInput
                label="Description"
                name="desc"
                type="text"
                className="sell-product-textarea"
              />

              <div className="sell-product-form-item">
                <button className="button white">Cancel</button>
                <button className="button primary">Sell product</button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default QuickPostSellProduct;
