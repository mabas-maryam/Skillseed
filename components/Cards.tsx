import Image from 'next/image';

const sections = [
  {
    imageSrc: "/explore01.jpeg", // replace with your image paths
    title: "Latest in Electronics",
    description: "Smartphones, Laptops, Gadgets",
    linkHref: "/electronics",
    linkText: "Shop Now",
  },
  {
    imageSrc: "/explore2.jpeg",
    title: "Trendy Fashion Finds",
    description: "Clothing, Accessories, Footwear",
    linkHref: "/fashion",
    linkText: "Explore Fashion",
  },
  {
    imageSrc: "/explore3.jpeg",
    title: "Stylish Home Goods",
    description: "Furniture, Decor, Appliances",
    linkHref: "/home-goods",
    linkText: "Discover Home Goods",
  },
  
  {
    imageSrc: "/explore4.jpeg", // replace with your image paths
    title: "Fitness & Health",
    description: "Gear, Supplements, Apparel",
    linkHref: "/electronics",
    linkText: "Shop Now",
  },
  {
    imageSrc: "/explore5.jpeg",
    title: "Kids & Babies",
    description: "Toys, Clothing, Essentials",
    linkHref: "/fashion",
    linkText: "Explore Fashion",
  },
  {
    imageSrc: "/explore6.jpeg",
    title: "Gifts & Gadgets",
    description: "Unique Finds, Fun Items",
    linkHref: "/home-goods",
    linkText: "Discover Home Goods",
  },
];

export default function Cards() {
  return (
    <div className="p-8 text-center bg-white">
      <h2 className="text-gray-800">Explore Our Diverse Product Categories</h2>
      <h1 className="text-2xl font-bold text-gray-950 mb-6">
        Discover a World of Shopping at Your Fingertips!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4 ">
              <Image
                src={section.imageSrc}
                alt={section.title}
                width={300}
                height={200}
                className="rounded-lg w-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
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
