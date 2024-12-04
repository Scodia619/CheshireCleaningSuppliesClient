import { useContext, useState } from 'react';
import { BasketContext } from '../Contexts/basketContext';
import BasketProductCard from '../Components/BasketProductCard';
import '../Styles/ProductCard.css';
import "../Styles/BasketPage.css";
import { UserContext } from '../Contexts/userContext';
import { postCreateOrder } from '../../api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Basket() {
  const { basket, setBasket } = useContext(BasketContext);
  const { user, setUser } = useContext(UserContext);
  const [showModal, setModal] = useState(false);

  const notify = (message) => {
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const stripBasket = (basket) => {
    return basket.map((product) => ({
      product_id: product.product_id,
      quantity: product.Quantity,
    }));
  };

  const handleConfirm = async () => {
    if(basket.length === 0){
      setModal(false);
      return;
    }
    const strippedBasket = stripBasket(basket);

    try {
      const orderDetails = {
        userId: user.user_id,
        status: "Unconfirmed",
        orderItems: strippedBasket
      }

      const order = await postCreateOrder(orderDetails);
      setBasket([]);
      notify(`Order Confirmed: Order_id ${order.order_id}`)
    } catch (error) {
      notify(error)
    }

    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <>
      <div className={`main ${showModal ? "main-dimmed" : ""}`}>
        <div className="basket-top">
          <h2 className='page-title'>Basket:</h2>
          <button className="checkout-basket" onClick={() => setModal(true)}>Check Out</button>
        </div>
        <div className="product-card-container">
          {basket.length > 0 ? (
            basket.map(product => (
              <BasketProductCard key={product.product_id} Product={product} />
            ))
          ) : (
            <h3 className="empty-basket-message">Your basket is empty.</h3>
          )}
        </div>
      </div>
      {showModal && (
        <div className="confirm-modal">
          <h3>Do you wish to confirm your order for confirmation?</h3>
          <button className="modal-button confirm" onClick={handleConfirm}>Confirm</button>
          <button className="modal-button cancel" onClick={handleCancel}>Cancel</button>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Basket;
