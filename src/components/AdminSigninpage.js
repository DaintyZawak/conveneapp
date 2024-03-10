import { useState } from "react"
import Button from "./Buttton"

export default function AdminSignin() {
    const [formData, setFormData] = useState(
        {
            emailAddress: "", 
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
            <div className="welcomeTxt">
                <h1>Welcome Back to Convene!</h1>
                <h2>Login as an Admin
                </h2>
                </div>


                

                <form onSubmit={handleSubmit}>
                    
                    

                    <label htmlFor='emailAddress'> Email Address</label>
                        <input type='email' placeholder='Email' 
                        id="emailAddress" name="emailAddress" onChange={handleChange} value={formData.emailAddress} />
                    
                    <label htmlFor='password'> Password</label>
                        <input type='password' placeholder='Password'
                        id="password" name="password" onChange={handleChange} value={formData.password} />

                    
                    

                   <Button text= "Login"/>
                </form>
            </div>

        </>
    )
}