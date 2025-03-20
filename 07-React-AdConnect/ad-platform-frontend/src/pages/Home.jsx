import React from 'react';

const Home = () => {
  // Enhanced dummy data for ad campaigns
  const campaigns = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Get up to 50% off on selected items during our summer extravaganza.",
      image: "https://cdn.pixabay.com/photo/2022/03/15/13/19/sale-7070341_1280.png"
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Discover the latest trends in fashion and technology.",
      image: "https://cdn.pixabay.com/photo/2022/03/24/20/26/online-shop-7089820_1280.png"
    },
    {
      id: 3,
      title: "Exclusive Offer",
      description: "Limited-time offer on premium products. Don't miss out!",
      image: "https://cdn.pixabay.com/photo/2016/09/23/07/45/pennant-1689013_1280.png"
    },
    {
      id: 4,
      title: "Holiday Deals",
      description: "Celebrate the season with amazing discounts on your favorite brands.",
      image: "https://cdn.pixabay.com/photo/2024/02/12/18/37/red-square-8569243_1280.jpg"
    },
    {
      id: 5,
      title: "Tech Innovations",
      description: "Explore cutting-edge gadgets and innovative tech solutions.",
      image: "https://cdn.pixabay.com/photo/2022/04/04/16/24/technology-7111757_1280.jpg"
    },
    {
      id: 6,
      title: "Fashion Fiesta",
      description: "Step out in style with our exclusive fashion collections.",
      image: "https://cdn.pixabay.com/photo/2020/06/20/12/55/fashion-5320934_1280.jpg"
    }
  ];

  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to AdPlatform</h1>
        <p className="text-xl text-gray-600">
          Connecting advertisement brands with audiences to generate revenue. Explore our featured campaigns below.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map(campaign => (
          <div 
            key={campaign.id} 
            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img 
              src={campaign.image} 
              alt={campaign.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{campaign.title}</h2>
              <p className="text-gray-700 mb-4">{campaign.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
