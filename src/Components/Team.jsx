import { Link } from 'react-router-dom';
const URL = 'https://cedricrabarijohn.github.io/test-json-server/'
const Team = ({ person }) => {
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500" className="col-md-6 col-lg-4 item"><img className="rounded-circle" src={URL + person.photo} alt='' />
            <h3 className="name">{person.firstName} {person.lastName}</h3>
            <p className="title">{person.role}</p>
            <p className="description">{person.slogan}</p>
            <div className="social"><Link to="#"><i className="bi bi-facebook"></i></Link></div>
        </div>
    );
}
export default Team;