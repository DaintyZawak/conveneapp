import Button from "./Buttton"
export default function Signup() {
    return (
        <>

            <div className="onboardingPage">
                <div class='welcomeTxt'>
                <h1>Welcome to Convene!</h1>
                <h2>Create account</h2>

                <p>Already have an account? <a href=''>Sign in</a></p> 
                </div>

                <form>
                    <label for='firstName'> First Name
                        <input type='text' placeholder='First Name' />
                    </label>

                    <label for='lastName'> Last Name
                        <input type='text' placeholder='Last Name' />
                    </label>

                    <label for='emailAddress'> Email
                        <input type='email' placeholder='Email' />
                    </label>

                    <Button text= "Sign up"/>
                    <p>I have read and agree to the <a href=''>Terms of Service</a></p>
                </form>
            </div>

        </>
    )
}