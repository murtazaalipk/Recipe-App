import React from 'react';

function RecipeCart(props) {
    return (
        <div>
             <div className='cart-item'>
            <img src={props.image} alt={props.name}  />
            <p >{props.name}</p>
        </div>
        </div>
    );
}

export default RecipeCart;
