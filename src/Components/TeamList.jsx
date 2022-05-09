import useFetch from '../Hooks/useFetch';
import Team from './Team'
const TeamList = () => {
    const { datas: team, isPending: teamPending, err: teamErr } = useFetch('https://cedricrabarijohn.github.io/test-json-server/team.json')
    return (
        <div className="col">
            <section className="team-clean">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Our team | CommunIT </h2>
                        <p className="text-center">CommunIT is a community build up by students, especially from ITUniversity, from Madagascar</p>
                    </div>
                    <div className="row people">
                        {teamPending &&
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <span style={{ marginLeft: '10px' }}>Loading ...</span>
                            </div>
                        }
                        {team && team.map((person) => (
                            <Team person={person} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default TeamList;