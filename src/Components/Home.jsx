
import "aos/dist/aos.css";
import './css/style.css'
import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import img from './images/nfttogether.png'
const Home = () => {
    const JoinButton = styled(Button)({
        borderRadius: '1em',
        fontSize: '11px',
        padding: '12px',
        letterSpacing: '0.1em',
        textTransform: 'none',
        backgroundColor:"#F6547B",
        width: '40%',
        '&:hover':{
            backgroundColor:'transparent'
        }
    })
    const SimpleButton = styled(Button)({
        color: 'white',
        textTransform: 'none',
        fontFamily: 'Comic Neue'
    })
    const BuyButton = styled(Button)({
        borderRadius: '1em',
        color:'white',
        backgroundColor:"#F6547B",
        textTransform: 'none',
        padding:'12px',
        width: '30%',
        
    })
    return (
        <div className="container">
            <nav className='nav'>
                <span className="logo col-md-3">
                    <span className="icon fa fa-brands fa-battle-net"></span><SimpleButton><b>CommunIT Lab</b></SimpleButton>
                </span>
                <div className="menu col-md-6">
                    <SimpleButton className="home">Home</SimpleButton>
                    <SimpleButton className="about">About us</SimpleButton>
                    <SimpleButton className="collections">Collections</SimpleButton>
                    <SimpleButton className="roadmap">Roadmap</SimpleButton>
                    <SimpleButton className="team">Team</SimpleButton>
                    <SimpleButton className="contact">Contact</SimpleButton>
                </div>
                <span className="join col-md-3">
                    <JoinButton variant="contained">Join now</JoinButton>
                </span>
            </nav>
            <div className="main1">
                <p className="nfts">NFTs</p>
                <p className="discover">Discover Digital Art
                    <br />Sell Your Specific</p>
                <p className="miniText">The Ownership Economy begins when NFTs tokenize their
                    <br />rights, gain a (decentralized) identity of their own, and <br />
                    start to act, just a little, fungible.
                </p>
                <div className="buy">
                    <BuyButton>Buy on Opensea</BuyButton>
                    <p className="fa fa-reddit"></p>
                    <p className="fa fa-twitter"></p>
                    <p className="fa fa-instagram"></p>
                </div>
            </div>
            <div className="main2">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default Home;