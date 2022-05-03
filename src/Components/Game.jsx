import "aos/dist/aos.css";
import { Button, Card, Chip} from '@mui/material';
const Game = ({ game }) => {
    const handleClick = () =>{

    }
    return (
        <>
            <div data-aos="fade-down" class="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header">{game.id}</div>
                <div className="card-body">
                    <h5 className="card-title">{game.title}</h5>
                    <p className="card-text">{game.description}</p>
                </div>
                <div className="card-footer">
                    <Chip label="Details" variant="outlined" onClick={handleClick}/>
                </div>
            </div>
        </>
    );
}

export default Game;