import QuickPost from "../quick-post/QuickPost";
import ProfileCompletion from "../timeline-widget/ProfileCompletion";
import StatsBoxSlider from "../stats-box-slider/StatsBoxSlider";

const BusinessTimeline = () => {
  return (
    <div className="grid grid-3-6-3 mobile-prefer-content timeline-content">
      <div className="grid-column">
        <ProfileCompletion />
      </div>

      <div className="grid-column">
        <QuickPost />
      </div>

      <div className="grid-column">
        <StatsBoxSlider />
      </div>
    </div>
  );
};

export default BusinessTimeline;
