// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import productData from "../db/productData";

// const ProductDes = () => {
//   const { productId } = useParams();
//   const product = productData.find(
//     (product) => String(product.id) === productId
//   );

//   // Check if the product is not found
//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const { img, title, description } = product;

//   return (
//     <>
//       <section>
//         <img src={img} alt={title} />
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <Link to="/Headphones">Back to Headphones</Link>
//       </section>
//     </>
//   );
// };

// export default ProductDes;
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../features/cartSlice";
import productData from "../db/productData";
import { Star, ChevronDown } from "lucide-react";

const ProductDes = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = productData.find(
    (product) => String(product.id) === productId
  );

  // Check if the product is not found
  if (!product) {
    return <p>Product not found</p>;
  }

  const {
    img,
    title,
    price,
    company,
    description,
    display,
    processor,
    ram,
    storage,
    camera,
  } = product;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    // You can add a notification or perform other actions here
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    // You can add a notification or perform other actions here
  };

  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
            <img
              alt={title}
              className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
              src={img}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
              <h2 className="text-sm font-semibold tracking-widest text-[#624CAB]">
                {company}
              </h2>
              <h1 className="my-4 text-3xl font-semibold text-[#05668D]">
                {title}
              </h1>
              <div className="my-4 flex items-center">
                <span className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500" />
                  ))}
                  <span className="ml-3 inline-block text-xs font-semibold">
                    4 Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">{description}</p>
              {/* <h1 className="my-4 text-3xl font-semibold text-black">
                {camera}
              </h1>
              <h1 className="my-4 text-3xl font-semibold text-black">{ram}</h1>
              <h1 className="my-4 text-3xl font-semibold text-black">
                {storage}
              </h1>
              <h1 className="my-4 text-3xl font-semibold text-black">
                {processor}
              </h1> */}
              <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                <div className="flex items-center">
                  <span className="mr-3 text-sm font-semibold">Color</span>
                  <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                  <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                  <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="title-font text-xl font-bold text-[#05668D]">
                  ₹ {price}
                </span>
                <button
                  onClick={handleAddToCart}
                  type="button"
                  className="rounded-md bg-[#F18F01] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDes;
{
  /* <section>
  <img src={img} alt={title} />
  <h3>{title}</h3>
  <p>Price: ${price}</p>
  <button onClick={handleAddToCart}>Add to Cart</button>
  <button onClick={handleAddToWishlist}>Add to Wishlist</button>
  <Link to="/Headphones">Back to Headphones</Link>
</section>; */
}
