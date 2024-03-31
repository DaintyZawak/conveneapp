import profileIcon from "../Assets/pro 2 1.png";
import thumbsUp from "../Assets/icons8-thumbs-up-24.png";
import thumbsDown from "../Assets/icons8-thumbs-down-24.png";
import commentIcon from "../Assets/icons8-comment-24.png";
import { useState } from "react";

export default function Questions(props) {
  const [upvote, setUpVote] = useState(0);
  const [downvote, setDownVote] = useState(0);

  function upVote() {
    setUpVote((prevvote) => prevvote + 1);
  }

  function downVote() {
    setDownVote((prevvote) => prevvote + 1);
  }
  return (

    <div>
      <div className="userQueWrap">
        <div className="que">
          <div className="que"></div>
          <img
            className="user"
            src={props.img}
            alt={props.name}
            width="43px"
            height="43px"
          />
          <div className="proQue">
            <h3>{props.name}</h3>

            <p>{props.question}</p>
          </div>
        </div>
        <div className="queIconsWrap">
          <img src={thumbsUp} alt="user icon" onClick={upVote} />
          <span>{upvote}</span>

          <img src={thumbsDown} alt="user icon" onClick={downVote} />
          <span>{downvote}</span>

          <span>
            <img src={commentIcon} alt="user icon" />
            {props.comment}
          </span>
          <span>9:44</span>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="questionWrap">
    //     <div className="quest">
    //       <img
    //         className="user"
    //         src={props.img}
    //         alt={props.name}
    //         width="50px"
    //         height="50px"
    //       />
    //       <div className="nameQuestion"></div>
    //       <div className="content">

    //         <h3 className="userName">{props.name}</h3>
    //         <p className="userQuestion">{props.question}</p>
    //         <div className="vote">
    //           <img className="up" src={thumbsUp} alt="user icon" onClick={upVote} />
    //           <span>{upvote}</span>
    //           <img className="down" src={thumbsDown} alt="user icon" onClick={downVote} />
    //           <span>{downvote}</span>
    //           <img className="comment" src={commentIcon} alt="user icon" />
    //           <span>{props.comment}</span>
    //           <div className="time">
    //           <span>9:44</span>
    //           </div>
    //         </div>
            
    //       </div>

    //     </div>
    //   </div>
    // </div>
  );
}
