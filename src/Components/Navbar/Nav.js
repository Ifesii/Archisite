import './Nav.css';
import logo from '../Images/logo-arch.png';

export default function Nav() {
    return(
        <nav>
            <img src = {logo} alt=''/>

            <ul>
                <a href = '/'><li>How it Works</li></a>
                <a href = '/'><li>Design Gallery</li></a>
                <a href = '/'><li>Architects</li></a>
                <a href = '/'><li>Articles</li></a>
            </ul>

            <div>
            <button className='white' type='submit'>Sign In</button>
            <button className='color' type='submit'>Sign Up</button>
            </div>
        </nav>
    )
}