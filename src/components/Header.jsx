import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-2'>
            {/* logo */}
            <div className="logo">
                <img className='w-[320px]' src={logo} alt="" />
            </div>
            {/* slogan */}
            <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;