import { Swiper, SwiperSlide } from "swiper/react";

const StatsBoxSlider = () => {
  return (
    <Swiper spaceBetween={30} centeredSlides={true} className="StatsBoxSlider">
      <SwiperSlide
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div className="stats-box stat-profile-views tns-item tns-normal">
          <div className="stats-box-value-wrap">
            <p className="stats-box-value">87.365</p>

            <div className="stats-box-diff">
              <div className="stats-box-diff-icon positive">
                <svg className="icon-plus-small">
                  <use xlinkHref="#svg-plus-small"></use>
                </svg>
              </div>

              <p className="stats-box-diff-value">3.2%</p>
            </div>
          </div>

          <p className="stats-box-title">Profile Views</p>

          <p className="stats-box-text">In the last month</p>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div className="stats-box stat-posts-created tns-item tns-normal">
          <div className="stats-box-value-wrap">
            <p className="stats-box-value">294</p>

            <div className="stats-box-diff">
              <div className="stats-box-diff-icon positive">
                <svg className="icon-plus-small">
                  <use xlinkHref="#svg-plus-small"></use>
                </svg>
              </div>

              <p className="stats-box-diff-value">0.4%</p>
            </div>
          </div>

          <p className="stats-box-title">Posts Created</p>

          <p className="stats-box-text">In the last month</p>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div className="stats-box stat-reactions-received tns-item tns-normal">
          <div className="stats-box-value-wrap">
            <p className="stats-box-value">2560</p>

            <div className="stats-box-diff">
              <div className="stats-box-diff-icon negative">
                <svg className="icon-minus-small">
                  <use xlinkHref="#svg-minus-small"></use>
                </svg>
              </div>

              <p className="stats-box-diff-value">1.8%</p>
            </div>
          </div>

          <p className="stats-box-title">Reactions Received</p>

          <p className="stats-box-text">In the last month</p>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div className="stats-box stat-comments-received tns-item tns-fadeOut">
          <div className="stats-box-value-wrap">
            <p className="stats-box-value">947</p>

            <div className="stats-box-diff">
              <div className="stats-box-diff-icon positive">
                <svg className="icon-plus-small">
                  <use xlinkHref="#svg-plus-small"></use>
                </svg>
              </div>

              <p className="stats-box-diff-value">4.5%</p>
            </div>
          </div>

          <p className="stats-box-title">Comments Received</p>

          <p className="stats-box-text">In the last month</p>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div className="stats-box stat-profile-views tns-item tns-slide-active tns-fadeIn">
          <div className="stats-box-value-wrap">
            <p className="stats-box-value">87.365</p>

            <div className="stats-box-diff">
              <div className="stats-box-diff-icon positive">
                <svg className="icon-plus-small">
                  <use xlinkHref="#svg-plus-small"></use>
                </svg>
              </div>

              <p className="stats-box-diff-value">3.2%</p>
            </div>
          </div>

          <p className="stats-box-title">Profile Views</p>

          <p className="stats-box-text">In the last month</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default StatsBoxSlider;
