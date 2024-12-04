import React from 'react'
import "../Styles/OrderCard.css"

function OrderCard({ orderDetails }) {
    console.log(orderDetails)
    return (
        <div>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetails.orderItems.map((orderItem, index) => (
                        <tr key={index}>
                            <td>{orderItem.product.name}</td>
                            <td>{orderItem.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default OrderCard;
