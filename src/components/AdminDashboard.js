import profileAvatar from "../Assets/Union.png";
import profileIcon from "../Assets/pro 2 1.png";
import thumbsUp from "../Assets/icons8-thumbs-up-24.png";
import thumbsDown from "../Assets/icons8-thumbs-down-24.png";
import commentIcon from "../Assets/icons8-comment-24.png";
import Button from "./Buttton";

export default function AdminDashboard() {
  return (
    <div className="overallProfile">
      <div className="profile">
        <div className="leftside">
        <div className="profileTxt">
            <h3>My Admin Dashboard</h3>
            </div>
            <div className="avater">
              <img
                className="avatarImg"
                src={profileAvatar}
                alt="profile avater"
              />
              <div className="profileDetails">
                <h2 className="profileName">Personal Details</h2>
                <div className="userDetails">
                  <p>
                    {" "}
                    <span className="bold">Username : </span>
                    <i className="italic">Jane Doe</i>
                  </p>
                  <p>
                    <span className="bold">Email : </span>
                    <i className="italic">johndoe@me.com</i>
                  </p>
                  <p>
                    <span className="bold">Password : </span>
                    <i className="italic">*********</i>
                  </p>
                </div>
                </div>
                <div className="logOutButton">
                  <Button id="buttn" text="Log out" />
                </div>
             
            </div>
            </div>
          

          <div className="rightside">
            <div className="profileTxt">
            <h3>Create Meetup</h3>
            </div>
              <div className="activities">
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
                    <div className="profileTxt">                    <h3>
                      Meeting Topic: <span>Software Development Meetup</span>
                    </h3>
                    </div>

                    <p>Meeting / Room Name: </p>
                    <div>
                      <p>Password: </p>

                      <div className="generateCode">

                      <Button text="Generate" />
                      </div>
                    </div>
                    <div className="createMeetup">                    <Button text="Create Meetup" />
                    </div>

                  </div>
                </div>
              </div>
          </div>

          <div className="eventFeed">
          <h2>Scheduled Events</h2>
            <div className="upcomingEvents">
              
              <div>
                <h3>Product Development Hangout</h3>
                <p>
                  The largest product development hangout in Africa! Ask our
                  experts any questions.
                </p>
                <span>Date: 31/4/2024</span>
              </div>

           
              

              <Button text="Delete Meetup" />
              </div>   

            <div className="upcomingEvents">
              
              <div>
                <h3>Software Development Hangout</h3>
                <p>
                  The largest software development hangout in Africa! Ask our
                  experts any questions.
                </p>
                <span>Date: 31/4/2024</span>
              </div>

              <Button text="Delete Meetup" />
            </div>
          </div>
        
    </div>
  );
}
