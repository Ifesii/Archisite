import './Realize.css';
import house from '../Images/house.png';
import Button from '../UI/Button/Button';


export default function Realize(){
    return(
        <div className='realize'>
            <img src={house} alt=''/>

            <div>
                <h2>Realize Your <span>Dream Project</span><span className='move'>with Archmove</span></h2>

                <Button />
            </div>
        </div>
    );
};