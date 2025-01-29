import React from "react";
import Image1 from "../assets/img-1.jpg"; // Replace with your image paths
import Image2 from "../assets/img-2.jpeg";
import Image3 from "../assets/img-3.jpeg";

const ImageGridSection = () => {
  // Data for each card
  const cardsData = [
    {
      id: 1,
      image: Image1,
      title: "Burgerking",
      description:
        "Annika und Riton haben bei der Burgerking Marketingkampagne richtig abgeliefert!",
      buttonText: "Discover More",
    },
    {
      id: 2,
      image: Image2,
      title: "Project 2",
      description:
        "Einzigartige Erlebnisse erschaffen und Ideen realisieren, die nur in der digitalen Welt möglich sind.",
      buttonText: "Discover More",
    },
    {
      id: 3,
      image: Image3,
      title: "Project 3",
      description:
        "Bestandteil des kreativen Prozesses. Menschen auf lange Sicht an Marken binden.",
      buttonText: "Discover More",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((card) => (
        <div key={card.id} className="relative group">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-120 sm:h-80 object-cover rounded-3xl lg:h-150"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-3xl">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="text-sm mt-2">{card.description}</p>
            <button className="mt-4 text-sm font-semibold py-2 px-4 bg-pink-500 rounded-xl hover:bg-pink-600 transition-all duration-300">
              <a href="#">{card.buttonText}</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGridSection;
