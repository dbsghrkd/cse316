import React, { useState } from "react";
import Nav from "../Nav";
import Axios from 'axios';
import '../App.css'; 


const move = () =>{
    window.location.href ="./Update"
}

function UserInfoPage() {
    const [userID, setUserID] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const handleUserInfoRequest = async () => {
        try {
            const response = await Axios.post("http://localhost:3001/getName", { userID });
            setUserInfo(response.data);
        } catch (error) {
            console.error("Error fetching user information:", error);
        }
    };

    return (
        <div>
            <Nav />
            <div className="UserInfoPage">
                <h1>Please Enter your ID to Check Information: </h1>
                <br />
                <div className="formGroup">
                    <label htmlFor="userName">ID:</label>
                    <input
                        type="text"
                        id="userName"
                        name="username"
                        placeholder="ID"
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                    />
                    <button type="button" className="login-btn" onClick={handleUserInfoRequest}>
                        Enter
                    </button>
                </div>

                {userInfo && (
                    <div className="userInfoContainer">
                        <h2>User Information</h2>
                        <div className="userInfo">
                            <p>User Name: {userInfo.userName}</p>
                            <p>User Email: {userInfo.email}</p>
                            <p>User Age: {userInfo.age}</p>
                           
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserInfoPage;
