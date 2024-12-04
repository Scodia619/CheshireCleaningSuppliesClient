import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Contexts/userContext';
import { getOrders, updateOrder, updatePaymentStatusOrder } from '../../api';
import "../Styles/Orders.css";

import OrderCard from './OrderCard';

function ViewOrdersContainer() {
    const { user } = useContext(UserContext);

    const [orders, setOrders] = useState([]); 
    const [filteredOrders, setFilteredOrders] = useState([]); 
    const [showModal, setShowModal] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const [filters, setFilters] = useState({
        month: "",
        orderStatus: "",
        paid: "",
    });

    useEffect(() => {
        getOrders()
            .then((orders) => {
                setOrders(orders);
                setFilteredOrders(orders);
            })
            .catch((err) => {
                console.error("Failed to fetch orders:", err);
            });
    }, []);

    useEffect(() => {
        const applyFilters = () => {
            const filtered = orders.filter((order) => {

                if (filters.month) {
                    const orderMonth = new Date(order.date).getMonth() + 1;
                    if (orderMonth !== parseInt(filters.month)) return false;
                }

                if (filters.orderStatus && order.status !== filters.orderStatus) {
                    return false;
                }

                if (filters.paid) {
                    const isPaid = filters.paid === "true";
                    if (order.paid !== isPaid) return false;
                }

                return true; 
            });

            setFilteredOrders(filtered); 
        };

        applyFilters();
    }, [filters, orders]);

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    const handleClick = (order) => {
        setCurrentOrder(order);
        setShowModal(true);
    };

    const handleClose = () => {
        setCurrentOrder(null);
        setShowModal(false);
    };

    const handleConfirm = async () => {
        try {
            const updatedOrder = await updateOrder(currentOrder.order_id, "Confirmed");
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.order_id === updatedOrder.order_id ? updatedOrder : order
                )
            );
            setShowModal(false);
        } catch (err) {
            console.error("Failed to confirm order:", err);
        }
    };

    const handlePaid = async () => {
        try {
            const updatedOrder = await updatePaymentStatusOrder(currentOrder.order_id);
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.order_id === updatedOrder.order_id ? updatedOrder : order
                )
            );
            setShowModal(false);
        } catch (err) {
            console.error("Failed to update payment status:", err);
        }
    };

    const handleCancel = async () => {
        try {
            const updatedOrder = await updateOrder(currentOrder.order_id, "Cancelled");
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.order_id === updatedOrder.order_id ? updatedOrder : order
                )
            );
            setShowModal(false);
        } catch (err) {
            console.error("Failed to cancel order:", err);
        }
    };

    return (
        <div className="view-orders-container d-flex flex-column justify-content-center align-items-center">
            <div className="filters">
                <select className="filter-select" onChange={(e) => handleFilterChange("month", e.target.value)}>
                    <option value="">All Months</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select className="filter-select" onChange={(e) => handleFilterChange("orderStatus", e.target.value)}>
                    <option value="">All Statuses</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
                <select className="filter-select" onChange={(e) => handleFilterChange("paid", e.target.value)}>
                    <option value="">All</option>
                    <option value="true">Paid</option>
                    <option value="false">Unpaid</option>
                </select>
            </div>

            {filteredOrders.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>User ID</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Paid</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map((order) => (
                            <tr key={order.order_id}>
                                <td>{order.order_id}</td>
                                <td>{order.user_id}</td>
                                <td>{new Date(order.date).toLocaleDateString()}</td>
                                <td>{order.status}</td>
                                <td>{order.paid ? "Paid" : "Unpaid"}</td>
                                <td>
                                    <button
                                        className="view-details"
                                        onClick={() => handleClick(order)}
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No orders available.</p>
            )}
            
            {showModal && (
                <div className="order-modal">
                    <h3>Order Details: </h3>
                    <OrderCard orderDetails={currentOrder} />
                    <div className="options">
                        {currentOrder.status === "Unconfirmed" && (
                            <>
                                <button className="modal-button confirm" onClick={handleConfirm}>
                                    Confirm Order
                                </button>
                                <button className="modal-button cancel" onClick={handleCancel}>
                                    Cancel Order
                                </button>
                            </>
                        )}
                        {currentOrder.status === "Confirmed" && (
                            <>
                                <button className="modal-button confirm" onClick={handlePaid}>
                                    Confirm Paid
                                </button>
                            </>
                        )}
                        <button className="modal-button close" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ViewOrdersContainer;
