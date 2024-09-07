import React from "react";
import Card from "./card";

const CardGrid = () => {
  const cards = [
    {
      title: "Card Title 1",
      description: "This is a description of the card content.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Card Title 2",
      description: "This is another description of the card content.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Card Title 3",
      description: "This is yet another description of the card content.",
      image: "https://via.placeholder.com/150",
    },
    // Add more cards as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
