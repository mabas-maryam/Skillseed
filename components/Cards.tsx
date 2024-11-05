import Image from 'next/image';

const sections = [
  {
    imageSrc: "/images/electronics.jpg", // replace with your image paths
    title: "Latest in Electronics",
    description: "Smartphones, Laptops, Gadgets",
    linkHref: "/electronics",
    linkText: "Shop Now",
  },
  {
    imageSrc: "/images/fashion.jpg",
    title: "Trendy Fashion Finds",
    description: "Clothing, Accessories, Footwear",
    linkHref: "/fashion",
    linkText: "Explore Fashion",
  },
  {
    imageSrc: "/images/home-goods.jpg",
    title: "Stylish Home Goods",
    description: "Furniture, Decor, Appliances",
    linkHref: "/home-goods",
    linkText: "Discover Home Goods",
  },
  {
    imageSrc: "/images/office.jpg",
    title: "Office Essentials",
    description: "Furniture, Stationery, Gadgets",
    linkHref: "/office",
    linkText: "Browse Office",
  },
];

export default function Cards() {
  return (
    <div className="p-8 text-center bg-white">
      <h2 className="text-gray-800">Explore Our Diverse Product Categories</h2>
      <h1 className="text-2xl font-bold text-gray-950 mb-6">
        Discover a World of Shopping at Your Fingertips!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">
              <Image
                src={section.imageSrc}
                alt={section.title}
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">{section.title}</h3>
            <p className="text-gray-600 my-2">{section.description}</p>
            <a
              href={section.linkHref}
              className="text-pink-500 font-medium hover:underline"
            >
              {section.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
