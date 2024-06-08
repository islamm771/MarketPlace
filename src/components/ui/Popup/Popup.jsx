import React, { useEffect, useRef } from 'react'
import "./Popup.css"
const Popup = ({isOpen,setIsOpen,images,currentImgIndex,setCurrentImgIndex,children}) => {
    const popupRef = useRef(null);

    const closeGallery = () => {
        setIsOpen(false);
      };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          closeGallery();
        }
      };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.body.classList.remove("no-scroll");
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        }, [isOpen]);
  return (
    <div
      className="popup-gallery"
      style={
        isOpen
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div ref={popupRef} className="popup-content">
        <span className="close hover:text-red-700" onClick={closeGallery}>
          &times;
        </span>
        {children}

        <div className="img-thumbnails flex gap-4 justify-center p-4">
          {images.map((img, index) => (
            <img src={img} alt=""
            className={`${index == currentImgIndex ? "active " : ""}thumbnail`}
            onClick={() => setCurrentImgIndex(index)}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popup