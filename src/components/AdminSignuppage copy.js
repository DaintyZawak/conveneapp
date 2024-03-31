import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Buttton";
export default function AdminSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    comments: "",
    agreement: true,
    contact: "",
    industry: "",
    // file: ""
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

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
  }

  return (
    <>
      <div className="onboardingPage">
        <div className="overallSignup">
        <form onSubmit={handleSubmit} className="form">
        <div class="welcomeTxt">
          
              <h2 className="convene">Welcome to Convene!</h2>
          <h1 className="welcome">Create an Admin Account</h1>
    
                <div className="loginLink">
                <p className="already">Already have an account?{" "}
                <span className="span">
                <Link to="/adminlogin">Login</Link></span></p>
               
              
              </div>
        </div>

        
          <label htmlFor="firstName"> First Name</label>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            name="firstName"
            maxLength="100"
            minLength="3"
            onChange={handleChange}
            value={formData.firstName}
          />

          <label htmlFor="lastName"> Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            maxlength="100"
            minLength="3"
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
            required
          />

          <label htmlFor="password"> Password</label>
          <input
            type="password"
            placeholder="Create a password"
            minLength="6"
            maxlength="15"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />

          <label htmlFor="confirmPassword"> Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            minLength="6"
            maxlength="15"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.password}
          />

            <label htmlFor="industry" className="industry"> Industry </label>
            <select
              id="industry"
              value={formData.location}
              onChange={handleChange}
              name="industry"
            >
              <option value="">--- Choose ---</option>
              <option value="tech">Tech</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="sciences">Sciences</option>
              <option value="Business">Business</option>
              <option value="creative">Creative</option>
              <option value="entrepreneurship">Entrepreneurship</option>
              <option value="other">Other</option>
            </select>

            <fieldset> 
              <legend>Provide an overview of your professional background and experience {" "} </legend>           <label htmlFor="comments"> </label>
              <textarea className="textarea"
                value={formData.comments}
                placeholder=""
                id="comments"
                onChange={handleChange}
                name="comments"
              />{" "}
            

            <label htmlFor="file" className="fileLabel">Upload any of your recent professional certification(s)</label>
            <input type="file" 
            id="file" onChange={handleChange} name="file" />
            </fieldset>

            <Button text="Sign up" />

          <div className="agreement">
          <label htmlFor="agreement" className="checkbox-label">
              <input
                id="agreement"
                type="checkbox"
                onChange={handleChange}
                name="agreement"
                checked={formData.agreement}
                required
              />

              <p>{" "}I have read and agreed to the{" "}<span className="span"><a href="" className="terms">Terms of Service</a></span></p>
                </label>
          </div>

          {/* <fieldset>
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
          </fieldset> */}

          
        </form>
      </div>
      </div>
    </>
  );
}
