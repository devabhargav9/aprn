import React, { useState } from "react";
import "./styles.css";

const ToggleTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => setActiveTab("tab1");
  const handleTab2 = () => setActiveTab("tab2");

  return (
    <div className="toggle-tabs-container">
      <div className="toggle-tabs">
        <button
          className={`tab ${activeTab === "tab1" ? "active" : ""}`}
          onClick={handleTab1}
        >
          Tab 1
        </button>
        <button
          className={`tab ${activeTab === "tab2" ? "active" : ""}`}
          onClick={handleTab2}
        >
          Tab 2
        </button>
      </div>
      <div className="content">
        {activeTab === "tab1" && <div>Content for Tab 1</div>}
        {activeTab === "tab2" && <div>Content for Tab 2</div>}
      </div>
    </div>
  );
};

export default ToggleTabs;
