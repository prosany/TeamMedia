import React from 'react';
import './TeamsArea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const TeamsArea = (props) => {
    const teamData = props.teamList;
    const { strTeam, strTeamBadge, strSport, idTeam } = teamData;
    const iconCoffee = <FontAwesomeIcon icon={faLongArrowAltRight} />;
    const history = useHistory();
    const showTeamDetails = teamId => {
        const url = `teaminfo/${teamId}`;
        history.push(url);
    }
    // console.log(teamData)
    return (
        <>
            <div className="teamdata">
                <div className="team-logo">
                    <img src={strTeamBadge} alt={strTeam} />
                </div>
                <div className="team-name">
                    <strong>{strTeam}</strong>
                    <p className="shortDes">Sports Type: {strSport}</p>
                </div>
                <div className="team-description">
                    <button onClick={() => showTeamDetails(idTeam)}>Explore <span>{iconCoffee}</span></button>
                </div>
            </div>
            {/* React Router */}
            
        </>
    );
};

export default TeamsArea;