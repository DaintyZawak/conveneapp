import Button from "./Buttton";
import MeetingCard from "./MeetingCard";
import meetuppic1 from "../Assets/asia-businesswoman-social-distancing-new-normal-situation-virus-prevention-looking-camera-presentation-friends-about-plan-video-call-while-work-office-lifestyle-after-corona-virus.png";
import card1 from "../Assets/woman-with-headset-video-call.png";
import card2 from "../Assets/man-with-headset-video-call.png";
import card3 from "../Assets/young-asia-businessman-using-computer-laptop-talk-colleagues-about-plan-video-call-meeting-while-working-from-home-living-room.png";
import card4 from "../Assets/pro 2 2.png";
import vidIcon from "../Assets/icons8-video-call-24.png";
import audioIcon from "../Assets/icons8-microphone-24.png";

export default function MeetuppageMain() {

  return (
    <div className="mainWrap">
      <h1>Software Development weekly meetup</h1>
      <p>Sunday 3rd March 2024</p>

      <Button text="Share meeting link" />
      <div className="heroImgWrap">
        <img className="heroImg" src={meetuppic1} alt="meet up picture" />

        <span className="hostName">Wafa</span>
      </div>

      <div className="cardListWrap">
        <MeetingCard img={card1} name="Khadijah" />
        <MeetingCard img={card2} name="Innocent" />
        <MeetingCard img={card3} name="Hakeem" />
        <MeetingCard img={card4} name="You" />
      </div>

      <div className="footerWrap">
            <img className="icon" src={vidIcon} alt="video icon" />

            <button className="exitBtn">Leave Meeting</button>

            <img className="icon" src={audioIcon} alt="audio icon" />
      </div>
    </div>
  );
}
