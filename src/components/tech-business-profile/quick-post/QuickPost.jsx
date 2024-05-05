import "./QuickPost.css";

import { useEffect, useRef, useState } from "react";
import { Select } from "antd";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { MdOutlinePublic } from "react-icons/md";
import { FaUser, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleQuickPostIsActive } from "../../../app/feature/quickPostSlice";
import { BsEmojiSmile, BsShareFill } from "react-icons/bs";
import QuickPostSetBg from "./QuickPostOtions/QuickPostSetBg";
import QuickPostImagesPreview from "./QuickPostOtions/QuickPostImagesPreview";
import QuickPostVideoPreview from "./QuickPostOtions/QuickPostVideoPreview";
import QuickPostCreatePoll from "./QuickPostOtions/QuickPostCreatePoll";
import QuickPostSellProduct from "./QuickPostOtions/QuickPostSellProduct";
import QuickPostFeelings from "./QuickPostOtions/QuickPostFeelings";

const QuickPost = () => {
  const [postFooterHeight, setPostFooterHeight] = useState("");
  const [quickPostText, setQuickPostText] = useState("");
  const [postOptionType, setPostOptionType] = useState("normal");

  const [activePostBg, setActivePostBg] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [postPullOptions, setPostPullOptions] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);

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

  const footerRef = useRef(null);
  const footerInitRef = useRef(null);
  const dispatch = useDispatch();

  const { quickPostIsActive } = useSelector((state) => state.quickPost);

  const handleQuickPost = (val) => {
    if (typeof val === "boolean") {
      dispatch(toggleQuickPostIsActive(val));
    } else {
      dispatch(toggleQuickPostIsActive());
    }
  };

  useEffect(() => {
    if (quickPostIsActive) {
      setPostFooterHeight(footerRef?.current?.clientHeight + "px");
    } else {
      setPostFooterHeight(footerInitRef?.current?.clientHeight + 40 + "px");
    }
  }, [
    quickPostIsActive,
    postOptionType,
    selectedImages,
    postPullOptions,
    selectedVideo,
  ]);

  return (
    <>
      <div className={`quick-post ${quickPostIsActive ? "active" : ""}`}>
        <div className="quick-post-body">
          <form className="form">
            <div className="form-row">
              <div className="form-item">
                <div
                  className={`form-textarea ${postOptionType} ${
                    postOptionType === "with-bg" &&
                    `bg-gradient-option-${activePostBg}`
                  }`}
                >
                  {postOptionType !== "with-bg" && (
                    <div className="custom-placeholder-image">
                      <img src="/img/avatar/01.jpg" alt="placeholder avatar" />
                    </div>
                  )}

                  <textarea
                    id="quick-post-text"
                    name="quick-post-text"
                    placeholder="What's going on? #Hashtag.. @Mention.. Link.."
                    onChange={(e) => setQuickPostText(e.target.value)}
                    onFocus={() => handleQuickPost(true)}
                  ></textarea>

                  <div className="post-form-textarea-footer">
                    <p
                      className={`form-textarea-limit-text ${
                        quickPostText.length > 4000 ? "text-danger" : ""
                      }`}
                    >
                      {quickPostText.length > 4000
                        ? 4000 - quickPostText.length
                        : quickPostText.length}
                      /4000
                    </p>

                    <button type="button" className="post-emoji-btn">
                      <BsEmojiSmile />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div
          className="quick-post-footer"
          style={{
            height: postFooterHeight,
          }}
        >
          <div ref={footerRef}>
            {postOptionType === "with-feelings" && <QuickPostFeelings />}

            <div className="quick-post-footer-top">
              {postOptionType === "with-bg" ? (
                <div ref={footerInitRef}>
                  <QuickPostSetBg
                    setActivePostBg={setActivePostBg}
                    activePostBg={activePostBg}
                    setPostOptionType={setPostOptionType}
                  />
                </div>
              ) : postOptionType === "with-images" ? (
                <div ref={footerInitRef}>
                  <QuickPostImagesPreview
                    images={selectedImages}
                    setImages={setSelectedImages}
                    setPostOptionType={setPostOptionType}
                  />
                </div>
              ) : postOptionType === "with-video" ? (
                <div ref={footerInitRef}>
                  <QuickPostVideoPreview
                    videos={selectedVideo}
                    setVideos={setSelectedVideo}
                    setPostOptionType={setPostOptionType}
                  />
                </div>
              ) : postOptionType === "with-pull" ? (
                <div ref={footerInitRef}>
                  <QuickPostCreatePoll
                    setPostOptionType={setPostOptionType}
                    setPostPullOptions={setPostPullOptions}
                    postPullOptions={postPullOptions}
                  />
                </div>
              ) : (
                <>
                  <div className="quick-post-min-btns" ref={footerInitRef}>
                    <div className="quick-post-top-btn">
                      <img
                        src="https://develop.abncw.com/themes/sunshine/img/icons/pub-img.svg"
                        alt="Upload Images"
                      />
                      <span>Upload Images</span>

                      <input
                        type="file"
                        name="quick-post-images"
                        id="quick-post-images"
                        multiple
                        accept="image/*"
                        onChange={(e) => {
                          setSelectedImages(e.target.files);
                          setPostOptionType("with-images");
                        }}
                      />
                    </div>

                    <div className="quick-post-top-btn">
                      <img
                        src="https://develop.abncw.com/themes/sunshine/img/icons/pub-vid.svg"
                        alt="Upload Video"
                      />
                      <span>Upload Video</span>

                      <input
                        type="file"
                        name="quick-post-video"
                        id="quick-post-video"
                        accept="video/*"
                        onChange={(e) => {
                          setSelectedVideo(e.target.files);
                          setPostOptionType("with-video");
                        }}
                      />
                    </div>

                    <button
                      type="button"
                      className="quick-post-top-btn"
                      onClick={() => setPostOptionType("with-bg")}
                    >
                      <span className="more-btn-img">
                        <img
                          src="https://develop.abncw.com/themes/sunshine/img/icons/paint.svg"
                          alt="Background"
                        />
                      </span>

                      <span className="more-btn-text">Background</span>
                    </button>

                    <button
                      type="button"
                      className="quick-post-top-btn add-btn"
                      onClick={() => handleQuickPost(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div className="quick-post-more-btns">
                    <a href="#" className="more-btn">
                      <span className="more-btn-img">
                        <BsShareFill size={21} fill="#3f51b5" />
                      </span>

                      <span className="more-btn-text">Share Service</span>
                    </a>

                    <QuickPostSellProduct />

                    <button
                      onClick={() => setPostOptionType("with-pull")}
                      className="more-btn"
                    >
                      <span className="more-btn-img">
                        <img
                          src="https://develop.abncw.com/themes/sunshine/img/icons/pub-poll.svg"
                          alt="Create Poll"
                        />
                      </span>

                      <span className="more-btn-text">Create Poll</span>
                    </button>

                    <a href="#" className="more-btn">
                      <span className="more-btn-img">
                        <img
                          src="https://develop.abncw.com/themes/sunshine/img/icons/pub-rec.svg"
                          alt=" Record voice"
                        />
                      </span>

                      <span className="more-btn-text"> Record voice</span>
                    </a>

                    <a href="#" className="more-btn">
                      <span className="more-btn-img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#3f51b5"
                            d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z"
                          ></path>
                        </svg>
                      </span>

                      <span className="more-btn-text">Audio Upload</span>
                    </a>

                    <button
                      className="more-btn"
                      onClick={() => {
                        postOptionType === "with-feelings"
                          ? setPostOptionType("normal")
                          : setPostOptionType("with-feelings");
                      }}
                    >
                      <span className="more-btn-img">
                        <img
                          src="https://develop.abncw.com/themes/sunshine/img/1f600.png"
                          alt="Feelings"
                        />
                      </span>

                      <span className="more-btn-text">Feelings</span>
                    </button>

                    <a href="#" className="more-btn">
                      <span className="more-btn-img">
                        <img
                          src="https://develop.abncw.com/themes/sunshine/img/icons/pub-gif.svg"
                          alt="GIF"
                        />
                      </span>

                      <span className="more-btn-text">GIF</span>
                    </a>
                  </div>
                </>
              )}
            </div>

            <div className="quick-post-footer-bottom">
              <div className="quick-post-footer-actions">
                <Select
                  className="select-post-type"
                  defaultValue="everyone"
                  options={postTypeOptions}
                  style={{ height: "40px", minWidth: "185px" }}
                />
              </div>

              <div className="quick-post-footer-actions">
                <button
                  type="button"
                  className="button small white d-flex justify-content-center"
                  onClick={handleQuickPost}
                >
                  Discard
                </button>

                <button
                  type="button"
                  className="button small secondary"
                  onClick={handleQuickPost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={`custom-overlay ${quickPostIsActive ? "active" : ""}`}
        onClick={() => setquickPostIsActive(false)}
      ></div> */}
    </>
  );
};

export default QuickPost;
