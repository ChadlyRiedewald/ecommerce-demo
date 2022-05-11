import {
    CartItemContainer,
    ItemDetails,
    ItemName,
    Img,
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
