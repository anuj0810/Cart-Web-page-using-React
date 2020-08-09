import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{ 
    constructor(){
        super()
        this.state={
            products:[
                {
                    price: 1100,
                    title : 'Watch',
                    Qty : 0,
                    id:1
                },
                {
                    price: 11000,
                    title : 'Smart Phone',
                    Qty : 0,
                    id:2
                },
                {
                    price: 50000,
                    title : 'Laptop',
                    Qty : 0,
                    id:3
                },
                {
                    price: 500,
                    title : 'Earphone',
                    Qty : 0,
                    id:4
                },
            ]
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this); 
    }
render(){
    const {products}=this.state;
    return(
        <div className='cart'>
             { products.map((product)=>{
                 return(
                    <CartItem product={product} 
                    key={product.id}
                    />
                )
            })}
        </div>
        )
    }
}
export default Cart;