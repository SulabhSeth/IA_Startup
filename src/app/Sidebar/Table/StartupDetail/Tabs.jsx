"use client";

import CardComponent from "@/app/components/CardComponent";
import { useState } from "react";

export default function Tabs({
  startup_Name,
  city,
  category,
  state,
  slug,
  owner_first_name,
  owner_last_name,
  zip,
}) {
  const [activeTab, setActiveTab] = useState("about");
  console.log("slug is" + slug);
  const card = { owner_first_name, owner_last_name };
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
              className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300  rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 ${
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
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-50 ${
            activeTab === "about" ? "" : "hidden"
          }`}
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <div class="flex">
            <img
              className="rounded-full"
              src="https://th.bing.com/th/id/R.235ddbd41d690c0f18d17f9931525b98?rik=l8ER60Z0pKPSRQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2fdT9rn7gkc.jpg&ehk=jBpufD5W0S0zMaF45XVKa%2byFNvq623cz2qah4cF3S%2bQ%3d&risl=&pid=ImgRaw&r=0"
              width="56"
              height="56"
              alt="Profile"
            />
            <p class="ml-8 text-2xl font-bold mt-2">{startup_Name}</p>
          </div>
          <p class="ml-20">Description about {startup_Name}</p>
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-50 ${
            activeTab === "owners" ? "" : "hidden"
          }`}
          id="owners"
          role="tabpanel"
          aria-labelledby="owners-tab"
        >
          <div class="flex">
            <CardComponent {...card} />
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 ml-2">
              This is some placeholder content about the owners
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-50 ${
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
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-50 ${
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
