import card1 from "../Assets/woman-with-headset-video-call.png"
import card2 from "../Assets/man-with-headset-video-call.png"
import card3 from "../Assets/young-asia-businessman-using-computer-laptop-talk-colleagues-about-plan-video-call-meeting-while-working-from-home-living-room.png"


export default function MeetingCard(props){
    return (
        <div className="cardWrap">
            <img className="card" src={props.img} alt="meet up picture" />

<span className="particName">{props.name}</span>
        </div>
    )
} 