import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import Button from "./Buttton";

export default function Signin() {
  const [formData, setFormData] = useState("Login", {
    emailAddress: "",
    password: "",
    // confirmPassword: "",
  });

  const [error, setError] = useState("");
  const logIn  = useUserAuth();
  const googleSignin = useUserAuth();
  console.log(logIn)
  const navigate = useNavigate();

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if(formData.password === formData.confirmPassword){
    //    console.log("Successfully signed up")
    // } else {
    //     console.log("Passwords do not match")
    // }

    setError("");
    try {
      await logIn(formData.emailAddress, formData.password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }

    // submitToApi(formData)
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignin();
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="onboardingPage">
        <div className="welcomeTxt">
          <h1>Welcome Back to Convene!</h1>
          <h2>Login</h2>
          <div className="signUpLink">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="emailAddress"> Email Address</label>
          <input
            type="email"
            placeholder="Email"
            id="emailAddress"
            name="emailAddress"
            onChange={handleChange}
            value={formData.emailAddress}
          />

          <label htmlFor="password"> Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />

          <Button text="Login" />
          <hr />
          <div>
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </form>
      </div>
    </>
  );
}
