import React from 'react';

const adsData = [
  {
    id: 1,
    title: "Tech Gadget Promo",
    description: "Get the latest gadgets promoted across top tech websites.",
    price: "$100 - $500",
    category: "Technology",
    image: "https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg",
  },
  {
    id: 2,
    title: "Fashion Brand Awareness",
    description: "Advertise your fashion brand with top influencers.",
    price: "$200 - $800",
    category: "Fashion",
    image: "https://cdn.pixabay.com/photo/2016/12/05/21/08/cologne-1884931_1280.jpg",
  },
  {
    id: 3,
    title: "Food Chain Promotions",
    description: "Boost your restaurant sales with social media ads.",
    price: "$150 - $600",
    category: "Food & Beverage",
    image: "https://cdn.pixabay.com/photo/2017/11/25/17/17/sandwich-2977251_1280.jpg",
  },
  {
    id: 4,
    title: "Fitness Product Ads",
    description: "Market your fitness products to health-conscious consumers.",
    price: "$250 - $700",
    category: "Health & Fitness",
    image: "https://cdn.pixabay.com/photo/2020/04/03/13/58/fitness-4998981_1280.jpg",
  },
  {
    id: 5,
    title: "Mobile App Marketing",
    description: "Increase downloads and engagement for your mobile app.",
    price: "$300 - $900",
    category: "Technology",
    image: "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png",
  },
  {
    id: 6,
    title: "Travel Agency Promotions",
    description: "Get more clients for your travel business with stunning ads.",
    price: "$400 - $1000",
    category: "Travel",
    image: "https://cdn.pixabay.com/photo/2023/03/11/11/34/travelling-7844283_1280.jpg",
  },
  {
    id: 7,
    title: "Automobile Ads",
    description: "Showcase your car dealership or automobile products to potential buyers.",
    price: "$350 - $850",
    category: "Automobile",
    image: "https://cdn.pixabay.com/photo/2023/04/13/07/48/multi-storey-car-park-7921955_1280.jpg",
  },
  {
    id: 8,
    title: "Real Estate Marketing",
    description: "Sell properties faster with the high-converting ads. And take your bussiness to next height",
    price: "$500 - $1500",
    category: "Real Estate",
    image: "https://cdn.pixabay.com/photo/2020/01/21/12/31/construction-4782781_1280.png",
  },
  {
    id: 9,
    title: "Educational Course Promotions",
    description: "Market your online courses to students worldwide.",
    price: "$200 - $700",
    category: "Education",
    image: "https://cdn.pixabay.com/photo/2022/04/03/18/28/webcam-7109621_1280.png",
  }
];

const Browse = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Browse Ads</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {adsData.map((ad) => (
          <div
            key={ad.id}
            className="bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105"
          >
            <img src={ad.image} alt={ad.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{ad.title}</h2>
            <p className="text-gray-600">{ad.description}</p>
            <p className="text-blue-600 font-medium mt-2">Category: {ad.category}</p>
            <p className="text-green-600 font-semibold mt-1">Price Range: {ad.price}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
