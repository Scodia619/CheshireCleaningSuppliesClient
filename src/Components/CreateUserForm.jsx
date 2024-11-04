import React, { useContext, useState } from 'react';
import "../Styles/LoginForm.css";
import { postCreateUser } from '../../api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Contexts/userContext';

function CreateUserForm({ setLoginFormDisplay }) {

    const navigate = useNavigate()

    const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [password, setPassword] = useState('');

    const notify = (message) => {
        toast.error(message, {
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

    const handleCreateUser = (event) => {
        event.preventDefault();
        const createUserData = {
            username,
            email,
            phone,
            address,
            postcode,
            password,
        };
        postCreateUser(createUserData)
            .then((user) => {
                setUser(user)
                navigate("/");
            })
            .catch(({ response: { data } }) => {
                notify(data.msg);
            });
    };

    const handleChangeForm = (event) => {
        event.preventDefault();
        setLoginFormDisplay(true);
    };

    return (
        <div>
            <form className="create-user-form">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-label"
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-label"
                    required
                />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-label"
                    required
                />

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-label"
                    required
                />

                <label htmlFor="postcode">Postcode:</label>
                <input
                    type="text"
                    id="postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="form-label"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-label"
                    required
                />

                <button type="submit" className="form-submit-button" onClick={handleCreateUser}>
                    Create User
                </button>
                <hr />
                <button type="button" className="form-submit-button" onClick={handleChangeForm}>
                    Login
                </button>
            </form>

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
        </div>
    );
}

export default CreateUserForm;
