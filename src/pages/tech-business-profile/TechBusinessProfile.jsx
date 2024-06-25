import "./TechBusinessProfile.css";

import { useState } from "react";
import Slider from "../../components/ui/slider/slider";

import TechBusinessProfileHeader from "../../components/tech-business-profile/TechBusinessProfileHeader/TechBusinessProfileHeader";
import BusinessProfileMember from "../../components/tech-business-profile/tabs-content/BusinessProfileMember";
import BusinessTimeline from "../../components/tech-business-profile/tabs-content/BusinessTimeline.jsx";
import BusinessRating from "../../components/tech-business-profile/tabs-content/BusinessRating";


const tabItems = [
  {
    name: "Timeline",
    select: "timeline",
    icon: (
      <svg className="section-menu-item-icon icon-timeline">
        <use xlinkHref="#svg-timeline"></use>
      </svg>
    ),
  },
  {
    name: "Store",
    select: "store",
    icon: (
      <svg className="section-menu-item-icon icon-blog-posts">
        <use xlinkHref="#svg-blog-posts"></use>
      </svg>
    ),
  },
  {
    name: "Services",
    select: "services",
    icon: (
      <svg className="section-menu-item-icon icon-videos">
        <use xlinkHref="#svg-settings"></use>
      </svg>
    ),
  },
  {
    name: "Jobs",
    select: "jobs",
    icon: (
      <svg
        className="section-menu-item-icon job-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          fill="none"
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          ry="2"
        ></rect>
        <path fill="none" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    name: "Offers",
    select: "offers",
    icon: (
      <svg
        className="section-menu-item-icon icon-offers"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"></path>
      </svg>
    ),
  },
  {
    name: "Ratings",
    select: "ratings",
    icon: (
      <svg className="section-menu-item-icon icon-info">
        <use xlinkHref="#svg-star"></use>
      </svg>
    ),
  },
  {
    name: "Info",
    select: "info",
    icon: (
      <svg className="section-menu-item-icon icon-info">
        <use xlinkHref="#svg-info"></use>
      </svg>
    ),
  },
  {
    name: "Members",
    select: "members",
    icon: (
      <svg className="section-menu-item-icon icon-members">
        <use xlinkHref="#svg-members"></use>
      </svg>
    ),
  },
  {
    name: "Photos",
    select: "photos",
    icon: (
      <svg className="section-menu-item-icon icon-photos">
        <use xlinkHref="#svg-photos"></use>
      </svg>
    ),
  },
  {
    name: "Videos",
    select: "videos",
    icon: (
      <svg className="section-menu-item-icon icon-videos">
        <use xlinkHref="#svg-videos"></use>
      </svg>
    ),
  },
  {
    name: "Events",
    select: "events",
    icon: (
      <svg className="section-menu-item-icon icon-events">
        <use xlinkHref="#svg-events"></use>
      </svg>
    ),
  },
];

const TechBusinessProfile = () => {
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <section className="group-timeline-page">
      <TechBusinessProfileHeader />

      <Slider
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
      />

      {activeTab === "timeline" ? (
        <BusinessTimeline />
      ) : activeTab === "members" ? (
        <BusinessProfileMember />
      ) : activeTab === "ratings" ? (
        <BusinessRating />
      ) : (
        activeTab
      )}
    </section>
  );
};

export default TechBusinessProfile;
