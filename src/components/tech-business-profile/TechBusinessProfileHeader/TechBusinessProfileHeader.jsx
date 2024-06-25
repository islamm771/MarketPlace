import { MdVerified } from "react-icons/md";
import "./TechBusinessProfileHeader.css";

const TechBusinessProfileHeader = () => {
  // test
  return (
    <div className="profile-header v2">
      <figure className="profile-header-cover liquid">
        <img src="/img/cover/04.jpg" alt="cover-4" />
      </figure>

      <div className="profile-header-info">
        <div className="user-short-description big">
          <a className="profile-header-avatar" href="#">
            <img src="/img/businesses/01.jpeg" alt="avatar01" loading="lazy" />
          </a>

          <p className="user-short-description-title">
            <a href="#">DigiTech Solutions</a> <MdVerified />
          </p>

          <p className="user-short-description-text">@digitechsolutions</p>
        </div>

        <div className="user-stats">
          <div className="user-stat big">
            <div className="user-stat-icon">
              <svg className="icon-public orange">
                <use xlinkHref="#svg-public"></use>
              </svg>
            </div>

            <p className="user-stat-text orange">Technology</p>
          </div>

          <div className="user-stat big">
            <p className="user-stat-title">4.5</p>

            <p className="user-stat-stars">
              {new Array(5).fill(0).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={i < 4 ? "gold" : "#adafca"}
                  stroke={i < 4 ? "gold" : "#adafca"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </p>
          </div>

          <div className="user-stat big">
            <p className="user-stat-title">139</p>

            <p className="user-stat-text">Flokkers</p>
          </div>

          <div className="user-stat big">
            <p className="user-stat-title">105</p>

            <p className="user-stat-text">posts</p>
          </div>

          <div className="user-stat big">
            <p className="user-stat-title">7.3k</p>

            <p className="user-stat-text">Flokks</p>
          </div>
        </div>

        <div className="tag-sticker">
          <svg className="tag-sticker-icon icon-public">
            <use xlinkHref="#svg-public"></use>
          </svg>
        </div>

        <div className="profile-header-info-actions">
          <p className="profile-header-info-action button white">
            <svg className="icon-join-group">
              <use xlinkHref="#svg-join-group"></use>
            </svg>
          </p>

          <a className="profile-header-info-action button secondary" href="#">
            <svg className="icon-more-dots">
              <use xlinkHref="#svg-more-dots"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechBusinessProfileHeader;
