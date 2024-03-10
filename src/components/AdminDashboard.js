import profileAvatar from "../Assets/Union.png";
import profileIcon from "../Assets/pro 2 1.png";
import thumbsUp from "../Assets/icons8-thumbs-up-24.png";
import thumbsDown from "../Assets/icons8-thumbs-down-24.png";
import commentIcon from "../Assets/icons8-comment-24.png";
import Button from "./Buttton";

export default function AdminDashboard() {
  return (
    <div className="profile">
      <div class="welcomeTxt">
        <h1>My Admin Dashboard</h1>
        <div className="profileDetailsWrap">
          <img className="icon" src={profileAvatar} alt="profile avater" />
          <div className="profileDetails">
            <h2>Personal Details</h2>
            <div>
              <h3>Username</h3>
              <p>Jane Doe</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>janedoe@me.com</p>
            </div>
            <div>
              <h3>Password</h3>
              <p>********</p>
            </div>
          </div>

          <div className="createMeetup">
            <h2>Create Meetup</h2>

            <div>
              <fieldset>
                <legend>Meeting Mode</legend>
                <label htmlFor="conference">Conference</label>
                <input
                  id="conference"
                  name="meeting"
                  value="conference"
                  type="radio"
                  // onChange={handleChange}
                  // checked={formData.contact === "conference"}
                />

                <label htmlFor="webinar">Webinar</label>
                <input
                  id="webinar"
                  name="meeting"
                  value="webinar"
                  type="radio"
                  // onChange={handleChange}
                  // checked={formData.contact === "webinar"}
                />
              </fieldset>

              <div className="meetingTopic">
                <h3>Meeting Topic: <span>Software Development Meetup</span></h3>
                <p>Meeting / Room Name</p>
                <div>
                <p>Password</p>
                
                  <button>Generate</button>
                </div>
                <Button text="Create Meetup"/>
              </div>
            </div>
          </div>

          <div className="upcomingEvents">
            <h2>Scheduled Events</h2>
            <div>
              <h3>Product Development Hangout</h3>
              <p>
                The largest product development hangout in Africa! Ask our
                experts any questions.
              </p>
              <span>Date: 31/4/2024</span>
              
            </div>

            <Button text="Delete Meetup"/>
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
            </div>

            <Button text="Delete Meetup"/>
          </div>
        </div>
      </div>
    </div>
  );
}
