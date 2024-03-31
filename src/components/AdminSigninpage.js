import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Buttton"

export default function AdminSignin() {
    const [formData, setFormData] = useState(
        {
            emailAddress: "", 
            username: "", 
            password: "",
        }
        
        )

        console.log(formData)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        if(formData.password === formData.confirmPassword){
           console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
        }

        // submitToApi(formData)
    }
    

    return (
        <>

            <div className="onboardingPage">
                <div className="overallSignin">
                <form onSubmit={handleSubmit}>
            
            <div className="welcomeTxt">
        <h2 className="convene">Convene</h2>
          
                <h1 className="welcome">Welcome Back!</h1>
                <h2 className="convene">Login as an Admin
                </h2>
                <div className="signUpLink">
            <p className="already">
              Don't have an account?{" "}<span className="span"><Link to="/adminsignup">Sign up</Link></span>
            </p>
          </div>
                </div>


                

                
                    
                    

                    <label htmlFor='emailAddress'> Email Address</label>
                        <input type='email' placeholder='Email' 
                        maxLength="100"
                        minLength="3"
                        id="emailAddress" name="emailAddress" 
                        onChange={handleChange} value={formData.emailAddress} />
                    
                    <label htmlFor='password'> Password</label>
                        <input type='password' placeholder='Password'
                         maxlength="100"
                         minLength="3"
                        id="password" name="password" onChange={handleChange} value={formData.password} />

                    

                   <Button text= "Login"/>
                </form>
            </div>
            </div>
        </>
    )
}