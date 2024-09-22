import React, { useContext, useEffect, useState } from 'react';
import './fooditem.css';
import { assets } from '../../assets/assets';
import { StoreCon } from '../../context/StoreCon';


function Fooditem({ id, name, price, description, image }) { 
    const { cartItems, addCart, remove } = useContext(StoreCon);
    const [fake, setFake] = useState([]);


    // Fetching data from the API
    useEffect(() => {
        const fetchFunc = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setFake(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchFunc();
    })



    return (
        <div className='food-item'>
            {/* Rendering the non-API (prop) passed item */}
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id] ? (
                    <img 
                        className='add' 
                        src={assets.add_icon_white} 
                        onClick={() => addCart(id)} 
                        alt="Add to cart"
                        aria-label="Add to cart"
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img 
                            onClick={() => remove(id)} 
                            src={assets.remove_icon_red} 
                            alt="Remove from cart" 
                            aria-label="Remove from cart"
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            onClick={() => addCart(id)} 
                            src={assets.add_icon_green} 
                            alt="Add more" 
                            aria-label="Add more"
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className='food-item-description'>{description}</p>
                <p className='food-item-price'>{price} Birr</p>
            </div>

            {/* Rendering the API data */}
            {fake.slice(0).map((item) => (
                <div key={item.id} className="food-item">
                    <div className="food-item-img-container">
                        <img className='food-item-image' src={item.image} alt={item.category} />
                        {!cartItems[item.id] ? (
                            <img 
                                className='add' 
                                src={assets.add_icon_white} 
                                onClick={() => addCart(item.id)} 
                                alt="Add to cart"
                                aria-label="Add to cart"
                            />
                        ) : (
                            <div className='food-item-counter'>
                                <img 
                                    onClick={() => remove(item.id)} 
                                    src={assets.remove_icon_red} 
                                    alt="Remove from cart" 
                                    aria-label="Remove from cart"
                                />
                                <p>{cartItems[item.id]}</p>
                                <img 
                                    onClick={() => addCart(item.id)} 
                                    src={assets.add_icon_green} 
                                    alt="Add more" 
                                    aria-label="Add more"
                                />
                            </div>
                        )}
                    </div>
                    <div className="food-item-info">
                        <div className="food-item-name-rating">
                            <p>{item.category}</p>
                            <img src={assets.rating_starts} alt="Rating" />
                        </div>
                        <p className='food-item-description'>{item.description}</p>
                        <p className='food-item-price'>{item.price} Birr</p>
                    </div>
                </div>
            ))}

     
        </div>
    );
}

export default Fooditem;
