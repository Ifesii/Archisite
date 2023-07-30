import './Rooms.css';
import one from '../Images/img-01.png';
import two from '../Images/img-02.png';
import three from '../Images/img-03.png';
import four from '../Images/img-04.png';


export default function Rooms(){
    return(
        <section>
            <h2>Build Professional and <span>Valuable Rooms</span></h2>

            <div>
                <img src={one} alt=''/>
                <img src={two} alt=''/>
                <img src={three} alt=''/>
                <img src={four} alt=''/>
            </div>
        </section>
    );
};