import { Modal } from "antd";
import { useState } from "react";
import FormInput from "../../ui/formInput/FormInput";
import Select from "../../ui/select/Select";
import { BsCameraFill } from "react-icons/bs";
import FormTextBox from "../../ui/formTextBox/FormTextBox";

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

const AddProduct = () => {
  const [isOpened, setIsOpened] = useState(false);
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
        <button className="add-listing-product">
            <a href="/marketplace/dashboard" className="text-white block p-3">
            Add Listing +
            </a> 
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
                    

                    <div style={{position:"relative"}}>
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
                    </div>

                <FormInput label="Product name" name="product-name" type="text" />

                <div
                  className="form-row"
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                    flexDirection: "column",
                    gap: "12px",
                    marginTop: "15px",
                    marginLeft: "5px",
                  }}
                    >
                  <p style={{ fontSize: "0.95rem", fontWeight: "bold" }}>
                    Is Produtc Used ?
                  </p>
                  <section style={{display:"flex" , gap:"0.5rem"}}>
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

                <div className="sell-product-form-item">
                    <Select defaultValue={"Country"} optionsArray={countries} />

                    <Select defaultValue={"City"} optionsArray={cities} />
                </div>

                <div className="sell-product-form-item">
                    <Select defaultValue={"Category"} optionsArray={categories} />

                    <Select defaultValue={"Sub-Category"} optionsArray={conditions} />
                </div>

                <div className="sell-product-form-item">
                    <Select defaultValue={"Brand"} optionsArray={brands} />

                    <Select defaultValue={"Condition"} optionsArray={conditions} />
                </div>

                <div className="sell-product-form-item">
                    <Select defaultValue={"Currency"} optionsArray={currencies} />

                    <FormInput label="Price" name="price" type="number" />
                </div>

                <FormTextBox
                    label="Description"
                    name="desc"
                    type="text"
                    className=""
                    cols={10}
                    rows={10}
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

export default AddProduct;
