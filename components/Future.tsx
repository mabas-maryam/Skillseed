import Image from 'next/image';
import futureImage from '../public/future.jpeg';

export default function Future() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white">
      <div className="lg:w-1/2 space-y-4 mx-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Unlock the Future of Shopping with Us!
        </h1>
        <p className="text-gray-700">
          Explore a diverse range of products tailored just for you. From the latest gadgets to fashionable attire, enjoy a seamless shopping experience.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium text-gray-700">
            Discover More Deals
          </button>
          <button className="px-6 py-2 bg-[#EF2A82] hover:bg-pink-700 text-white rounded-lg font-medium">
            Start Shopping Today
          </button>
        </div>
        <div className="flex items-center space-x-20 pt-4">
          <div className="flex -space-x-2">
            {/* Example avatars, replace with actual images */}
            <Image src="/future2.png" width={50} height={32} alt="picture 1" className="rounded-full border border-white" />
            <Image src="/future3.png" width={50} height={32} alt="picture 2" className="rounded-full border border-white" />
            <Image src="/future4.png" width={50} height={32} alt="picture 3" className="rounded-full border border-white" />
          </div>
          <p className="text-gray-700 text-sm">
            Join our community for personalized recommendations that suit your style and preferences!
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-40">
        <Image
          src={futureImage}
          alt="Shopping Experience"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
