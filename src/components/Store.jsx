import BannerText from "./BannerText";
import QuickLinks from "./QuickLinks";

const Store = () => {
  const products = [
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202410?wid=400&hei=260&fmt=png-alpha&.v=1728342368663",
      name: "MacBook",
      description: "Powerful laptop with M1 chip for all your tasks.",
      link: "https://www.apple.com/macbook", // Add the link here
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1723857157128",
      name: "iPhone",
      description: "The latest iPhone with stunning camera and performance.",
      link: "https://www.apple.com/iphone", // Add the link here
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875",
      name: "iPad",
      description: "The tablet that works like a laptop.",
      link: "https://www.apple.com/ipad", // Add the link here
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838",
      name: "Apple Watch",
      description: "Track your fitness and stay connected with the Apple Watch.",
      link: "https://www.apple.com/apple-watch", // Add the link here
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269",
      name: "Vision Pro",
      description: "A groundbreaking mixed-reality experience.",
      link: "https://www.apple.com/vision-pro", // Add the link here
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822",
      name: "AirPods",
      description: "Wireless earbuds with amazing sound quality.",
      link: "https://www.apple.com/airpods", // Add the link here
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
      name: "AirTags",
      description: "Track your important items with ease.",
      link: "https://www.apple.com/airtags", // Add the link here
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
      name: "Apple TV",
      description: "Stream your favorite shows and movies in 4K.",
      link: "https://www.apple.com/appletv", // Add the link here
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654",
      name: "HomePod",
      description: "Smart speaker with incredible sound quality.",
      link: "https://www.apple.com/homepod", // Add the link here
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174",
      name: "Accessories",
      description: "Everything you need to complement your Apple products.",
      link: "https://www.apple.com/accessories", // Add the link here
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054",
      name: "Gift Cards",
      description: "Perfect gift for Apple lovers.",
      link: "https://www.apple.com/gift-cards", // Add the link here
    },
  ];

  return (
    <>
      <div className="Row flex flex-col md:flex-row m-8 md:m-20 space-y-6 md:space-y-0 md:space-x-28 justify-around">
        <div className="row_item w-full md:w-[85%]">
          <h1 className="text-gray-500 text-2xl md:text-4xl font-bold">
            <span className="font-bold text-2xl md:text-4xl text-black">Store.</span> The best way to buy the products you love.
          </h1>
        </div>

        <div className="helping text-center md:text-left">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-holiday-specialist-icon-202411_AV3?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1728685028357"
            alt="I am your helper"
            className="w-16 h-16 object-cover rounded-full mb-4 mx-auto md:mx-0"
          />
          <h2 className="text-lg font-medium">Need shopping help?</h2>
          <a
            href="#"
            className="text-sky-600 underline hover:text-blue-800 cursor-pointer"
          >
            Ask a specialist
          </a>
        </div>
      </div>

      {/* Cards for images */}
      <div className="flex flex-wrap justify-center gap-6 mx-4 md:mx-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="card w-[150px] md:w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 md:h-48 object-cover"
            />
            <div className="p-4">
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-sm md:text-lg font-bold text-gray-700 hover:text-gray-950 cursor-pointer">{product.name}</h3>
              </a>
              <p className="text-xs md:text-sm text-gray-500">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <QuickLinks />
      <BannerText />

      {/* Responsive styling */}
      <style>{`
        @media (max-width: 768px) {
          .card {
            min-width: 150px;
          }
        }

        @media (min-width: 769px) {
          .card {
            min-width: 250px;
          }
        }
      `}</style>
    </>
  );
};

export default Store;
