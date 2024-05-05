import React from "react";

const Test = () => {
  return (
    <div className="grid grid-3-6-3 mobile-prefer-content">
      {/* <div className="grid-column">
          <div className="widget-box">
            <div className="progress-arc-summary">
              <div className="progress-arc-wrap">
                <div className="progress-arc">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      <div className=""></div>
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      <div className=""></div>
                    </div>
                  </div>
                  <canvas
                    id="profile-completion-chart"
                    // style="display: block; width: 140px; height: 140px;"
                    width="140"
                    height="140"
                    className="chartjs-render-monitor"
                  ></canvas>
                </div>

                <div className="progress-arc-info">
                  <p className="progress-arc-title">59%</p>
                </div>
              </div>

              <div className="progress-arc-summary-info">
                <p className="progress-arc-summary-title">Profile Completion</p>

                <p className="progress-arc-summary-subtitle">
                  Marina Valentine
                </p>

                <p className="progress-arc-summary-text">
                  Complete your profile by filling profile info fields,
                  completing quests &amp; unlocking badges
                </p>
              </div>
            </div>

            <div className="achievement-status-list">
              <div className="achievement-status">
                <p className="achievement-status-progress">11/30</p>

                <div className="achievement-status-info">
                  <p className="achievement-status-title">Quests</p>

                  <p className="achievement-status-text">Completed</p>
                </div>

                <img
                  className="achievement-status-image"
                  src="img/badge/completedq-s.png"
                  alt="bdage-completedq-s"
                />
              </div>

              <div className="achievement-status">
                <p className="achievement-status-progress">22/46</p>

                <div className="achievement-status-info">
                  <p className="achievement-status-title">Badges</p>

                  <p className="achievement-status-text">Unlocked</p>
                </div>

                <img
                  className="achievement-status-image"
                  src="img/badge/unlocked-badge.png"
                  alt="bdage-unlocked-badge"
                />
              </div>
            </div>
          </div>

          <div className="widget-box">
            <div className="widget-box-controls">
              <div
                id="badge-stat-slider-controls"
                className="slider-controls"
                aria-label="Carousel Navigation"
                tabindex="0"
              >
                <div
                  className="slider-control left"
                  aria-controls="badge-stat-slider-items"
                  tabindex="-1"
                  data-controls="prev"
                  aria-disabled="true"
                >
                  <svg className="slider-control-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                  </svg>
                </div>

                <div
                  className="slider-control right"
                  aria-controls="badge-stat-slider-items"
                  tabindex="-1"
                  data-controls="next"
                >
                  <svg className="slider-control-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow"></use>
                  </svg>
                </div>
              </div>
            </div>

            <p className="widget-box-title">Featured Badges</p>

            <div className="widget-box-content">
              <div className="tns-outer" id="badge-stat-slider-items-ow">
                <div
                  className="tns-liveregion tns-visually-hidden"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  slide <span className="current">1</span> of 3
                </div>
                <div id="badge-stat-slider-items-mw" className="tns-ovh">
                  <div className="tns-inner" id="badge-stat-slider-items-iw">
                    <div
                      id="badge-stat-slider-items"
                      className="widget-box-content-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                      // style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);"
                    >
                      <div
                        className="widget-box-content-slider-item tns-item tns-slide-active"
                        id="badge-stat-slider-items-item0"
                      >
                        <div className="badge-item-stat void">
                          <p className="text-sticker">
                            <svg className="text-sticker-icon icon-plus-small">
                              <use xlinkHref="#svg-plus-small"></use>
                            </svg>
                            20 EXP
                          </p>

                          <img
                            className="badge-item-stat-image"
                            src="img/badge/uexp-b.png"
                            alt="badge-uexp-b"
                          />

                          <p className="badge-item-stat-title">
                            Universe Explorer
                          </p>

                          <p className="badge-item-stat-text">
                            Joined and posted on 20 different groups
                          </p>

                          <div className="progress-stat medium">
                            <div
                              id="badge-uexp"
                              className="progress-stat-bar"
                              // style="width: 204px; height: 4px; position: relative;"
                            >
                              <canvas
                                width="204"
                                height="4"
                                // style="position: absolute; top: 0px; left: 0px;"
                              ></canvas>
                              <canvas
                                width="204"
                                height="4"
                                // style="position: absolute; top: 0px; left: 0px;"
                              ></canvas>
                            </div>

                            <div className="bar-progress-wrap">
                              <p className="bar-progress-info negative center">
                                <span className="bar-progress-text no-space">
                                  17<span className="bar-progress-unit">/</span>
                                  20
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="widget-box-content-slider-item tns-item"
                        id="badge-stat-slider-items-item1"
                        aria-hidden="true"
                        tabindex="-1"
                      >
                        <div className="badge-item-stat void">
                          <p className="text-sticker">
                            <svg className="text-sticker-icon icon-plus-small">
                              <use xlinkHref="#svg-plus-small"></use>
                            </svg>
                            40 EXP
                          </p>

                          <img
                            className="badge-item-stat-image"
                            src="img/badge/verifieds-b.png"
                            alt="badge-verifieds-b"
                          />

                          <p className="badge-item-stat-title">
                            Verified Streamer
                          </p>

                          <p className="badge-item-stat-text">
                            Has linked a stream that was verified by the staff
                          </p>

                          <div className="progress-stat medium">
                            <div
                              id="badge-verifieds"
                              className="progress-stat-bar"
                              // style="width: 204px; height: 4px; position: relative;"
                            >
                              <canvas
                                width="204"
                                height="4"
                                // style="position: absolute; top: 0px; left: 0px;"
                              ></canvas>
                              <canvas
                                width="204"
                                height="4"
                                // style="position: absolute; top: 0px; left: 0px;"
                              ></canvas>
                            </div>

                            <div className="bar-progress-wrap">
                              <p className="bar-progress-info negative center">
                                unlocked!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="widget-box-content-slider-item tns-item"
                        id="badge-stat-slider-items-item2"
                        aria-hidden="true"
                        tabindex="-1"
                      >
                        <div className="badge-item-stat void">
                          <p className="text-sticker">
                            <svg className="text-sticker-icon icon-plus-small">
                              <use xlinkHref="#svg-plus-small"></use>
                            </svg>
                            40 EXP
                          </p>

                          <img
                            className="badge-item-stat-image"
                            src="img/badge/qconq-b.png"
                            alt="badge-qconq-b"
                          />

                          <p className="badge-item-stat-title">
                            Quest Conqueror
                          </p>

                          <p className="badge-item-stat-text">
                            Succesfully completed at least 10 quests at 100%
                          </p>

                          <div className="progress-stat medium">
                            <div
                              id="badge-qconq"
                              className="progress-stat-bar"
                              // style="width: 204px; height: 4px; position: relative;"
                            >
                              <canvas
                                width="204"
                                height="4"
                                // style="position: absolute; top: 0px; left: 0px;"
                              ></canvas>
                              <canvas
                                width="204"
                                height="4"
                                // style="position: absolute; top: 0px; left: 0px;"
                              ></canvas>
                            </div>

                            <div className="bar-progress-wrap">
                              <p className="bar-progress-info negative center">
                                <span className="bar-progress-text no-space">
                                  4<span className="bar-progress-unit">/</span>
                                  10
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="widget-box">
            <div className="widget-box-settings">
              <div className="post-settings-wrap">
                <div className="post-settings widget-box-post-settings-dropdown-trigger">
                  <svg className="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                  </svg>
                </div>

                <div
                  className="simple-dropdown widget-box-post-settings-dropdown"
                  // style="position: absolute; z-index: 9999; top: 30px; right: 9px; opacity: 0; visibility: hidden; transform: translate(0px, -20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;"
                >
                  <p className="simple-dropdown-link">Widget Settings</p>
                </div>
              </div>
            </div>

            <p className="widget-box-title">Members</p>

            <div className="widget-box-content">
              <div className="filters">
                <p className="filter">Newest</p>

                <p className="filter active">Popular</p>

                <p className="filter">Active</p>
              </div>

              <div className="user-status-list">
                <div className="user-status request-small">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/07.jpg"
                          // style="width: 30px; height: 32px; position: relative;"
                        >
                          <canvas
                            width="30"
                            height="32"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          // style="width: 40px; height: 44px; position: relative;"
                        >
                          <canvas
                            width="40"
                            height="44"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          // style="width: 40px; height: 44px; position: relative;"
                        >
                          <canvas
                            width="40"
                            height="44"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            // style="width: 22px; height: 24px; position: relative;"
                          >
                            <canvas
                              width="22"
                              height="24"
                              // style="position: absolute; top: 0px; left: 0px;"
                            ></canvas>
                          </div>
                        </div>

                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            // style="width: 16px; height: 18px; position: relative;"
                          >
                            <canvas
                              width="16"
                              height="18"
                              // style="position: absolute; top: 0px; left: 0px;"
                            ></canvas>
                          </div>
                        </div>

                        <p className="user-avatar-badge-text">26</p>
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Sarah Diamond
                    </a>
                  </p>

                  <p className="user-status-text small">24.5K profile views</p>

                  <div className="action-request-list">
                    <div className="action-request accept">
                      <svg className="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="user-status request-small">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/03.jpg"
                          // style="width: 30px; height: 32px; position: relative;"
                        >
                          <canvas
                            width="30"
                            height="32"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          // style="width: 40px; height: 44px; position: relative;"
                        >
                          <canvas
                            width="40"
                            height="44"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          // style="width: 40px; height: 44px; position: relative;"
                        >
                          <canvas
                            width="40"
                            height="44"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            // style="width: 22px; height: 24px; position: relative;"
                          >
                            <canvas
                              width="22"
                              height="24"
                              // style="position: absolute; top: 0px; left: 0px;"
                            ></canvas>
                          </div>
                        </div>

                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            // style="width: 16px; height: 18px; position: relative;"
                          >
                            <canvas
                              width="16"
                              height="18"
                              // style="position: absolute; top: 0px; left: 0px;"
                            ></canvas>
                          </div>
                        </div>

                        <p className="user-avatar-badge-text">16</p>
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Nick Grissom
                    </a>
                  </p>

                  <p className="user-status-text small">20.1K profile views</p>

                  <div className="action-request-list">
                    <div className="action-request accept">
                      <svg className="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="user-status request-small">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/23.jpg"
                          // style="width: 30px; height: 32px; position: relative;"
                        >
                          <canvas
                            width="30"
                            height="32"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          // style="width: 40px; height: 44px; position: relative;"
                        >
                          <canvas
                            width="40"
                            height="44"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          // style="width: 40px; height: 44px; position: relative;"
                        >
                          <canvas
                            width="40"
                            height="44"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            // style="width: 22px; height: 24px; position: relative;"
                          >
                            <canvas
                              width="22"
                              height="24"
                              // style="position: absolute; top: 0px; left: 0px;"
                            ></canvas>
                          </div>
                        </div>

                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            // style="width: 16px; height: 18px; position: relative;"
                          >
                            <canvas
                              width="16"
                              height="18"
                              // style="position: absolute; top: 0px; left: 0px;"
                            ></canvas>
                          </div>
                        </div>

                        <p className="user-avatar-badge-text">19</p>
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Rosie Sakura
                    </a>
                  </p>

                  <p className="user-status-text small">19.7K profile views</p>

                  <div className="action-request-list">
                    <div className="action-request accept">
                      <svg className="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="user-status request-small">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/15.jpg"
                          // style="width: 30px; height: 32px; position: relative;"
                        >
                          <canvas
                            width="30"
                            height="32"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          // style="width: 40px; height: 44px; position: relative;"
                        >
                          <canvas
                            width="40"
                            height="44"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          // style="width: 40px; height: 44px; position: relative;"
                        >
                          <canvas
                            width="40"
                            height="44"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            // style="width: 22px; height: 24px; position: relative;"
                          >
                            <canvas
                              width="22"
                              height="24"
                              // style="position: absolute; top: 0px; left: 0px;"
                            ></canvas>
                          </div>
                        </div>

                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            // style="width: 16px; height: 18px; position: relative;"
                          >
                            <canvas
                              width="16"
                              height="18"
                              // style="position: absolute; top: 0px; left: 0px;"
                            ></canvas>
                          </div>
                        </div>

                        <p className="user-avatar-badge-text">22</p>
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Peter Stark
                    </a>
                  </p>

                  <p className="user-status-text small">16.5K profile views</p>

                  <div className="action-request-list">
                    <div className="action-request accept">
                      <svg className="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="user-status request-small">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/04.jpg"
                          // style="width: 30px; height: 32px; position: relative;"
                        >
                          <canvas
                            width="30"
                            height="32"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          // style="width: 40px; height: 44px; position: relative;"
                        >
                          <canvas
                            width="40"
                            height="44"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          // style="width: 40px; height: 44px; position: relative;"
                        >
                          <canvas
                            width="40"
                            height="44"
                            // style="position: absolute; top: 0px; left: 0px;"
                          ></canvas>
                        </div>
                      </div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            // style="width: 22px; height: 24px; position: relative;"
                          >
                            <canvas
                              width="22"
                              height="24"
                              // style="position: absolute; top: 0px; left: 0px;"
                            ></canvas>
                          </div>
                        </div>

                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            // style="width: 16px; height: 18px; position: relative;"
                          >
                            <canvas
                              width="16"
                              height="18"
                              // style="position: absolute; top: 0px; left: 0px;"
                            ></canvas>
                          </div>
                        </div>

                        <p className="user-avatar-badge-text">6</p>
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Bearded Wonder
                    </a>
                  </p>

                  <p className="user-status-text small">9.8K profile views</p>

                  <div className="action-request-list">
                    <div className="action-request accept">
                      <svg className="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="banner-promo"
            href="https://themeforest.net/user/odin_design"
            target="_blank"
          >
            <img src="img/banner/banner-promo.jpg" alt="banner-promo" />
          </a>

          <div className="widget-box">
            <div className="widget-box-settings">
              <div className="post-settings-wrap">
                <div className="post-settings widget-box-post-settings-dropdown-trigger">
                  <svg className="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots"></use>
                  </svg>
                </div>

                <div
                  className="simple-dropdown widget-box-post-settings-dropdown"
                  // style="position: absolute; z-index: 9999; top: 30px; right: 9px; opacity: 0; visibility: hidden; transform: translate(0px, -20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;"
                >
                  <p className="simple-dropdown-link">Widget Settings</p>
                </div>
              </div>
            </div>

            <p className="widget-box-title">Open Quests</p>

            <div className="widget-box-content">
              <div className="quest-preview-list">
                <div className="quest-preview">
                  <div className="quest-preview-info">
                    <img
                      className="quest-preview-image"
                      src="img/quest/openq-s.png"
                      alt="openq-s"
                    />

                    <p className="quest-preview-title">Nothing to hide</p>

                    <p className="quest-preview-text">
                      You have completed all your profile information fields
                    </p>
                  </div>

                  <div className="progress-stat">
                    <div
                      id="quest-preview-nth"
                      className="progress-stat-bar"
                      // style="width: 218px; height: 4px; position: relative;"
                    >
                      <canvas
                        width="218"
                        height="4"
                        // style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                      <canvas
                        width="218"
                        height="4"
                        // style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                    </div>
                  </div>
                </div>

                <div className="quest-preview">
                  <div className="quest-preview-info">
                    <img
                      className="quest-preview-image"
                      src="img/quest/openq-s.png"
                      alt="openq-s"
                    />

                    <p className="quest-preview-title">Social King</p>

                    <p className="quest-preview-text">
                      You have linked at least 8 social networks to your profile
                    </p>
                  </div>

                  <div className="progress-stat">
                    <div
                      id="quest-preview-sk"
                      className="progress-stat-bar"
                      // style="width: 218px; height: 4px; position: relative;"
                    >
                      <canvas
                        width="218"
                        height="4"
                        // style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                      <canvas
                        width="218"
                        height="4"
                        // style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                    </div>
                  </div>
                </div>

                <div className="quest-preview">
                  <div className="quest-preview-info">
                    <img
                      className="quest-preview-image"
                      src="img/quest/openq-s.png"
                      alt="openq-s"
                    />

                    <p className="quest-preview-title">Buffed Profile</p>

                    <p className="quest-preview-text">
                      You have posted every day for at least 30 days in a row
                    </p>
                  </div>

                  <div className="progress-stat">
                    <div
                      id="quest-preview-bp"
                      className="progress-stat-bar"
                      // style="width: 218px; height: 4px; position: relative;"
                    >
                      <canvas
                        width="218"
                        height="4"
                        // style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                      <canvas
                        width="218"
                        height="4"
                        // style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                    </div>
                  </div>
                </div>

                <div className="quest-preview">
                  <div className="quest-preview-info">
                    <img
                      className="quest-preview-image"
                      src="img/quest/openq-s.png"
                      alt="openq-s"
                    />

                    <p className="quest-preview-title">Hear the People</p>

                    <p className="quest-preview-text">
                      You have created and posted your first poll
                    </p>
                  </div>

                  <div className="progress-stat">
                    <div
                      id="quest-preview-htp"
                      className="progress-stat-bar"
                      // style="width: 218px; height: 4px; position: relative;"
                    >
                      <canvas
                        width="218"
                        height="4"
                        // style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                      <canvas
                        width="218"
                        height="4"
                        // style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                    </div>
                  </div>
                </div>

                <div className="quest-preview">
                  <div className="quest-preview-info">
                    <img
                      className="quest-preview-image"
                      src="img/quest/openq-s.png"
                      alt="openq-s"
                    />

                    <p className="quest-preview-title">Store Manager</p>

                    <p className="quest-preview-text">
                      You have uploaded at least 10 items in your shop
                    </p>
                  </div>

                  <div className="progress-stat">
                    <div
                      id="quest-preview-sm"
                      className="progress-stat-bar"
                      // style="width: 218px; height: 4px; position: relative;"
                    >
                      <canvas
                        width="218"
                        height="4"
                        // style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                      <canvas
                        width="218"
                        height="4"
                        // style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="widget-box-button button small white"
              href="quests.html"
            >
              See all Quests!
            </a>
          </div>
  </div> */}

      {/*  <div className="grid-column">
        <div className="quick-post">
          <div className="quick-post-header">
            <div className="option-items">
              <div className="option-item active">
                <svg className="option-item-icon icon-status">
                  <use xlinkHref="#svg-status"></use>
                </svg>

                <p className="option-item-title">Status</p>
              </div>

              <div className="option-item">
                <svg className="option-item-icon icon-blog-posts">
                  <use xlinkHref="#svg-blog-posts"></use>
                </svg>

                <p className="option-item-title">Blog Post</p>
              </div>

              <div className="option-item">
                <svg className="option-item-icon icon-poll">
                  <use xlinkHref="#svg-poll"></use>
                </svg>

                <p className="option-item-title">Poll</p>
              </div>
            </div>
          </div>

          <div className="quick-post-body">
            <form className="form">
              <div className="form-row">
                <div className="form-item">
                  <div className="form-textarea">
                    <textarea
                      id="quick-post-text"
                      name="quick-post-text"
                      placeholder="Hi Marina! Share your post here..."
                    ></textarea>
                    <p className="form-textarea-limit-text">998/1000</p>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="quick-post-footer">
            <div className="quick-post-footer-actions">
              <div
                className="quick-post-footer-action text-tooltip-tft-medium"
                data-title="Insert Photo"
                // style="position: relative;"
              >
                <svg className="quick-post-footer-action-icon icon-camera">
                  <use xlinkHref="#svg-camera"></use>
                </svg>
                <div
                  className="xm-tooltip"
                  // style="white-space: nowrap; position: absolute; z-index: 99999; top: -32px; left: 50%; margin-left: -42.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"
                >
                  <p className="xm-tooltip-text">Insert Photo</p>
                </div>
              </div>

              <div
                className="quick-post-footer-action text-tooltip-tft-medium"
                data-title="Insert GIF"
                // style="position: relative;"
              >
                <svg className="quick-post-footer-action-icon icon-gif">
                  <use xlinkHref="#svg-gif"></use>
                </svg>
                <div
                  className="xm-tooltip"
                  // style="white-space: nowrap; position: absolute; z-index: 99999; top: -32px; left: 50%; margin-left: -35.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"
                >
                  <p className="xm-tooltip-text">Insert GIF</p>
                </div>
              </div>

              <div
                className="quick-post-footer-action text-tooltip-tft-medium"
                data-title="Insert Tag"
                // style="position: relative;"
              >
                <svg className="quick-post-footer-action-icon icon-tags">
                  <use xlinkHref="#svg-tags"></use>
                </svg>
                <div
                  className="xm-tooltip"
                  // style="white-space: nowrap; position: absolute; z-index: 99999; top: -32px; left: 50%; margin-left: -36.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"
                >
                  <p className="xm-tooltip-text">Insert Tag</p>
                </div>
              </div>
            </div>

            <div className="quick-post-footer-actions">
              <p className="button small void">Discard</p>

              <p className="button small secondary">Post</p>
            </div>
          </div>
        </div>

        {/* <div className="simple-tab-items">
          <form className="form">
            <div className="form-select">
              <select id="newsfeed-filter-category" name="newsfeed_filter_category">
                <option value="0">All Updates</option>
                <option value="1">Mentions</option>
                <option value="2">Friends</option>
                <option value="3">Groups</option>
                <option value="4">Blog Posts</option>
              </select>
              <svg className="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
              </svg>
            </div>
          </form>

          <p className="simple-tab-item active">All Updates</p>

          <p className="simple-tab-item">Mentions</p>

          <p className="simple-tab-item">Friends</p>

          <p className="simple-tab-item">Groups</p>

          <p className="simple-tab-item">Blog Posts</p>
        </div> */}

      {/* <div className="widget-box no-padding">
          <div className="widget-box-settings">
            <div className="post-settings-wrap" style="position: relative;">
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
              </div>

              <div className="simple-dropdown widget-box-post-settings-dropdown" style="position: absolute; z-index: 9999; top: 30px; right: 9px; opacity: 0; visibility: hidden; transform: translate(0px, -20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;">
                <p className="simple-dropdown-link">Edit Post</p>

                <p className="simple-dropdown-link">Delete Post</p>

                <p className="simple-dropdown-link">Make it Featured</p>

                <p className="simple-dropdown-link">Report Post</p>

                <p className="simple-dropdown-link">Report Author</p>
              </div>
            </div>
          </div>
          
          <div className="widget-box-status">
            <div className="widget-box-status-content">
              <div className="user-status">
                <a className="user-status-avatar" href="profile-timeline.html">
                  <div className="user-avatar small no-outline">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-30-32" data-src="img/avatar/05.jpg" style="width: 30px; height: 32px; position: relative;"><canvas width="30" height="32" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" style="width: 16px; height: 18px; position: relative;"><canvas width="16" height="18" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title medium"><a className="bold" href="profile-timeline.html">Neko Bebop</a> uploaded a <span className="bold">video</span></p>
            
                <p className="user-status-text small">2 minutes ago</p>
              </div>

              <p className="widget-box-status-text">Hi to everyone! Check out my latest video of the outlaws expansion for Court Striker GO. I'm really excited because my last video had almost 50.000 views.</p>
            </div>

            <div className="iframe-wrap">
              <iframe src="https://www.youtube.com/embed/rk-wIgg9fNk" allowfullscreen=""></iframe>
            </div>

            <div className="widget-box-status-content">
              <div className="tag-list">
                <a className="tag-item secondary" href="newsfeed.html">Stream</a>

                <a className="tag-item secondary" href="newsfeed.html">StrikerGO</a>

                <a className="tag-item secondary" href="newsfeed.html">Outlaws</a>

                <a className="tag-item secondary" href="newsfeed.html">Gaming</a>
              </div>

              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="meta-line-list reaction-item-list">
                      <div className="reaction-item" style="position: relative;">
                        <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love">
            
                        <div className="simple-dropdown padded reaction-item-dropdown" style="position: absolute; z-index: 9999; bottom: 38px; left: -16px; opacity: 0; visibility: hidden; transform: translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;">
                          <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love"> <span className="bold">Love</span></p>
                        
                          <p className="simple-dropdown-text">Matt Parker</p>

                          <p className="simple-dropdown-text">Destroy Dex</p>

                          <p className="simple-dropdown-text">The Green Goo</p>
                        </div>
                      </div>

                      <div className="reaction-item" style="position: relative;">
                        <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy">
            
                        <div className="simple-dropdown padded reaction-item-dropdown" style="position: absolute; z-index: 9999; bottom: 38px; left: -16px; opacity: 0; visibility: hidden; transform: translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;">
                          <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy"> <span className="bold">Happy</span></p>
                        
                          <p className="simple-dropdown-text">Sandra Strange</p>

                          <p className="simple-dropdown-text">Jane Rodgers</p>
                        </div>
                      </div>

                      <div className="reaction-item" style="position: relative;">
                        <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like">
            
                        <div className="simple-dropdown padded reaction-item-dropdown" style="position: absolute; z-index: 9999; bottom: 38px; left: -16px; opacity: 0; visibility: hidden; transform: translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;">
                          <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like"> <span className="bold">Like</span></p>
                        
                          <p className="simple-dropdown-text">Neko Bebop</p>

                          <p className="simple-dropdown-text">Nick Grissom</p>

                          <p className="simple-dropdown-text">Sarah Diamond</p>

                          <p className="simple-dropdown-text">Jett Spiegel</p>

                          <p className="simple-dropdown-text">Marcus Jhonson</p>

                          <p className="simple-dropdown-text"><span className="bold">and 6 more...</span></p>
                        </div>
                      </div>
                    </div>
            
                    <p className="meta-line-text">16</p>
                  </div>
            
                  <div className="meta-line">
                    <div className="meta-line-list user-avatar-list">
                      <div className="user-avatar micro no-stats">
                        <div className="user-avatar-border">
                          <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        </div>
                    
                        <div className="user-avatar-content">
                          <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg" style="width: 18px; height: 20px; position: relative;"><canvas width="18" height="20" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        </div>
                      </div>
            
                      <div className="user-avatar micro no-stats">
                        <div className="user-avatar-border">
                          <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        </div>
                    
                        <div className="user-avatar-content">
                          <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg" style="width: 18px; height: 20px; position: relative;"><canvas width="18" height="20" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        </div>
                      </div>
            
                      <div className="user-avatar micro no-stats">
                        <div className="user-avatar-border">
                          <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        </div>
                    
                        <div className="user-avatar-content">
                          <div className="hexagon-image-18-20" data-src="img/avatar/22.jpg" style="width: 18px; height: 20px; position: relative;"><canvas width="18" height="20" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        </div>
                      </div>
            
                      <div className="user-avatar micro no-stats">
                        <div className="user-avatar-border">
                          <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        </div>
                    
                        <div className="user-avatar-content">
                          <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg" style="width: 18px; height: 20px; position: relative;"><canvas width="18" height="20" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        </div>
                      </div>
            
                      <div className="user-avatar micro no-stats">
                        <div className="user-avatar-border">
                          <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        </div>
                    
                        <div className="user-avatar-content">
                          <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg" style="width: 18px; height: 20px; position: relative;"><canvas width="18" height="20" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        </div>
                      </div>
                    </div>
            
                    <p className="meta-line-text">19 Participants</p>
                  </div>
                </div>
            
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-link">2 Comments</p>
                  </div>
            
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="post-options">
            <div className="post-option-wrap" style="position: relative;">
              <div className="post-option reaction-options-dropdown-trigger">
                <svg className="post-option-icon icon-thumbs-up">
                  <use xlinkHref="#svg-thumbs-up"></use>
                </svg>

                <p className="post-option-text">React!</p>
              </div>

              <div className="reaction-options reaction-options-dropdown" style="position: absolute; z-index: 9999; bottom: 54px; left: -16px; opacity: 0; visibility: hidden; transform: translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;">
                <div className="reaction-option text-tooltip-tft" data-title="Like" style="position: relative;">
                  <img className="reaction-option-image" src="img/reaction/like.png" alt="reaction-like">
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -22px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"><p className="xm-tooltip-text">Like</p></div></div>

                <div className="reaction-option text-tooltip-tft" data-title="Love" style="position: relative;">
                  <img className="reaction-option-image" src="img/reaction/love.png" alt="reaction-love">
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -23.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"><p className="xm-tooltip-text">Love</p></div></div>

                <div className="reaction-option text-tooltip-tft" data-title="Dislike" style="position: relative;">
                  <img className="reaction-option-image" src="img/reaction/dislike.png" alt="reaction-dislike">
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -28px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"><p className="xm-tooltip-text">Dislike</p></div></div>

                <div className="reaction-option text-tooltip-tft" data-title="Happy" style="position: relative;">
                  <img className="reaction-option-image" src="img/reaction/happy.png" alt="reaction-happy">
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -27.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"><p className="xm-tooltip-text">Happy</p></div></div>

                <div className="reaction-option text-tooltip-tft" data-title="Funny" style="position: relative;">
                  <img className="reaction-option-image" src="img/reaction/funny.png" alt="reaction-funny">
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -27px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"><p className="xm-tooltip-text">Funny</p></div></div>

                <div className="reaction-option text-tooltip-tft" data-title="Wow" style="position: relative;">
                  <img className="reaction-option-image" src="img/reaction/wow.png" alt="reaction-wow">
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -24px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"><p className="xm-tooltip-text">Wow</p></div></div>

                <div className="reaction-option text-tooltip-tft" data-title="Angry" style="position: relative;">
                  <img className="reaction-option-image" src="img/reaction/angry.png" alt="reaction-angry">
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -26.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"><p className="xm-tooltip-text">Angry</p></div></div>

                <div className="reaction-option text-tooltip-tft" data-title="Sad" style="position: relative;">
                  <img className="reaction-option-image" src="img/reaction/sad.png" alt="reaction-sad">
                <div className="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -28px; left: 50%; margin-left: -21.5px; opacity: 0; visibility: hidden; transform: translate(0px, 10px); transition: 0.3s ease-in-out;"><p className="xm-tooltip-text">Sad</p></div></div>
              </div>
            </div>

            <div className="post-option">
              <svg className="post-option-icon icon-comment">
                <use xlinkHref="#svg-comment"></use>
              </svg>

              <p className="post-option-text">Comment</p>
            </div>

            <div className="post-option">
              <svg className="post-option-icon icon-share">
                <use xlinkHref="#svg-share"></use>
              </svg>

              <p className="post-option-text">Share</p>
            </div>
          </div>
      </div> */}

      {/* <div className="grid-column">
        <div className="stats-box-slider">
          <div className="stats-box-slider-controls">
            <p className="stats-box-slider-controls-title">Stats Box</p>
      
            <div id="stats-box-slider-controls" className="slider-controls" aria-label="Carousel Navigation" tabindex="0">
              <div className="slider-control negative left" aria-controls="stats-box-slider-items" tabindex="-1" data-controls="prev">
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
              </div>
      
              <div className="slider-control negative right" aria-controls="stats-box-slider-items" tabindex="-1" data-controls="next">
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="tns-outer" id="stats-box-slider-items-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">5</span>  of 4</div><div className="tns-inner" id="stats-box-slider-items-iw"><div id="stats-box-slider-items" className="stats-box-slider-items tns-slider tns-gallery tns-subpixel tns-calc tns-horizontal">
            <div className="stats-box stat-profile-views tns-item tns-normal" id="stats-box-slider-items-item0" style="" aria-hidden="true" tabindex="-1">
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
      
            <div className="stats-box stat-posts-created tns-item tns-normal" id="stats-box-slider-items-item1" style="" aria-hidden="true" tabindex="-1">
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
      
            <div className="stats-box stat-reactions-received tns-item tns-normal" id="stats-box-slider-items-item2" style="" aria-hidden="true" tabindex="-1">
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
      
            <div className="stats-box stat-comments-received tns-item tns-fadeOut" id="stats-box-slider-items-item3" style="left: 0%;" aria-hidden="true" tabindex="-1">
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
          <div className="stats-box stat-profile-views tns-item tns-slide-active tns-fadeIn" style="left: 0%;">
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
            </div></div></div></div>
        </div>

        <div className="widget-box">
          <div className="widget-box-controls">
            <div id="reaction-stat-slider-controls" className="slider-controls" aria-label="Carousel Navigation" tabindex="0">
              <div className="slider-control left" aria-controls="reaction-stat-slider-items" tabindex="-1" data-controls="prev">
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
              </div>
      
              <div className="slider-control right" aria-controls="reaction-stat-slider-items" tabindex="-1" data-controls="next">
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
              </div>
            </div>
          </div>
      
          <p className="widget-box-title">Reactions Received</p>
      
          <div className="widget-box-content">
            <div className="tns-outer" id="reaction-stat-slider-items-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">3</span>  of 2</div><div id="reaction-stat-slider-items-mw" className="tns-ovh"><div className="tns-inner" id="reaction-stat-slider-items-iw"><div id="reaction-stat-slider-items" className="widget-box-content-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" style="transition-duration: 0s; transform: translate3d(-33.3333%, 0px, 0px);"><div className="widget-box-content-slider-item tns-item" aria-hidden="true" tabindex="-1">
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/like.png" alt="reaction-like">
          
                    <p className="reaction-stat-title">12.642</p>
          
                    <p className="reaction-stat-text">Likes</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/love.png" alt="reaction-love">
          
                    <p className="reaction-stat-title">8.913</p>
          
                    <p className="reaction-stat-text">Loves</p>
                  </div>
                </div>
          
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/dislike.png" alt="reaction-dislike">
          
                    <p className="reaction-stat-title">945</p>
          
                    <p className="reaction-stat-text">Dislikes</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/happy.png" alt="reaction-happy">
          
                    <p className="reaction-stat-title">7.034</p>
          
                    <p className="reaction-stat-text">Happy</p>
                  </div>
                </div>
              </div><div className="widget-box-content-slider-item tns-item" aria-hidden="true" tabindex="-1">
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/funny.png" alt="reaction-funny">
          
                    <p className="reaction-stat-title">2.356</p>
          
                    <p className="reaction-stat-text">Funny</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/wow.png" alt="reaction-wow">
          
                    <p className="reaction-stat-title">5.944</p>
          
                    <p className="reaction-stat-text">Wow!</p>
                  </div>
                </div>
          
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/angry.png" alt="reaction-angry">
          
                    <p className="reaction-stat-title">1.706</p>
          
                    <p className="reaction-stat-text">Angry</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/sad.png" alt="reaction-sad">
          
                    <p className="reaction-stat-title">801</p>
          
                    <p className="reaction-stat-text">Sad</p>
                  </div>
                </div>
              </div>
              <div className="widget-box-content-slider-item tns-item tns-slide-active" id="reaction-stat-slider-items-item0">
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/like.png" alt="reaction-like">
          
                    <p className="reaction-stat-title">12.642</p>
          
                    <p className="reaction-stat-text">Likes</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/love.png" alt="reaction-love">
          
                    <p className="reaction-stat-title">8.913</p>
          
                    <p className="reaction-stat-text">Loves</p>
                  </div>
                </div>
          
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/dislike.png" alt="reaction-dislike">
          
                    <p className="reaction-stat-title">945</p>
          
                    <p className="reaction-stat-text">Dislikes</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/happy.png" alt="reaction-happy">
          
                    <p className="reaction-stat-title">7.034</p>
          
                    <p className="reaction-stat-text">Happy</p>
                  </div>
                </div>
              </div>
      
              <div className="widget-box-content-slider-item tns-item" id="reaction-stat-slider-items-item1" aria-hidden="true" tabindex="-1">
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/funny.png" alt="reaction-funny">
          
                    <p className="reaction-stat-title">2.356</p>
          
                    <p className="reaction-stat-text">Funny</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/wow.png" alt="reaction-wow">
          
                    <p className="reaction-stat-title">5.944</p>
          
                    <p className="reaction-stat-text">Wow!</p>
                  </div>
                </div>
          
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/angry.png" alt="reaction-angry">
          
                    <p className="reaction-stat-title">1.706</p>
          
                    <p className="reaction-stat-text">Angry</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/sad.png" alt="reaction-sad">
          
                    <p className="reaction-stat-title">801</p>
          
                    <p className="reaction-stat-text">Sad</p>
                  </div>
                </div>
              </div>
            <div className="widget-box-content-slider-item tns-item" aria-hidden="true" tabindex="-1">
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/like.png" alt="reaction-like">
          
                    <p className="reaction-stat-title">12.642</p>
          
                    <p className="reaction-stat-text">Likes</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/love.png" alt="reaction-love">
          
                    <p className="reaction-stat-title">8.913</p>
          
                    <p className="reaction-stat-text">Loves</p>
                  </div>
                </div>
          
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/dislike.png" alt="reaction-dislike">
          
                    <p className="reaction-stat-title">945</p>
          
                    <p className="reaction-stat-text">Dislikes</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/happy.png" alt="reaction-happy">
          
                    <p className="reaction-stat-title">7.034</p>
          
                    <p className="reaction-stat-text">Happy</p>
                  </div>
                </div>
              </div><div className="widget-box-content-slider-item tns-item" aria-hidden="true" tabindex="-1">
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/funny.png" alt="reaction-funny">
          
                    <p className="reaction-stat-title">2.356</p>
          
                    <p className="reaction-stat-text">Funny</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/wow.png" alt="reaction-wow">
          
                    <p className="reaction-stat-title">5.944</p>
          
                    <p className="reaction-stat-text">Wow!</p>
                  </div>
                </div>
          
                <div className="reaction-stats">
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/angry.png" alt="reaction-angry">
          
                    <p className="reaction-stat-title">1.706</p>
          
                    <p className="reaction-stat-text">Angry</p>
                  </div>
          
                  <div className="reaction-stat">
                    <img className="reaction-stat-image" src="img/reaction/sad.png" alt="reaction-sad">
          
                    <p className="reaction-stat-title">801</p>
          
                    <p className="reaction-stat-text">Sad</p>
                  </div>
                </div>
              </div></div></div></div></div>
          </div>
        </div>

        <div className="widget-box no-padding">
          <div className="widget-box-controls">
            <div className="slider-controls">
              <div className="slider-control left">
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
              </div>
      
              <div className="slider-control right">
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
              </div>
            </div>
          </div>
      
          <p className="widget-box-title">August 2019</p>
      
          <div className="widget-box-content">
            <div className="calendar small">
              <div className="calendar-week">
                <p className="calendar-week-day"><span className="week-day-short">Sun</span><span className="week-day-long">Sunday</span></p>
          
                <p className="calendar-week-day"><span className="week-day-short">Mon</span><span className="week-day-long">Monday</span></p>
          
                <p className="calendar-week-day"><span className="week-day-short">Tue</span><span className="week-day-long">Tuesday</span></p>
          
                <p className="calendar-week-day"><span className="week-day-short">Wed</span><span className="week-day-long">Wednesday</span></p>
          
                <p className="calendar-week-day"><span className="week-day-short">Thu</span><span className="week-day-long">Thursday</span></p>
          
                <p className="calendar-week-day"><span className="week-day-short">Fri</span><span className="week-day-long">Friday</span></p>
          
                <p className="calendar-week-day"><span className="week-day-short">Sat</span><span className="week-day-long">Saturday</span></p>
              </div>
          
              <div className="calendar-days">
                <div className="calendar-day-row">
                  <div className="calendar-day inactive">
                    <p className="calendar-day-number">29</p>
                  </div>
          
                  <div className="calendar-day inactive">
                    <p className="calendar-day-number">30</p>
                  </div>
          
                  <div className="calendar-day inactive">
                    <p className="calendar-day-number">31</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">1</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">2</p>
          
                    <div className="calendar-day-events">
                      <p className="calendar-day-event primary"><span className="calendar-day-event-text">Dex's Birthday</span></p>
          
                      <p className="calendar-day-event secondary"><span className="calendar-day-event-text">Sara's Big Stream</span></p>
          
                      <p className="calendar-day-event secondary"><span className="calendar-day-event-text">Striker GO Release</span></p>
                    </div>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">3</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">4</p>
                  </div>
                </div>
          
                <div className="calendar-day-row">
                  <div className="calendar-day">
                    <p className="calendar-day-number">5</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">6</p>
                  </div>
          
                  <div className="calendar-day current">
                    <p className="calendar-day-number">7</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">8</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">9</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">10</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">11</p>
                  </div>
                </div>
          
                <div className="calendar-day-row">
                  <div className="calendar-day">
                    <p className="calendar-day-number">12</p>
                  </div>
          
                  <div className="calendar-day active">
                    <p className="calendar-day-number">13</p>
          
                    <div className="calendar-day-events">
                      <p className="calendar-day-event secondary"><span className="calendar-day-event-text">Breakfast with Neko</span></p>
          
                      <p className="calendar-day-event primary"><span className="calendar-day-event-text">Streaming Party</span></p>
                    </div>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">14</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">15</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">16</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">17</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">18</p>
                  </div>
                </div>
          
                <div className="calendar-day-row">
                  <div className="calendar-day">
                    <p className="calendar-day-number">19</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">20</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">21</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">22</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">23</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">24</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">25</p>
                  </div>
                </div>
          
                <div className="calendar-day-row">
                  <div className="calendar-day">
                    <p className="calendar-day-number">26</p>
          
                    <div className="calendar-day-events">
                      <p className="calendar-day-event primary"><span className="calendar-day-event-text">CosWorld 2019 After...</span></p>
                    </div>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">27</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">28</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">29</p>
                  </div>
          
                  <div className="calendar-day">
                    <p className="calendar-day-number">30</p>
                  </div>
          
                  <div className="calendar-day inactive">
                    <p className="calendar-day-number">1</p>
                  </div>
          
                  <div className="calendar-day inactive">
                    <p className="calendar-day-number">2</p>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="calendar-events-preview small">
              <p className="calendar-events-preview-title">Monday 13th</p>
          
              <div className="calendar-event-preview-list">
                <div className="calendar-event-preview small secondary">
                  <div className="calendar-event-preview-start-time">
                    <p className="calendar-event-preview-start-time-title">8:30</p>
          
                    <p className="calendar-event-preview-start-time-text">AM</p>
                  </div>
          
                  <div className="calendar-event-preview-info">
                    <p className="calendar-event-preview-title">Breakfast with Neko</p>
          
                    <p className="calendar-event-preview-text">Hi Neko! I'm creating this event to invite you to have breakfast before work. Meet me at Coffebucks.</p>
                  </div>
                </div>
          
                <div className="calendar-event-preview small primary">
                  <div className="calendar-event-preview-start-time">
                    <p className="calendar-event-preview-start-time-title">10:00</p>
          
                    <p className="calendar-event-preview-start-time-text">PM</p>
                  </div>
          
                  <div className="calendar-event-preview-info">
                    <p className="calendar-event-preview-title">Streaming Party</p>
          
                    <p className="calendar-event-preview-text">The biggest party for Twitch streamers! Come and join us at Shenron Arena.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="widget-box">
          <div className="widget-box-settings">
            <div className="post-settings-wrap" style="position: relative;">
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
              </div>
      
              <div className="simple-dropdown widget-box-post-settings-dropdown" style="position: absolute; z-index: 9999; top: 30px; right: 9px; opacity: 0; visibility: hidden; transform: translate(0px, -20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;">
                <p className="simple-dropdown-link">Widget Settings</p>
              </div>
            </div>
          </div>
      
          <p className="widget-box-title">Friends Activity</p>
      
          <div className="widget-box-content">
            <div className="user-status-list">
              <div className="user-status">
                <a className="user-status-avatar" href="profile-timeline.html">
                  <div className="user-avatar small no-outline">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-30-32" data-src="img/avatar/05.jpg" style="width: 30px; height: 32px; position: relative;"><canvas width="30" height="32" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" style="width: 16px; height: 18px; position: relative;"><canvas width="16" height="18" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title"><a className="bold" href="profile-timeline.html">Neko Bebop</a> commented on Destroy Dex's <a className="highlighted" href="profile-timeline.html">photo</a></p>
            
                <p className="user-status-timestamp">3 minutes ago</p>
              </div>
      
              <div className="user-status">
                <a className="user-status-avatar" href="profile-timeline.html">
                  <div className="user-avatar small no-outline">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-30-32" data-src="img/avatar/03.jpg" style="width: 30px; height: 32px; position: relative;"><canvas width="30" height="32" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" style="width: 16px; height: 18px; position: relative;"><canvas width="16" height="18" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <p className="user-avatar-badge-text">16</p>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title"><a className="bold" href="profile-timeline.html">Nick Grissom</a> liked Marina Valentine's <a className="highlighted" href="profile-timeline.html">status update</a></p>
            
                <p className="user-status-timestamp">12 minutes ago</p>
              </div>
      
              <div className="user-status">
                <a className="user-status-avatar" href="profile-timeline.html">
                  <div className="user-avatar small no-outline">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-30-32" data-src="img/avatar/10.jpg" style="width: 30px; height: 32px; position: relative;"><canvas width="30" height="32" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" style="width: 16px; height: 18px; position: relative;"><canvas width="16" height="18" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <p className="user-avatar-badge-text">5</p>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title"><a className="bold" href="profile-timeline.html">The Green Goo</a> liked Nick Grissom's <a className="highlighted" href="profile-timeline.html">video</a></p>
            
                <p className="user-status-timestamp">17 minutes ago</p>
              </div>
      
              <div className="user-status">
                <a className="user-status-avatar" href="profile-timeline.html">
                  <div className="user-avatar small no-outline">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-30-32" data-src="img/avatar/03.jpg" style="width: 30px; height: 32px; position: relative;"><canvas width="30" height="32" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" style="width: 16px; height: 18px; position: relative;"><canvas width="16" height="18" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <p className="user-avatar-badge-text">16</p>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title"><a className="bold" href="profile-timeline.html">Nick Grissom</a> changed his <a className="highlighted" href="profile-timeline.html">profile picture</a></p>
            
                <p className="user-status-timestamp">33 minutes ago</p>
              </div>
      
              <div className="user-status">
                <a className="user-status-avatar" href="profile-timeline.html">
                  <div className="user-avatar small no-outline">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-30-32" data-src="img/avatar/02.jpg" style="width: 30px; height: 32px; position: relative;"><canvas width="30" height="32" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" style="width: 16px; height: 18px; position: relative;"><canvas width="16" height="18" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                      </div>
                
                      <p className="user-avatar-badge-text">19</p>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title"><a className="bold" href="profile-timeline.html">Destroy Dex</a> commented on Rosie Sakura's <a className="highlighted" href="profile-timeline.html">profile</a></p>
            
                <p className="user-status-timestamp">41 minutes ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="widget-box">
          <div className="widget-box-settings">
            <div className="post-settings-wrap" style="position: relative;">
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
              </div>
      
              <div className="simple-dropdown widget-box-post-settings-dropdown" style="position: absolute; z-index: 9999; top: 30px; right: 9px; opacity: 0; visibility: hidden; transform: translate(0px, -20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;">
                <p className="simple-dropdown-link">Widget Settings</p>
              </div>
            </div>
          </div>
      
          <p className="widget-box-title">Groups</p>
      
          <div className="widget-box-content">
            <div className="filters">
              <p className="filter">Newest</p>
      
              <p className="filter active">Popular</p>
      
              <p className="filter">Active</p>
            </div>
      
            <div className="user-status-list">
              <div className="user-status request-small">
                <a className="user-status-avatar" href="group-timeline.html">
                  <div className="user-avatar small no-border">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-40-44" data-src="img/avatar/29.jpg" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title"><a className="bold" href="group-timeline.html">Twitch Streamers</a></p>
            
                <p className="user-status-text small">265 members</p>
            
                <div className="action-request-list">
                  <div className="action-request accept">
                    <svg className="action-request-icon icon-join-group">
                      <use xlinkHref="#svg-join-group"></use>
                    </svg>
                  </div>
                </div>
              </div>
      
              <div className="user-status request-small">
                <a className="user-status-avatar" href="group-timeline.html">
                  <div className="user-avatar small no-border">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-40-44" data-src="img/avatar/24.jpg" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title"><a className="bold" href="group-timeline.html">Cosplayers of the World</a></p>
            
                <p className="user-status-text small">139 members</p>
            
                <div className="action-request-list">
                  <div className="action-request accept">
                    <svg className="action-request-icon icon-join-group">
                      <use xlinkHref="#svg-join-group"></use>
                    </svg>
                  </div>
                </div>
              </div>
      
              <div className="user-status request-small">
                <a className="user-status-avatar" href="group-timeline.html">
                  <div className="user-avatar small no-border">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-40-44" data-src="img/avatar/25.jpg" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title"><a className="bold" href="group-timeline.html">Stream Designers</a></p>
            
                <p className="user-status-text small">466 members</p>
            
                <div className="action-request-list">
                  <div className="action-request accept">
                    <svg className="action-request-icon icon-join-group">
                      <use xlinkHref="#svg-join-group"></use>
                    </svg>
                  </div>
                </div>
              </div>
      
              <div className="user-status request-small">
                <a className="user-status-avatar" href="group-timeline.html">
                  <div className="user-avatar small no-border">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-40-44" data-src="img/avatar/28.jpg" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title"><a className="bold" href="group-timeline.html">Street Artists</a></p>
            
                <p className="user-status-text small">951 members</p>
            
                <div className="action-request-list">
                  <div className="action-request decline">
                    <svg className="action-request-icon icon-leave-group">
                      <use xlinkHref="#svg-leave-group"></use>
                    </svg>
                  </div>
                </div>
              </div>
      
              <div className="user-status request-small">
                <a className="user-status-avatar" href="group-timeline.html">
                  <div className="user-avatar small no-border">
                    <div className="user-avatar-content">
                      <div className="hexagon-image-40-44" data-src="img/avatar/27.jpg" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                    </div>
                  </div>
                </a>
            
                <p className="user-status-title"><a className="bold" href="group-timeline.html">Gaming Watchtower</a></p>
            
                <p className="user-status-text small">2.365 members</p>
            
                <div className="action-request-list">
                  <div className="action-request accept">
                    <svg className="action-request-icon icon-join-group">
                      <use xlinkHref="#svg-join-group"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div> */}
    </div>
  );
};

export default Test;
