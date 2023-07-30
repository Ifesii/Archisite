import './Footer.css';
import blogo from '../Images/logo-arch.png';


export default function Footer(){
    return(
        <footer>

            <img src={blogo} alt=''/>

            <ul>
                <li>About us</li>
                <li>How it works</li>
                <li>FAQ</li>
                <li>Contact us</li>
                <li>Privacy</li>
            </ul>
        </footer>
    );
};