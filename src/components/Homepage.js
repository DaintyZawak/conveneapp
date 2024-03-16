
import { Link
} from "react-router-dom";
import Background from "../Assets/backg.jpg";
import Networking from "../Assets/network-2.png";


function Homepage() {
  
    return (
      <div className="homepage">
        <div className="homenav">
          <div className="lefthomenav">
            <h3>Convene.</h3>
          </div>
          <div className="righthomenav">
            <ul>
              <li>Our Story</li>
              <li>Membership</li>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/adminlogin">Admin Console</Link></li>
              <li><Link to="/adminsignup">Become an admin</Link></li>
              <li>About us</li>
            </ul>
           
          </div>
        </div>
        <section className="homebody">
          <div className="backg">
            <img className="background" src={Background} alt="backg" />
            <div className="textcontainer">
              
              <h2>Make Group for Team Work!</h2>
            </div>
            <div className="imagecontainer">
              <img className="foreground" src={Networking} alt="network" />
            </div>
            <div className="imagecontainer2">
              <img className="foreground2" src={Networking} alt="network2" />
            </div>
            <div className="imagecontainer3">
              <img className="foreground3" src={Networking} alt="network3" />
            </div>
            <div className="imagecontainer4">
              <img className="foreground4" src={Networking} alt="network4" />
            </div>
          </div>
        </section>
        {/*<div className="homebody">
          <div className="backg">
              <img src={Background} alt="backg"/>
          </div>
          <div className="lefthomebody">
            <h2>Make Group for Team Work.</h2>
          </div>
          <div className="righthomebody">
            <img src={Networking} alt="networking" />
          </div>
    </div>*/}
      </div>
    );
  }
  
  export default Homepage;