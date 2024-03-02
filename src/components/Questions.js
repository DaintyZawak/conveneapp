import profileIcon from "../Assets/pro 2 1.png";
import questIcon from "../Assets/icons8-question-30.png";
import thumbsUp from "../Assets/icons8-thumbs-up-24.png";
import thumbsDown from "../Assets/icons8-thumbs-down-24.png";
import commentIcon from "../Assets/icons8-comment-24.png";

export default function Questionpage() {
  return (
    <div className="queWrap">
      <div className="queHeader">
        <h1>Questions</h1>
        <p>
          You can post your questions here with other members during the meetup.
        </p>
      </div>

      <div className="userQueWrap">
        <div className="que">
          <div className="que"></div>
          <img src={profileIcon} alt="user icon" />
          <div className="proQue">
            <h3>You</h3>

            <p>What is JavaScript?</p>
          </div>
        </div>
        <div className="queIconsWrap">
          <img src={thumbsUp} alt="user icon" />

          <img src={thumbsDown} alt="user icon" />

          <img src={commentIcon} alt="user icon" />
        </div>
        <span>9:44</span>
      </div>

      <div className="askQueWrap">
        <img src={questIcon} alt="question icon" />
        <textarea placeholder="Write a message..."> </textarea>
      </div>
    </div>
  );
}
