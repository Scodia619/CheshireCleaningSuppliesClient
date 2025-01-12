import React, { useContext, useState } from 'react'
import { UserContext } from '../Contexts/userContext';
import { handlePhoneChange } from '../utils/ValidatePhoneNumber';
import { updateUserDetails } from '../../api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfilePage() {

    const { user, setUser } = useContext(UserContext);

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [address, setAddress] = useState(user.address);
    const [postcode, setPostcode] = useState(user.postcode);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const notify = (message) => {
        toast.success(message);
      };

    const handleUpdateUser = async (event) => {
        event.preventDefault();
        const userData = {
            username,
            email,
            phone,
            address,
            postcode,
            password,
        };
        try{ 
            const user = await updateUserDetails(userData);
            setUser(user)
            notify("User Updated Successfully")
        }catch(err){
            console.error("Failed to update User:", err);
        }
    };

    return (
        <>
            <form className="create-user-form">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-label"
                    readOnly
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-label"
                    readOnly
                    required
                />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e, setPhone, setError)}
                    className="form-label"
                    required
                />
                {error && <p style={{ color: "red" }}>{error}</p>}

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

                <button type="submit" className="form-submit-button" onClick={handleUpdateUser}>
                    Update Profile
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
        </>
    )
}

export default ProfilePage