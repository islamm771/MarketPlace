import "../QuickPost.css";
import { BsCameraVideo } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const QuickPostVideoPreview = ({ videos, setVideos, setPostOptionType }) => {
  const videosArray = Array.from(videos);

  return (
    <div className="video-section">
      <div className="post-option-header">
        <h3 className="post-option-header-title">Upload Video</h3>

        <button
          className="post-option-cancel-btn"
          onClick={() => {
            setVideos([]);
            setPostOptionType("normal");
          }}
        >
          <MdClose />
        </button>
      </div>

      <div className="img-preview-container">
        {videosArray.map((video, videoIndex) => (
          <div className="img-preview-item" key={videoIndex}>
            <video controls width="120" height="120">
              <source src={URL.createObjectURL(video)} type={video.type} />
            </video>

            <button
              className="img-preview-close"
              onClick={() => {
                setVideos(
                  videosArray.filter((_, index) => index !== videoIndex)
                );
              }}
            >
              <MdClose />
            </button>
          </div>
        ))}

        <div className="img-preview-upload">
          <label htmlFor="video-upload">
            <input
              type="file"
              id="video-upload"
              accept="video/*"
              multiple
              onChange={(e) => {
                setVideos([...videos, ...e.target.files]);
              }}
            />
            <BsCameraVideo />
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuickPostVideoPreview;
