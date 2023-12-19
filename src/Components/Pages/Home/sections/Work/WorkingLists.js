import React from "react";

const details = [
  {
    title: "Search your favourite topic",
    icon: "bi-search",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    title: "Bookmark &amp; Keep it for yourself",
    icon: "bi-bookmark",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Read &amp; Enjoy",
    icon: "bi-book",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const WorkingList = () => {
  return (
    <div className="col-lg-10 col-12 mx-auto">
      <div className="timeline-container">
        <ul
          className="vertical-scrollable-timeline"
          id="vertical-scrollable-timeline"
        >
          <div className="list-progress">
            <div className="inner" />
          </div>
          {details.map((det) => (
            <li>
              <h4 className="text-white mb-3">{det.title}</h4>
              <p className="text-white">{det.description}</p>
              <div className="icon-holder">
                <i className={det.icon}></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkingList;
