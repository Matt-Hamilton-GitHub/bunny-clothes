import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cart.context'
import styled from 'styled-components'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {CiSquareRemove} from 'react-icons/ci'

const CheckOut = () => {

    const {cartItems, setCartItems, setIsCartOpen} = useContext(CartContext)
    const [isUpdate, setIsUpdate] = useState(false);
   

    const remove = (id) => setCartItems(cartItems.filter((item) => item.id !== id))
    const increaseQuantity = (id) => cartItems.map((item) => 
    {
        if(item.id === id){
            item.quantity += 1;
            setIsUpdate(!isUpdate)
        }})

    const decreaseQuantity = (id) => cartItems.map((item) => {
        if(item.id === id){
            if (item.quantity > 1) {
                item.quantity -= 1;
                setIsUpdate(!isUpdate)
            } else {
                remove(id)
                
            }
            
        }})

    
    useEffect(() => {
        setIsCartOpen(false)
    },[cartItems,  isUpdate])
 
  return (
<Wrapper>
    <table>
        <tr>
            <th className="product-img-th"><span>Product</span></th>
            <th><span>Name</span></th>
            <th><span>Quantity</span></th>
            <th><span>Price</span></th>
            <th><span>Remove</span></th>
        </tr>
        {cartItems.map((item) =>{
            const {id, name, price, imageUrl, quantity} = item
            return (
                <tr key={id}>
            <th>
                <img src={imageUrl} alt={name} />
            </th>
            <th>
                <span>{name}</span>
            </th>
            <th>
                <div className='add-remove'>
                    <span className='decrease' onClick={() => decreaseQuantity(id)}><FaChevronLeft /></span>
                    <span>{quantity}</span>
                    <span className='increase' onClick={() => increaseQuantity(id)}><FaChevronRight /></span>
                </div>
            </th>
            <th>
                <span>{price}</span>
            </th>
            <th className='remove' onClick={() => remove(id)}>
                <span><CiSquareRemove /></span>
            </th>
                </tr>
            )
        })}
        <tr>Total:${cartItems.reduce((acc, curr)=> acc + (curr.price * curr.quantity), 0)} </tr>
    </table>
</Wrapper>
  )
}

export default CheckOut


const Wrapper = styled.div`
    
    display:flex;
    justify-content: center;

    tr{
        border-bottom: solid grey 1px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50vw;
        min-width: 400px;
    }

    th{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        padding: 5px;
        font-weight: 200;
        
        
    }

    img{
        width: 120px;
    }
span{
    
}

.product-img-th {
    min-width: 130px;
}

    .add-remove{
        display: flex;
        width: 50px;
        justify-content: space-evenly;
    }

    .remove {
        cursor: pointer;
    }

    .increase, .decrease{
        cursor: pointer;
    }




`