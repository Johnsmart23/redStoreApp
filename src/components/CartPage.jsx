import { Link } from 'react-router-dom'; 
import { FaTrash } from 'react-icons/fa'; 

const CartPage = ({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
  const transactionFee = 10;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + transactionFee;

  return (
    <div className="cart-page">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <div className="cart-icon">
            <Link to="/product">
              <button>Start Shopping</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.images} alt={item.name} className="cart-item-images" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="item-price">${item.price}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => onDecreaseQuantity(item.id)} disabled={item.quantity === 1}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
                  </div>
                  <button onClick={() => onRemoveFromCart(item.id)} className="remove-item">
                    <FaTrash /> 
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Transaction Fee: ${transactionFee.toFixed(2)}</p>
            <h4>Total: ${total.toFixed(2)}</h4>
          </div>
          <div className="checkout-button">
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
