import './Header.css';
import Button from '../UI/Button/Button';
import himg from '../Images/Image.png';

export default function Header(){
    return(
        <header>
            <h1>Build Your <span>Dream<span className='house'>House</span></span></h1>

            <div className='lower'>
                <div>
                <p>100% guaranteed build safe,<span>comfortable and transparent with a</span>  project management for the best result</p>

                <Button />
                </div>

                <img src={himg} alt=''/>
            </div>
        </header>
    );
};