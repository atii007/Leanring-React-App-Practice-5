import React, { useState } from "react";

const TopicsList = () => {
  const [activeTab, setActiveTab] = useState("design");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const listItems = [
    { id: "design", title: "Design" },
    { id: "marketing", title: "Marketing" },
    { id: "finance", title: "Finance" },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {listItems.map((item) => (
            <li className="nav-item" role="presentation" key={item.id}>
              <button
                className={`nav-link ${activeTab === item.id ? "active" : ""}`}
                id={`${item.id}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${item.id}-tab-pane`}
                type="button"
                role="tab"
                aria-controls={`${item.id}-tab-pane`}
                aria-selected={activeTab === item.id}
                onClick={() => handleTabClick(item.id)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicsList;
