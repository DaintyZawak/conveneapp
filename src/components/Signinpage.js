import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  sendEmailVerification,
  updatePassword,
  sendPasswordResetEmail,
  deleteUser,
  reauthenticateWithCredential,
  getIdToken
} from "firebase/auth";
import Button from "./Buttton";

export default function Signin() {
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
    username: "",
    rememberForget: true,
    // confirmPassword: "",
  });

  const [error, setError] = useState("");
  const logIn = useUserAuth();
  const googleSignin = useUserAuth();
  console.log(logIn);
  const navigate = useNavigate();

  console.log(formData);

  // function handleChange(event) {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  function handleChange(event) {
    setFormData((prevFormData) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
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

  // Email & Password Sign in

  const auth = getAuth();
  const user = auth.currentUser;

  signInWithEmailAndPassword(auth, formData.emailAddress, formData.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }

  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }

  updateProfile(auth.currentUser, {
    displayName: "Jane Q. User",
    photoURL: "https://example.com/jane-q-user/profile.jpg",
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  updateEmail(auth.currentUser, "user@example.com")
    .then(() => {
      // Email updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  // sendEmailVerification(auth.currentUser)
  //   .then(() => {
  //     // Email verification sent!
  //     // ...
  //   });

    auth.languageCode = 'it';
    // To apply the default browser preference instead of explicitly setting it.
    auth.useDeviceLanguage();

  // // const newPassword = getASecureRandomPassword();

  // // updatePassword(user, newPassword).then(() => {
  // //   // Update successful.
  // // }).catch((error) => {
  // //   // An error ocurred
  // //   // ...
  // // });

  sendPasswordResetEmail(auth, formData.emailAddress)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  auth.languageCode = "it";
  // To apply the default browser preference instead of explicitly setting it.
  auth.useDeviceLanguage();

  deleteUser(user)
    .then(() => {
      // User deleted.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });

  // reauthenticateWithCredential(user, credential).then(() => {
  //   // User re-authenticated.
  // }).catch((error) => {
  //   // An error ocurred
  //   // ...
  // });

  

  // Google Sign in
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
        <div className="overallSignin">
        <form onSubmit={handleSubmit}>
        <div className="welcomeTxt">
        <h2 className="convene">Convene</h2>
          <h1 className="welcome">Welcome Back!</h1>
          {/* <h2>Login</h2> */}
          
          <div className="signUpLink">
            <p className="already">
              Don't have an account?{" "}
              <span className="span"> 
              <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </div>

        <div className="labelInput">
            
          <label htmlFor="emailAddress"> Email Address</label>
          <input
            type="email"
            placeholder="Email"
            id="emailAddress"
            name="emailAddress"
            onChange={handleChange}
            value={formData.emailAddress}
          />

{/* <label htmlFor="username"> Username </label>
          <input
            type="text"
            placeholder="Enter username"
            maxLength="100"
            minLength="3"
            id="username"
            name="username"
            onChange={handleChange}
            value={formData.username}
          /> */}

          <label htmlFor="password"> Password</label>
          <input
            type="password"
            placeholder="Password"
            id="signinPassword"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />

          <Button text="Login" />
          {/* <hr />
          <div>
            <GoogleButton onClick={handleGoogleSignIn} />
          </div> */}


          {/* {error && <p className="error">{error}</p>}
          <div className="signinLabelButton">
            <button className="btn" id="btnn" type="submit">
              Sign in
            </button>
          </div> */}

<div className="rememberForget">
<label htmlFor="rememberForget" className="checkbox-label">
              <input
                id="rememberForget"
                type="checkbox"
                onChange={handleChange}
                name="rememberForget"
                checked={formData.rememberForget}
                required
              />
<p>{" "}
                Remember me <span className="span"><a href="" className="terms">Forgot password?</a></span></p>
</label>
              </div>
    
              
              
                
                



          </div>
          
        </form>
      </div>
      </div>
    </>
  );
}
