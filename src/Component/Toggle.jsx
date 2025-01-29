import React, { useState } from "react";
import IMG1 from "../assets/img-1.jpg"; // Ensure the image paths are correct
import IMG2 from "../assets/img-2.jpeg";
import IMG3 from "../assets/img-3.jpeg";

const KreationSection = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("content");

  // Data for each tab
  const tabsData = {
    content: {
      title: "CONTENT",
      description:
        "Für Plattform und Marke eine gemeinsame Kommunikationsebene finden. Diese pflegen und verständlich machen. Menschen auf lange Sicht an Marken binden.",
      image: IMG1,
      buttonText: "Bestanfragen",
    },
    management: {
      title: "MANAGEMENT",
      description:
        "Einzigartige Erlebnisse erschaffen und Ideen realisieren, die nur in der digitalen Welt möglich sind. Das Gespräch zwischen Artist und Marke gestalten, zu jeder Zeit.",
      image: IMG2,
      buttonText: "Bestanfragen",
    },
    bestandteil: {
      title: "BESTANDTEIL",
      description: "Bestandteil des kreativen Prozesses.",
      image:IMG3,
      buttonText: "Bestanfragen",
    },
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
      {/* Left Side: Menu */}
      <div className="w-full md:w-1/3 space-y-4 p-4">
        {Object.keys(tabsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-left p-4 rounded-lg text-xl font-semibold ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
            } transition-all duration-300`}
          >
            {tabsData[tab].title}
          </button>
        ))}
      </div>

      {/* Right Side: Image and Content */}
      <div className="w-full md:w-2/3 p-4 ">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4">
            {tabsData[activeTab].title}
          </h2>
          <p className="text-xl mb-8">{tabsData[activeTab].description}</p>
          <img
            src={tabsData[activeTab].image}
            alt={tabsData[activeTab].title}
            className="w-full h-auto rounded-lg mb-8 lg:h-100 lg:w-80 lg:w-full lg:cover"
          />
          <button className="bg-black text-white px-6 py-2 rounded-full text-lg hover:bg-gray-800 transition-all duration-300">
            {tabsData[activeTab].buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default KreationSection;
