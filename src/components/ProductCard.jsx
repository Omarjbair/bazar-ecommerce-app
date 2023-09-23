import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../store/BazaarSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDetails = (id) => {
        navigate(`/product/${id.toLowerCase().split(" ").join("")}`,{
            state: {
                item: product,
            }
        })
    };

    return (
        <div className='group relative'>
            <div className='w-full h-96 cursor-pointer overflow-hidden' onClick={() => handleDetails(product.title)}>
                <img className="w-full h-full object-cover group-hover:scale-110 duration-500 group-hover:grayscale-[1] group-hover:rotate-1" src={product.image} alt='product_image' loading="lazy" />
            </div>
            <div className='w-full border-[1px] px-2 py-4 overflow-hidden'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className="font-titleFont text-base font-bold">
                            {product.title.substring(0,15)}
                        </h2>
                    </div>
                    <div className="text-sm relative w-28 flex justify-end overflow-hidden">
                        <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                            <p className="line-through text-gray-500">${product.oldPrice}</p>
                            <p className="font-semibold">${product.price}</p>
                        </div>
                        <p onClick={() => dispatch(addToCart({
                            _id: product._id,
                            title: product.title,
                            image: product.image,
                            price: product.price,
                            quantity: 1,
                            description: product.description,
                            })) & toast.success(`${product.title} is added to cart`)} 
                            className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
                            add to cart
                            <span><BsArrowRight /></span>
                        </p>
                    </div>
                </div>
                <div>
                    <p>{product.category}</p>
                </div>
                {product.isNew &&
                (<div className="absolute top-4 right-0">
                    <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">Sale</p>
                </div>)}
            </div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"/>
        </div>
    );
};

export default ProductCard;
