import './Banner.css';
import turn from '../Images/U-Turn.png';
import next from '../Images/Nextmove.png';
import pin from '../Images/Pinpoint.png';
import leaf from '../Images/Leafe.png';
import terra from '../Images/Terra.png';
import dune from '../Images/Dune.png';

export default function Banner(){
    return(
        <div className='banner'>
            <h2>Our Partners</h2>

            <div className='b-img'>
                <img src={turn} alt=''/>
                <img src={next} alt=''/>
                <img src={pin} alt=''/>
                <img src={leaf} alt=''/>
                <img src={terra} alt=''/>
                <img src={dune} alt=''/>
            </div>
        </div>
    );
};