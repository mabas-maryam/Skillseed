import Image from 'next/image';

const cardData = [
  {
    id: 1,
    title: "Electronics on Sale",
    description: "Discounts, New Releases",
    imageUrl: "/find1.jpeg", 
  },
  {
    id: 2,
    title: "Fashion for Everyone",
    description: "Men's, Women's, Kids'",
    imageUrl: "/find2.jpeg", 
  },
  {
    id: 3,
    title: "Home Essentials Deals",
    description: "Stylish, Affordable Items",
    imageUrl: "/find3.jpeg", 
  },
  {
    id: 4,
    title: "Beauty & Personal Care",
    description: "Skincare, Makeup, More",
    imageUrl: "/find4.jpeg", 
  },
];

export default function FindCard() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900">
      <h2 className="text-3xl font-bold mb-4">Find What You Love</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card) => (
          <div key={card.id} className="bg-white">
            <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={card.imageUrl}
                alt={card.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
