
import { Link } from 'react-router-dom';

import "aos/dist/aos.css";

import GameList from './GameList';
import TeamList from './TeamList';
import './css/Home.css'
import './css/Search.css'
import './css/Team-clean.css'
const Home = () => {
    return (
        <>
            <section className="projects-horizontal">
                <div className='row'>
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center" data-aos="fade">OUR PRODUCTS</h2>
                        </div>
                        <GameList />
                    </div>
                </div>
                <TeamList />
            </section>
        </>
    );
}

export default Home;