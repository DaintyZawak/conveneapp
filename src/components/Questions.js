import profileIcon from "../Assets/pro 2 1.png";
import thumbsUp from "../Assets/icons8-thumbs-up-24.png";
import thumbsDown from "../Assets/icons8-thumbs-down-24.png";
import commentIcon from "../Assets/icons8-comment-24.png";


export default function Questions(props) {
    return (
        <div>
            <div className="userQueWrap">
        <div className="que">
          <div className="que"></div>
          <img className="user" src={props.img} alt={props.name} width='43px' height='43px' />
          <div className="proQue">
            <h3>{props.name}</h3>

            <p>{props.question}</p>
          </div>
        </div>
        <div className="queIconsWrap">
            <span>
          <img src={thumbsUp} alt="user icon" />{props.upvote}</span>

         <span> <img src={thumbsDown} alt="user icon" />{props.downvote}</span>

          <span><img src={commentIcon} alt="user icon" />{props.comment}</span>
          <span>9:44</span>
        </div>
        
      </div>
        </div>
    )
}