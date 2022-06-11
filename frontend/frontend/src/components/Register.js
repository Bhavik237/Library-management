import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    let [_email, setEmail] = useState("");
    let [_password, setPassword] = useState("");
    let navigate = useNavigate();
    /*

    req.body.email
    */
    function registerAdmin() {
        axios
            .post("/signup/", {
                email: _email,
                password: _password,
            })
            .then((data) => {
                console.log(data);
                navigate("/login");
            })
            .catch((err) => {
                console.log(
                    "Something went Wrong while Registring  Admin: ",
                    err
                );
            });
    }

    return (
        <div className="_register">
            <input
                placeholder="Email"
                type="email"
                value={_email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password"
                type="text"
                value={_password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={registerAdmin}>Register</button>
        </div>
    );
}

export default Register;
