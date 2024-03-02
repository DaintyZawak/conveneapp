import Button from "./Buttton"

export default function Signin() {
    return (
        <>

            <div className="onboardingPage">

                <div className="welcomeTxt">
                <h1>Welcome Back to Convene!</h1>
                <h2>Login</h2>
                </div>
        
                <form>
                    <label for='username'> Username/Email 
                        <input type='text' placeholder='Username / Email' />
                    </label>

                    <label for='password'> Password
                        <input type='password' placeholder='Password' />
                    </label>

                    <Button text= "Login"/>
                    
                </form>
            </div>

        </>
    )
}