import Questions from "./Questions";
import profileIcon from "../Assets/pro 2 1.png";
import questIcon from "../Assets/icons8-question-30.png";
import sendIcon from "../Assets/icons8-send-comment-24.png";
import profile1 from "../Assets/andriyko-podilnyk-jFAG_ixCrsM-unsplash.png";
import profile2 from "../Assets/brian-lawson-9vzfoIpHTbs-unsplash.png";

export default function Questionpage() {
  return (
    
      <div className="rightbar">
        <div className="queWrap">
        <div className="scrollable">
        
          <div className="queHeader">
            <h1>Questions</h1>
            <h3 className="thoughts">
              Share your thoughts with other members and ask your questions
              here.
            </h3>
          </div>

          <Questions
            img={profile1}
            name="Sofiyat Gbadamosi"
            question="What is React?"
            upvote=""
            downvote=""
            comment={105}
          />
          <Questions
            img={profile2}
            name="Obianuju Onoha"
            question="What is the difference between JavaScript and React?"
            upvote=""
            downvote=""
            comment={33}
          />
          <Questions
            img={profileIcon}
            name="You"
            question="What is JavaScript?"
            upvote=""
            downvote=""
            comment={1}
          />

          <div className="askQueWrap">
            <img
              src={questIcon}
              alt="question icon"
              className="questionIcon"
              width="24px"
              height="24px"
            />
            
            <textarea value="Ask a question..."> </textarea>
            
            <img
              src={sendIcon}
              alt="send icon"
              className="sendIcon"
              width="24px"
              height="24px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
