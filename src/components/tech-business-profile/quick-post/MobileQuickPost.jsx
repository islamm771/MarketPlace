import "./QuickPost.css";

import { IoArrowBack } from "react-icons/io5";
import camera from "../../../assests/chat/cam.svg";
import video from "../../../assests/chat/video.svg";
import poll from "../../../assests/chat/poll.svg";
import bg from "../../../assests/chat/bg.svg";
import gif from "../../../assests/chat/gificon.svg";

import { Select } from "antd";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { MdOutlinePublic } from "react-icons/md";
import { FaUser, FaUsers } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { toggleQuickPostIsActive } from "../../../app/feature/quickPostSlice";
import { useState } from "react";

const MobileQuickPost = () => {
  const postTypeOptions = [
    {
      value: "only-me",
      label: (
        <>
          <RiGitRepositoryPrivateLine /> <span>Only Me</span>
        </>
      ),
    },
    {
      value: "everyone",
      label: (
        <>
          <MdOutlinePublic /> <span>Everyone</span>
        </>
      ),
    },
    {
      value: "people-i-follow",
      label: (
        <>
          <FaUser /> <span>People I Follow</span>
        </>
      ),
    },
    {
      value: "people-follow-me",
      label: (
        <>
          <FaUsers /> <span>People Follow Me</span>
        </>
      ),
    },
  ];

  const [quickPostText, setQuickPostText] = useState("");

  const dispatch = useDispatch();

  const { quickPostIsActive } = useSelector((state) => state.quickPost);

  const handleQuickPostIsActive = () => {
    dispatch(toggleQuickPostIsActive());
  };

  return (
    <div
      className={`OverLay_createMessageOptions OverLay_mobileQuickPost
      ${
        quickPostIsActive
          ? "OverLay_createMessageOptionsActive"
          : "OverLay_createMessageOptionsDisActive"
      }`}
    >
      <div className="createMessageModel">
        <div className="header-createMessageModel">
          <IoArrowBack onClick={handleQuickPostIsActive} />
        </div>

        <div className="content-write-message">
          <div className="img-writer-message">
            <img src="/img/avatar/01.jpg" alt="" />
          </div>

          <div className="content-write-message-txtaria">
            <textarea
              name=""
              id=""
              placeholder="What's going on? #Hashtag.. @Mention.. Link.."
              rows="8"
              onChange={(e) => setQuickPostText(e.target.value)}
            ></textarea>
            <div className="post-form-textarea-footer">
              <p
                className={`form-textarea-limit-text ${
                  quickPostText.length > 1000 ? "text-danger" : ""
                }`}
              >
                {quickPostText.length > 1000
                  ? 1000 - quickPostText.length
                  : quickPostText.length}
                /1000
              </p>

              <button className="post-emoji-btn">
                <BsEmojiSmile />
              </button>
            </div>
          </div>
        </div>

        <div className="post-mobile-footer">
          <div className="post-mobile-btns-content">
            <button className="post-mobile-btn">
              <div className="post-mobile-btn-icon">
                <img src={camera} alt="" />
              </div>

              <div className="post-mobile-btn-txt">
                <p>Upload Images</p>
              </div>
            </button>

            <button className="post-mobile-btn">
              <div className="post-mobile-btn-icon">
                <img src={poll} alt="" />
              </div>

              <div className="post-mobile-btn-txt">
                <p>Create Poll</p>
              </div>
            </button>

            <button className="post-mobile-btn">
              <div className="post-mobile-btn-icon">
                <img src={video} alt="" />
              </div>
              <div className="post-mobile-btn-txt">
                <p>Upload Video</p>
              </div>
            </button>

            <button className="post-mobile-btn">
              <div className="post-mobile-btn-icon">
                <img src={bg} alt="" />
              </div>
              <div className="post-mobile-btn-txt">
                <p>Background</p>
              </div>
            </button>

            <button className="post-mobile-btn">
              <div className="post-mobile-btn-icon">
                <img src={gif} alt="" />
              </div>
              <div className="post-mobile-btn-txt">
                <p>GIF</p>
              </div>
            </button>

            <button className="post-mobile-btn">
              <div className="post-mobile-btn-icon">
                <img
                  src="https://develop.abncw.com/themes/sunshine/img/icons/pub-product.svg"
                  alt="Sell product"
                />
              </div>
              <div className="post-mobile-btn-txt">
                <p>Sell product</p>
              </div>
            </button>

            <button className="post-mobile-btn">
              <div className="post-mobile-btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="feather feather-mic"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>

              <div className="post-mobile-btn-txt">
                <p>Record Voice</p>
              </div>
            </button>

            <button className="post-mobile-btn">
              <div className="post-mobile-btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="feather feather-mic"
                >
                  <path
                    fill="#3f51b5"
                    d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z"
                  ></path>
                </svg>
              </div>

              <div className="post-mobile-btn-txt">
                <p>Audio Upload</p>
              </div>
            </button>
          </div>
        </div>

        <div className="post-mobile-footer-actions">
          <div className="post-mobile-footer-actions-select">
            <Select
              className="select-post-type"
              defaultValue="everyone"
              options={postTypeOptions}
              style={{ height: "40px", minWidth: "187px" }}
            />
          </div>

          <div className="post-mobile-footer-actions-btns">
            <button className="button white">Discard</button>
            <button className="button secondary">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileQuickPost;
