import { CartItemContainer, ItemDetails ,symbolContainer ,spanContanier} from './cart-item.styles';
import { useDispatch , useSelector} from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';
const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        {smallScreen && 
        <symbolContainer>
          <spanContanier onClick={removeItemHandler}>&#10094;</spanContanier>
          <spanContanier>{quantity}</spanContanier>
          <spanContanier onClick={addItemHandler}>&#10095;</spanContanier>
          <spanContanier onClick={clearItemHandler}>&#10005;</spanContanier>
        </symbolContainer>
        }
        <span>
          {!smallScreen && quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;