import Meetuppage from './components/Meetuppage';
import Signup from './components/Signuppage';
import Signin from './components/Signinpage';
// import Homepage from './components/Homepage';
import Userprofile from './components/Userprofile';
import './App.css';

export default function App() {
  return (
    <>
    {/* <Homepage /> */}
    <Signup  />
    <Signin /> 
    <Meetuppage />
    <Userprofile />

    </>
  )
}