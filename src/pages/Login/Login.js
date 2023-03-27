import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import "./Login.css";

function Login() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:4000/Login", {
          username,
          password,
        })
        .then((data) => {
          console.log(25, data);
          console.log(26, data.status, "ok");
          if (data.data.status === "ok") {
            history("/dashboard");
          } else {
            alert("Wrong Credential");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login-form-container">
      <form className="login-form">
        <div className="login-form-content">
          <h3 className="login-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="admin"
              className="form-control mt-1"
              placeholder="Admin"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type={visible ? "type" : "password"}
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <div className="p-2 Eye" onClick={() => setVisible(!visible)}>
              {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
