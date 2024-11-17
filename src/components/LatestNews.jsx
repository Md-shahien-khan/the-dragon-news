import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
           <Marquee pauseOnHover={true} speed={100} className="space-x-10">
            <Link to="/news">picture, if you will, the scene in Mar-a-Lago on election night at the moment when it’s become clear that Trump has won. The atmosphere is hysterical. Trump is in expansive form. He stands surrounded by his ghastly tribe of dependant, plus AN Other.
            </Link>
            <Link to='/news'>
            Manchester City have apparently sent a letter to all Premier League clubs, including Manchester United, ahead of a key vote on redrafted finance rules next week.
            </Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;