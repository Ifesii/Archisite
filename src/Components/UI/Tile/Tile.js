import './Tile.css';


const Tile = ({ image, title, description }) => {
    return(
        <div className='tile'>
            <img src={image} alt='icon'/>
            <div className='tile2'>
            <h5>{title}</h5>
            <p>{description}</p>
            </div>
        </div>
    );
};


export default Tile;