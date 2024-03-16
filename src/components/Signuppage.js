import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Button from "./Buttton";





  
    export default function Signup() {
    //   <Route exact path="/signup">
    //    <Signup />
    // </Route>

      const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
        comments: "",
        agreement: true,
        contact: "",
        location: "",
        rememberForget: true,
      });

      
      const [error, setError] = useState("")
      const signUp = useUserAuth();
      const navigate = useNavigate();
    
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
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
          await signUp(formData.email, formData.password);
          navigate("/");
        } catch (err) {
          setError(err.message);
        }
      };
    
      return (
        <>
          <div className="onboardingPage">
            <div class="welcomeTxt">
              <h1>Welcome to Convene!</h1>
              <h2>Create account</h2>
    
                <div className="loginLink">
                <p>Already have an account? <Link to="/login">Login</Link></p>
                
              
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className="inputBox">
              <label htmlFor="firstName"> First Name</label>
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
              </div>
    
              <div className="inputBox">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                onChange={handleChange}
                value={formData.username}
                required
              />
              <FaUser className="user" />
              </div>
    
              <div className="inputBox">
              <label htmlFor="lastName"> Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                required
              />
              </div>
    
              <div className="inputBox">
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
              </div>
    
              <div className="inputBox">
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
              />
                <FaLock className="icon" />
              </div>
    
              <div className="inputBox">
              <label htmlFor="confirmPassword"> Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.password}
                required
              />
    
              </div>
    
              
    
                <div className="agreement">
                <div className="inputBox">
              <input
                id="agreement"
                type="checkbox"
                onChange={handleChange}
                name="agreement"
                checked={formData.agreement}
                required
              />
              </div>
    
              
              <label htmlFor="agreement">
                {" "}
                I have read and agreed to the <a href="">Terms of Service</a>
                
              </label>
    
              <div className="rememberForget">
              <input
                id="rememberForget"
                type="checkbox"
                onChange={handleChange}
                name="rememberForget"
                checked={formData.rememberForget}
                required
              />
              </div>
    
              
              <label htmlFor="rememberForget">
                {" "}
                Remember me <a>Forgot password?</a>
                
              </label>

              
              
                </div>
    
             
    
              <Button text="Sign up" />
              
            </form>
          </div>
        </>
      );
}
























// export default function Signup() {
//   <Route exact path="/signup">
//      <Signup />
//   </Route>

//   const [formData, setFormData] = useState({
//           firstName: "",
//           lastName: "",
//           username: "",
//           emailAddress: "",
//           password: "",
//           confirmPassword: "",
//           comments: "",
//           agreement: true,
//           contact: "",
//           location: "",
//           rememberForget: true,
//         });

//         function handleChange(event) {
//               const { name, value, type, checked } = event.target;
//               setFormData((prevFormData) => {
//                 return {
//                   ...prevFormData,
//                   [name]: type === "checkbox" ? checked : value,
//                 };
//               });
//             }
          
//             function handleSubmit(event)
//                   {
//                     event.preventDefault()
//                     // submitToApi(formData)
//                   }
          
// const [action, setAction] = useState("Login")

//     // const handleClick = () => {
//     //     setAction((prevaction) => {
//     //         return {
//     //             ...prevaction,
//     //         "Sign Up" : "Login"
//     //         }
//     //     })
//     // }
//     return (
//             <>
//               <div className="onboardingPage">
//                 <div class="welcomeTxt">

//                   <h1>Welcome to Convene!</h1>
//                 <h2>{action}</h2>
//                     <div className="loginLink">
//                   {action === "Login" ? <div></div> :  <p>
//                     Already have an account? <Link to={ Signup } > {action === "Sign Up" && "Login"} </Link>  </p> }
                        
                    
                 
//                   </div>
//                 </div>
                
//                 <form onSubmit={handleSubmit}>
//                     <div className="inputBox">
                  
//                   {action === "Login" ? <div></div> : <label htmlFor="firstName"> First Name 
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     id="firstName"
//                     name="firstName"
//                     onChange={handleChange}
//                     value={formData.firstName}
//                     required
//                   /> </label> }

            
//                   </div>
        
//                   <div className="inputBox">
//                     {action === "Sign Up" ? <div></div> : <label htmlFor="userName">Username
//                   <input
//                     type="text"
//                     placeholder="Username"
//                     id="username"
//                     name="username"
//                     onChange={handleChange}
//                     value={formData.username}
//                     required
//                   /> </label> }
                  
                  
                  
//                   <FaUser className="user" />
                  
//                   </div>
        
//                   <div className="inputBox">
//                   {action === "Login" ? <div></div> : 
//                   <label htmlFor="lastName"> Last Name
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     id="lastName"
//                     name="lastName"
//                     onChange={handleChange}
//                     value={formData.lastName}
//                     required
//                   /> </label>}
//                   </div>
        
//                   <div className="inputBox">
//                   <label htmlFor="emailAddress"> Email Address</label>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     id="emailAddress"
//                     name="emailAddress"
//                     onChange={handleChange}
//                     value={formData.emailAddress}
//                     required
//                   />
//                   </div>
        
//                   <div className="inputBox">
                    
//                   <label htmlFor="password"> Password</label>
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     id="password"
//                     name="password"
//                     onChange={handleChange}
//                     value={formData.password}
//                     required
//                   />
//                     <FaLock className="icon" />
//                   </div>
        
//                   <div className="inputBox">
//                   {action === "Login" ? <div></div> : <label htmlFor="confirmPassword"> Confirm Password
//                   <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     onChange={handleChange}
//                     value={formData.confirmPassword}
//                     required
//                   /> </label>}
                  
        
//                   </div>
        
                  
        
//                     <div className="agreement">
//                     <div className="inputBox">
//                         {action === "Login" ? <div></div> :  <label htmlFor="agreement">
//                     {" "}
//                     I have read and agreed to the <a href="">Terms of Service</a> <input
//                     id="agreement"
//                     type="checkbox"
//                     name="agreement"
//                     onChange={handleChange}
//                     checked={formData.agreement}
//                     required
//                   /> </label> }
                 
//                   </div>
        
                  
                  
                    
                  
        
//                   <div className="rememberForget">
//                     {action === "Sign Up" ? <div></div> :
//                     <label htmlFor="rememberForget">
//                     {" "} Remember me <a>Forgot password?</a>
//                     <input
//                     id="rememberForget"
//                     type="checkbox"
//                     name="rememberForget"
//                     onChange={handleChange}
//                     checked={formData.rememberForget}
//                     required
//                   />  </label>}
                 
//                   </div>
        
                  
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
                    
                    
                 
                  
                  
//                     </div>
        
        
//                   <button className={action === "Login" ? "button grey" : "button"} onClick={() => {setAction("Sign Up")}}>Sign Up</button>
//                   <button className={action === "Sign Up" ? "button grey" : "button"} onClick={() => {setAction("Login")}}>Login</button>
                  
//                 </form>
//               </div>
//             </>
//           );
        
        
// }

