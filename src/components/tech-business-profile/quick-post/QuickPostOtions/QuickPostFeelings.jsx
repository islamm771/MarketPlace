import { useState } from "react";
import { MdCardTravel, MdClose } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { PiTelevisionThin } from "react-icons/pi";
import { IoIosFootball } from "react-icons/io";
import { FaHeadphonesSimple } from "react-icons/fa6";

const feelingsEmoji = [
  {
    title: "Happy",
    icon: "😁",
  },
  {
    title: "Loved",
    icon: "😍",
  },
  {
    title: "Sad",
    icon: "😢",
  },
  {
    title: "Very sad",
    icon: "😭",
  },
  {
    title: "Angry",
    icon: "😡",
  },
  {
    title: "Confused",
    icon: "😕",
  },
  {
    title: "Hot",
    icon: "😓",
  },
  {
    title: "Broken",
    icon: "💔",
  },
  {
    title: "expressionless",
    icon: "😑",
  },
  {
    title: "Cool",
    icon: "😎",
  },
  {
    title: "Funny",
    icon: "😂",
  },
  {
    title: "Tired",
    icon: "😴",
  },
  {
    title: "Lovely",
    icon: "😘",
  },
  {
    title: "Blessed",
    icon: "🙏",
  },
  {
    title: "Shocked",
    icon: "😱",
  },
  {
    title: "Sleepy",
    icon: "😪",
  },
  {
    title: "Pretty",
    icon: "😊",
  },
  {
    title: "Bored",
    icon: "😒",
  },
];

const QuickPostFeelings = () => {
  const [feelingsIsOpen, setFeelingsIsOpen] = useState(false);
  const [activeFeeling, setActiveFeeling] = useState(null);
  const [activeEmoji, setActiveEmoji] = useState(null);

  const mainFeelingsOptions = [
    {
      icon: <BsEmojiSmile fill="#009da0" />,
      title: "Feeling",
    },
    {
      icon: <MdCardTravel fill="#3F51B5" />,
      title: "Traveling",
    },
    {
      icon: <PiTelevisionThin fill="#E91E63" />,
      title: "Watching",
    },
    {
      icon: <IoIosFootball fill="#FF9800" />,
      title: "Playing",
    },
    {
      icon: <FaHeadphonesSimple fill="#03A9F4" />,
      title: "Listening",
    },
  ];

  return (
    <div className={`feelings-content`}>
      {activeFeeling ? (
        <div className="feelings-head">
          <button
            className="feelings-head-btn"
            onClick={() => setFeelingsIsOpen(!feelingsIsOpen)}
          >
            {activeFeeling}
          </button>

          {activeEmoji && activeFeeling === "Feeling" ? (
            <span
              className="feelings-emoji-active"
              onClick={() => setActiveEmoji(null)}
            >
              {activeEmoji}
            </span>
          ) : activeFeeling === "Feeling" ? (
            <span className="feelings-emoji-active">
              What are you Feelings ?
            </span>
          ) : (
            <input
              type="text"
              className="feelings-head-input"
              placeholder={`What are you ${activeFeeling.toLowerCase()}?`}
            />
          )}

          <button
            className="feelings-head-close-btn"
            onClick={() => {
              setFeelingsIsOpen(!feelingsIsOpen);
              setActiveFeeling(null);
            }}
          >
            <MdClose />
          </button>
        </div>
      ) : (
        <button
          className="feelings-action-btn"
          onClick={() => setFeelingsIsOpen(!feelingsIsOpen)}
        >
          What are you doing?
        </button>
      )}

      <div className={`feelings-body ${feelingsIsOpen ? "active" : ""}`}>
        {mainFeelingsOptions.map((option, index) => (
          <button
            className="feelings-option"
            key={index}
            onClick={() => {
              setActiveFeeling(option.title);
              setFeelingsIsOpen(false);
            }}
          >
            {option.icon} {option.title}
          </button>
        ))}
      </div>

      <div
        className={`feelings-body feelings-emoji ${
          activeFeeling === "Feeling" && !activeEmoji ? "active" : ""
        }`}
      >
        {feelingsEmoji.map((emoji, index) => (
          <button
            className="feelings-emoji-item feelings-option"
            key={index}
            onClick={() => setActiveEmoji(`${emoji.icon} ${emoji.title}`)}
          >
            {emoji.icon} {emoji.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickPostFeelings;
