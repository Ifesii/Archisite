import './Needs.css';
import Tile from '../UI/Tile/Tile';
import five from '../Images/img-5.png';
import icone from '../Images/icon.png';
import itwo from '../Images/icon 1.png';
import ithree from '../Images/icon 2.png';


export default function Needs(){
    return(
        <main>
            <img src={five} alt=''/>

            <div>
                <h2>Build Your Needs <span>with Archmove</span></h2>

                <Tile 
                image = {icone}
                title = '100% Guaranteed Project Completion'
                description = 'Build safe, comfortable and transparent with a project management application with a joint account.'
                />

                <Tile 
                image = {itwo}
                title = 'No Additional Fees'
                description = 'There are no hidden costs. The value of the offer you get is the value you paid.'
                />

                <Tile 
                image = {ithree}
                title = 'Get Escort from the Team'
                description = 'Monitor reports from the Arsitag team who check directly in the field.'
                />
            </div>
        </main>
    );
};