import profileAvatar from "../Assets/Union.png";
import profileIcon from "../Assets/pro 2 1.png";
import thumbsUp from "../Assets/icons8-thumbs-up-24.png";
import thumbsDown from "../Assets/icons8-thumbs-down-24.png";
import commentIcon from "../Assets/icons8-comment-24.png";

export default function Userprofile() {
  return (
    <div className="profile">
      <div class="welcomeTxt">
        <h1>My Profile</h1>
        <div className="profileDetailsWrap">
          <img className="icon" src={profileAvatar} alt="profile avater" />
          <div className="profileDetails">
            <h2>Personal Details</h2>
            <div>
              <h3>User Name</h3>
              <p>John Doe</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>johndoe@me.com</p>
            </div>
            <div>
              <h3>Password</h3>
              <p>********</p>
            </div>
          </div>

          <div className="activities">
            <aside>
              <h2>Activities</h2></aside>

              <div>
                <h3>
                  Number of Questions Asked: <span>35</span>
                </h3>

                <div className="btnWrap">
                  <button className="view">View history</button>
                  <button className="view">View your comments</button>
                </div>
              </div>
            
          </div>

          <div className="upcomingEvents">
            <h2>Upcoming Events</h2>
            <div>
              <h3>Product Development Hangout</h3>
              <p>
                The largest product development hangout in Africa! Ask our
                experts any questions.
              </p>
              <span>Date: 31/4/2024</span>
              <p>Status: You are scheduled to attend!</p>
            </div>

            <div className="queIconsWrap">
              <span>
                <img src={thumbsUp} alt="user icon" />
              </span>

              <span>
                {" "}
                <img src={thumbsDown} alt="user icon" />
              </span>

              <span>
                <img src={commentIcon} alt="user icon" />
              </span>
              <span>9:44</span>
            </div>
          </div>

          <div className="upcomingEvents">
            <h2>Upcoming Events</h2>
            <div>
              <h3>Software Development Hangout</h3>
              <p>
                The largest software development hangout in Africa! Ask our
                experts any questions.
              </p>
              <span>Date: 31/4/2024</span>
              <p>Status: You are scheduled to attend!</p>
            </div>

            <div className="queIconsWrap">
              <span>
                <img src={thumbsUp} alt="user icon" />
              </span>

              <span>
                {" "}
                <img src={thumbsDown} alt="user icon" />
              </span>

              <span>
                <img src={commentIcon} alt="user icon" />
              </span>
              <span>9:44</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
