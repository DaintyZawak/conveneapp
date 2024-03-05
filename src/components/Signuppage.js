import { useState } from "react";
import Button from "./Buttton";
export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    comments: "",
    agreement: true,
    contact: "",
    location: "",
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event)
        {
          event.preventDefault()
          // submitToApi(formData)
        }

  return (
    <>
      <div className="onboardingPage">
        <div class="welcomeTxt">
          <h1>Welcome to Convene!</h1>
          <h2>Create account</h2>

          <p>
            Already have an account? <a href="">Sign in</a>
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName"> First Name</label>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />

          <label htmlFor="lastName"> Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />

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

          <label htmlFor="confirmPassword"> Password</label>
          <input
            type="password"
            placeholder="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.password}
          />

          <label htmlFor="agreement">
            {" "}
            I have read and agreed to the <a href="">Terms of Service</a>
          </label>
          <input
            id="agreement"
            type="checkbox"
            onChange={handleChange}
            name="agreement"
            checked={formData.agreement}
          />

          <fieldset>
            <legend>How did you find out about us?</legend>
            <label htmlFor="instagram">Instagram</label>
            <input
              id="instagram"
              name="contact"
              value="instagram"
              type="radio"
              onChange={handleChange}
              checked={formData.contact === "instagram"}
            />

            <label htmlFor="facebook">Facebook</label>
            <input
              id="facebook"
              name="contact"
              value="facebook"
              type="radio"
              onChange={handleChange}
              checked={formData.contact === "instagram"}
            />

            <label htmlFor="newsletter">Newsletter</label>
            <input
              id="newsletter"
              name="contact"
              value="newsletter"
              type="radio"
              onChange={handleChange}
              checked={formData.contact === "instagram"}
            />

            <label htmlFor="other">Other</label>
            <input
              id="other"
              name="contact"
              value="other"
              type="radio"
              onChange={handleChange}
              checked={formData.contact === "instagram"}
            />

            <label htmlFor="location"> Where is your location? </label>
            <select
              id="location"
              value={formData.location}
              onChange={handleChange}
              name="location"
            >
              <option value="">--- Choose ---</option>
              <option value="lagos">Lagos</option>
              <option value="ogun">Ogun</option>
              <option value="oyo">Oyo</option>
              <option value="ondo">Ondo</option>
              <option value="ekiti">Ekiti</option>
            </select>

            <label htmlFor="comments">
              <textarea
                value={formData.comments}
                placeholder="Any comments for us?"
                id="comments"
                onChange={handleChange}
                name="comments"
              />{" "}
            </label>
          </fieldset>

          <Button text="Sign up" />
        </form>
      </div>
    </>
  );
}
