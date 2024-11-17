import swimming from '../assets/swimming.png';
import classRoom from '../assets/class.png';
import playGround from '../assets/playground.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h2 className='font-semibold'>Q-zone</h2>
            <div>
                <img src={swimming} alt="" />
                <img src={classRoom} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default Qzone;