import React, { useContext } from 'react';
import './fooditem.css';
import { assets } from '../../assets/assets';
import { StoreCon } from '../../context/StoreCon'; // Adjust import path

function Fooditem({ id, name, price, description, image }) { 
    const { cartItems, addCart, remove } = useContext(StoreCon);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />

                {!cartItems[id] ? (
                    <img 
                        className='add' 
                        src={assets.add_icon_white} 
                        onClick={() => addCart(id)} 
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img 
                            onClick={() => remove(id)} 
                            src={assets.remove_icon_red} 
                            alt="" 
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            onClick={() => addCart(id)} 
                            src={assets.add_icon_green} 
                            alt="" 
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
        </div>
    );
}

export default Fooditem;