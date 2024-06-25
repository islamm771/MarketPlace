import "../QuickPost.css";
import { MdClose } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";

const QuickPostImagesPreview = ({ images, setImages, setPostOptionType }) => {
  const imagesArray = Array.from(images);

  return (
    <div className="images-preview">
      <div className="post-option-header">
        <h3 className="post-option-header-title">Upload Image</h3>

        <button
          className="post-option-cancel-btn"
          onClick={() => {
            setImages([]);
            setPostOptionType("normal");
          }}
        >
          <MdClose />
        </button>
      </div>

      <div className="img-preview-container">
        {imagesArray.map((img, imgIndex) => (
          <div className="img-preview-item" key={imgIndex}>
            <img
              src={URL.createObjectURL(img)}
              alt={img?.name}
              loading="lazy"
            />

            <button
              className="img-preview-close"
              onClick={() => {
                setImages(imagesArray.filter((_, index) => index !== imgIndex));
              }}
            >
              <MdClose />
            </button>
          </div>
        ))}

        <div className="img-preview-upload">
          <label htmlFor="img-upload">
            <input
              type="file"
              id="img-upload"
              accept="image/*"
              multiple
              onChange={(e) => {
                setImages([...images, ...e.target.files]);
              }}
            />
            <BsCameraFill />
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuickPostImagesPreview;
