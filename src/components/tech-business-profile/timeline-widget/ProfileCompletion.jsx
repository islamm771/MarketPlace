import "./timeline-widget.css";
import { Progress } from "antd";

const ProfileCompletion = () => {
  return (
    <div className="widget-box">
      <div className="progress-arc-summary">
        <div className="progress-arc-wrap">
          <div className="progress-arc">
            <Progress
              type="circle"
              percent={59}
              size={140}
              strokeColor={"#ff6728"}
              strokeWidth={8}
              showInfo={false}
            />
          </div>

          <div className="progress-arc-info">
            <p className="progress-arc-title">59%</p>
          </div>
        </div>

        <div className="progress-arc-summary-info">
          <p className="progress-arc-summary-title">Profile Completion</p>

          <p className="progress-arc-summary-subtitle">Marina Valentine</p>

          <p className="progress-arc-summary-text">
            Complete your profile by filling profile info fields, completing
            quests &amp; unlocking badges
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
            src="/img/badge/completedq-s.png"
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
            src="/img/badge/unlocked-badge.png"
            alt="bdage-unlocked-badge"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;
