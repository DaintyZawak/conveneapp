import ProfileNav from './ProfileNav'
import MeetuppageMain from './MeetuppageMain'
import Questionpage from './Questionspage'



import meetupcard1 from '../Assets/woman-with-headset-video-call.png'
import meetupcard2 from '../Assets/woman-with-headset-video-call.png'

export default function Meetuppage() {
    return (
        <div className='meetUpWrapper'>
         <ProfileNav />
         <MeetuppageMain />
         <Questionpage />
        </div>
    )
}