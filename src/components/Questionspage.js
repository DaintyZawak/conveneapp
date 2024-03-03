import Questions
 from "./Questions";
 import profileIcon from "../Assets/pro 2 1.png";
 import questIcon from "../Assets/icons8-question-30.png";
 import sendIcon from "../Assets/icons8-send-comment-24.png";
 import profile1 from "../Assets/andriyko-podilnyk-jFAG_ixCrsM-unsplash.png";
 import profile2 from "../Assets/brian-lawson-9vzfoIpHTbs-unsplash.png";

export default function Questionpage() {
  return (
    <div className="queWrap">
      <div className="queHeader">
        <h1>Questions</h1>
        <p>
          You can post your questions here with other members during the meetup.
        </p>
      </div>

      <Questions
      img= {profile1}
      name= 'Sofiyat Gbadamosi'
      question= 'What is React?'
      upvote= {300}
      downvote= {20}
      comment= {105}
       />
      <Questions 
      img= {profile2}
      name= 'Obianuju Onoha'
      question= 'What is the difference between JavaScript and React?'
      upvote= {150}
      downvote= {55}
      comment= {33}
      />
      <Questions 
      img= {profileIcon}
      name= 'You'
      question= 'What is JavaScript?'
      upvote= {150}
      downvote= {55}
      comment= {1}
      />

      <div className="askQueWrap">
        <img src={questIcon} alt="question icon" width='24px' height='24px' />
        <textarea value="Ask a question..."> </textarea>
        <img src={sendIcon} alt="send icon" width='24px' height='24px' />
      </div>
    </div>
  );
}
