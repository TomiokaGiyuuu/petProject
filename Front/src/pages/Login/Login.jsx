import React, {useState, useEffect, useContext, useRef} from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {AuthContext} from "../../context/AuthContext";
import {loginCall} from "../../apiCalls";
import {GoogleLogin} from 'react-google-login'

export default function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", password: "" });
    const { isFetching, dispatch } = useContext(AuthContext);
    const email = useRef();
    const password = useRef();

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const validateForm = () => {
        const { email, password } = values;
        if (email === "") {
            toast.error("Email and Password is required.", toastOptions);
            return false;
        } else if (password === "") {
            toast.error("Email and Password is required.", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const { email, password } = values;
            await loginCall(
                {email, password},
                dispatch
            );
            console.log(email);
            console.log(password);
            navigate("/");
        }
    };

    return (
        <>
            <FormContainer>
                <form action="" onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <h1>YouMe</h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        minLength="3"
                        ref={email}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                        minLength="8"
                        ref={password}
                    />
                    <button className="logBtn" type="submit">Log In</button>
                    <span>
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  h1, span, button {
    font-family: 'Josefin sans', sans-serif;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    img {
      height: 5rem;
    }

    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: rgb(26, 25, 25);
    border-radius: 2rem;
    padding: 5rem;
  }

  input {
    font-family: 'Josefin sans', sans-serif;
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #d0d0d0;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;

    &:focus {
      border: 0.1rem solid #f7f7f7;
      outline: none;
    }
  }

  button {
    font-family: 'Josefin sans', sans-serif;
    background-color: #a09ea3;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;

    &:hover {
      background-color: #bebbc0;
    }
  }

  span {
    color: white;
    text-transform: uppercase;

    a {
      color: #ffffff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
