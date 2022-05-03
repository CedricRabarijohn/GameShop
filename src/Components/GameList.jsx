import { Link } from 'react-router-dom';

import useFetch from './../Hooks/useFetch';
import Game from './Game';

const GameList = () => {
    const style = {
        display: 'grid',
        alignItems: 'center'
    }
    const { datas: games, isPending, err } = useFetch('https://cedricrabarijohn.github.io/test-json-server/db.json')
    return (
        <div className="row projects text-center">
            {isPending &&
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <span style={{ marginLeft: '10px' }}>Loading ...</span>
                </div>
            }
            {games && games.map((game) => (
                <div className='game col-md-3 col-sm-4' key={game.id}>
                    <Game game={game} />
                </div>
            ))}
        </div>
    );
}

export default GameList;