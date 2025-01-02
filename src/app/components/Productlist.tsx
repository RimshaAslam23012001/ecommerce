import Image from 'next/image';

const products = [
  {
    id: 1,
    title: 'Margherita Pizza',
    category: 'Pizza',
    price: '1500.00',
    image: '/img1.jpg',
    bgColor: 'bg-cyan-600',
  },
  {
    id: 2,
    title: 'Classic Cheeseburger',
    category: 'Burgers',
    price: '250.00',
    image: '/list3.jpg',
    bgColor: 'bg-amber-600',
  },
  {
    id: 3,
    title: 'Chicken Shawarma Wrap',
    category: 'Wraps',
    price: '300.00',
    image: '/img3.jpg',
    bgColor: 'bg-amber-600',
  },
  {
    id: 4,
    title: 'Chocolate Lava Cake',
    category: 'Desserts',
    price: '350.00',
    image: '/img4.jpg',
    bgColor: 'bg-amber-600',
  },
];

const ProductList = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        return (
          <div
            className={`relative flex flex-col items-center justify-between overflow-hidden rounded-lg shadow-lg group max-w-sm ${product.bgColor} hover:shadow-2xl transition-shadow duration-300`}
            key={product.id}
          >
            {/* Background SVG */}
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="152"
                height={152}
                width={152}
                rx={8}
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                height={152}
                width={152}
                rx={8}
                transform="rotate(-45 159.52 107.48)"
                fill="white"
              />
            </svg>

            {/* Image and Overlay */}
            <div className="relative pt-10 px-10 flex items-center justify-center group hover:scale-105 transition-transform duration-500 ease-in-out">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: 'radial-gradient(black, transparent 100%)',
                  transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                  opacity: 0.2,
                }}
              ></div>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={150}
                className="relative w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 text-sm">{product.category}</span>
              <div className="flex justify-between items-center">
                <span className="block font-semibold text-lg">{product.title}</span>
                <span className="block bg-white rounded-full text-red-500 text-xs font-bold px-3 py-2 leading-none">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
