import { BsFillLightningChargeFill } from "react-icons/bs";
import { PiSparkleFill } from "react-icons/pi";
import { IoIosLock } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

export default function ProductShowcase() {
    const sections = [
      {
        icon: <BsFillLightningChargeFill />,
        title: 'Electronics Hub',
        description: 'Explore cutting-edge technology and gadgets that enhance your lifestyle.',
        linkText: 'Shop Electronics Now',
        linkHref: '#', 
      },
      {
        icon: <PiSparkleFill />,
        title: 'Fashion Forward',
        description: 'Step into style with our trendy clothing and accessories curated just for you.',
        linkText: 'Browse Fashion Trends',
        linkHref: '#',
      },
      {
        icon: <IoIosLock />,
        title: 'Home Essentials',
        description: 'Transform your living space with our high-quality home goods that combine functionality and design.',
        linkText: 'Explore Home Goods',
        linkHref: '#',
      },
      {
        icon: <FaHeart />,
        title: 'Exclusive Offers',
        description: 'Don’t miss out on our limited-time promotions that guarantee unbeatable prices.',
        linkText: 'View All Promotions',
        linkHref: '#',
      },
    ];
  
    return (
      <div className="p-8 text-center bg-white">
        <h2 className="text-gray-800">Shop the Best Deals</h2>
        <h1 className="text-2xl font-bold text-gray-950 mb-6">Discover Your Perfect Product Today!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center gap-6">
          {sections.map((section, index) => (
            <div key={index} className="p-4 justify-items-center">
              <div className="text-2xl mb-4 text-gray-900 border rounded p-2">{section.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
              <p className="text-gray-600 my-2">{section.description}</p>
              <a href={section.linkHref} className="text-pink-500 font-medium hover:underline">
                {section.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  