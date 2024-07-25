"use client";

// components/Tabs.js
import { useState } from "react";

export default function Tabs({ Name, Email, Worth, Country, slug }) {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="max-w-2xl mx-auto">
      <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <ul className="flex flex-wrap -mb-px" role="tablist">
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 ${
                activeTab === "about" ? "border-b-2 border-gray-300" : ""
              }`}
              onClick={() => setActiveTab("about")}
              role="tab"
              aria-controls="about"
              aria-selected={activeTab === "about"}
            >
              About Startup
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 ${
                activeTab === "owners" ? "border-b-2 border-gray-300" : ""
              }`}
              onClick={() => setActiveTab("owners")}
              role="tab"
              aria-controls="owners"
              aria-selected={activeTab === "owners"}
            >
              Owners
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 ${
                activeTab === "rating and evaluation"
                  ? "border-b-2 border-gray-300"
                  : ""
              }`}
              onClick={() => setActiveTab("rating and evaluation")}
              role="tab"
              aria-controls="rating and evaluation"
              aria-selected={activeTab === "rating and evaluation"}
            >
              Rating & Evaluation
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 ${
                activeTab === "assign mentors"
                  ? "border-b-2 border-gray-300"
                  : ""
              }`}
              onClick={() => setActiveTab("assign mentors")}
              role="tab"
              aria-controls="assign mentors"
              aria-selected={activeTab === "assign mentors"}
            >
              Assign Mentors
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
            activeTab === "about" ? "" : "hidden"
          }`}
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              This is information about the Startup named:
              <span className="text-5xl"> {Name} </span>which is worth {Worth}
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
            activeTab === "owners" ? "" : "hidden"
          }`}
          id="owners"
          role="tabpanel"
          aria-labelledby="owners-tab"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Owners tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
            activeTab === "rating and evaluation" ? "" : "hidden"
          }`}
          id="rating and evaluation"
          role="tabpanel"
          aria-labelledby="rating and evaluation-tab"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              rating and evaluation tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
            activeTab === "assign mentors" ? "" : "hidden"
          }`}
          id="assign mentors"
          role="tabpanel"
          aria-labelledby="assign mentors-tab"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              assign mentors tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
}
