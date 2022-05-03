import './css/Home.css'
import './css/Search.css'

import "aos/dist/aos.css";
import GameList from './GameList';
import image from './images/bg.jpg'

const Home = () => {
    return (
        <>
            <section className="projects-horizontal">
                <div className='row'>
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center" data-aos="fade">OUR PRODUCTS ARE HERE</h2>
                        </div>
                        <GameList />
                    </div>
                </div>
                <div className='row'>
                    <h2 className='text-center' data-aos="fade">OUR TEAM</h2>
                </div>
                Our team is composed by : 
            </section>
        </>
    );
}

export default Home;