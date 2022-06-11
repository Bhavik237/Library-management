import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    let [_email, setEmail] = useState("");
    let [_password, setPassword] = useState("");
    let navigate = useNavigate();
    /*

    req.body.email
    */
    function registerAdmin() {
        const form = new FormData();
        form.append("email", _email);
        form.append("password", _password);

        axios
            .post("/login/", form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((data) => {
                console.log(data);
                navigate("/home");
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
            <button onClick={registerAdmin}>Login</button>
        </div>
    );
}

export default Login;
