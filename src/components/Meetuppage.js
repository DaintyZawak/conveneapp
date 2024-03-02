import ProfileNav from './ProfileNav'
import Questionpage from './Questions'


import meetuppic1 from '../Assets/asia-businesswoman-social-distancing-new-normal-situation-virus-prevention-looking-camera-presentation-friends-about-plan-video-call-while-work-office-lifestyle-after-corona-virus.png'
import meetupcard1 from '../Assets/woman-with-headset-video-call.png'
import meetupcard2 from '../Assets/woman-with-headset-video-call.png'

export default function Meetuppage() {
    return (
        <div className='meetUpWrapper'>
         <ProfileNav />
         <Questionpage />
        </div>
    )
}