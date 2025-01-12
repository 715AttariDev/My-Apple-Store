## Store
```
const Store = () => {
  // Array of product details (image, name, description)
  const products = [
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202410?wid=400&hei=260&fmt=png-alpha&.v=1728342368663",
      name: "MacBook",
      description: "Powerful laptop with M1 chip for all your tasks.",
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1723857157128",
      name: "iPhone",
      description: "The latest iPhone with stunning camera and performance.",
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875",
      name: "iPad",
      description: "The tablet that works like a laptop.",
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838",
      name: "Apple Watch",
      description: "Track your fitness and stay connected with the Apple Watch.",
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269",
      name: "Vision Pro",
      description: "A groundbreaking mixed-reality experience.",
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822",
      name: "AirPods",
      description: "Wireless earbuds with amazing sound quality.",
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
      name: "AirTags",
      description: "Track your important items with ease.",
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
      name: "Apple TV",
      description: "Stream your favorite shows and movies in 4K.",
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654",
      name: "HomePod",
      description: "Smart speaker with incredible sound quality.",
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174",
      name: "Accessories",
      description: "Everything you need to complement your Apple products.",
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054",
      name: "Gift Cards",
      description: "Perfect gift for Apple lovers.",
    },
  ];

  return (
    <>
      <div className="Row flex m-20 space-x-28 justify-around">
        <div className="row_item w-[85%]">
          <h1 className="text-gray-500 text-4xl font-bold">
            <span className="font-bold text-4xl text-black">Store.</span> The
            best way to buy the products you love.
          </h1>
        </div>

        <div className="helping">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-holiday-specialist-icon-202411_AV3?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1728685028357"
            alt="I am your helper"
            className="w-16 h-16 object-cover rounded-full mb-4"
          />
          <h2 className="text-lg font-semibold">Need shopping help?</h2>
          <a
            href="#"
            className="text-sky-600 underline hover:text-blue-800 cursor-pointer"
          >
            Ask a specialist
          </a>
        </div>
      </div>

      {/* Cards for images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="card max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700 hover:text-gray-950 cursor-pointer">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
```