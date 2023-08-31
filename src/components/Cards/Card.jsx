import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const mockDiets = [
  { name: "Vegetarian" },
  { name: "Vegan" },
  { name: "Gluten Free" },
  { name: "Vegetarian" },
  { name: "Vegetarian" },
  { name: "Vegetarian" },
];

const mockCard = {
  id: 1,
  title: "Mock Recipe",
  image: "https://placekitten.com/200/200", // Imagen de ejemplo
  diets: mockDiets,
  healthScore: 90,
};

export default function Cards({ id, title, image, diets, healthScore }) {
  // Si las props están vacías, se usará la información mockeada
  if (!id && !title && !image && !diets && !healthScore) {
    id = mockCard.id;
    title = mockCard.title;
    image = mockCard.image;
    diets = mockCard.diets;
    healthScore = mockCard.healthScore;
  }

  return (
    <Card className="py-4 bg-white border border-gray-200 rounded-xl shadow-md select-none">
      <CardHeader className="pb-0 px-4 flex-col items-start">
        <h4 className="font-bold text-lg text-primary">{title}</h4>
        <div className="flex space-x-2 flex-wrap gap-1">
          {diets.map((t) => (
            <small
              key={t.name}
              className="text-default-500 bg-gray-100 px-2 py-1 rounded-full hover:bg-red-300 hover:text-black hover:scale-110"
            >
              {t.name}
            </small>
          ))}
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex justify-center items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={
            image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KKebEqn5ILWSba925GRjqdN9yk3nkE173w&usqp=CAU"
          }
          width={270}
        />
      </CardBody>
    </Card>
  );
}
