import React from 'react';
import './TeamsArea.css';

const TeamsArea = (props) => {
    const teamData = props.teamList;
    const {strTeam, strTeamBadge, strSport } = teamData;
    // console.log(teamData)
    return (
        <>
            <div className="teamdata">
                <div className="team-logo">
                    <img src={strTeamBadge} alt=""/>
                </div>
                <div className="team-name">
                    <strong>{strTeam}</strong>
                    <p className="shortDes">Sports Type: {strSport}</p>
                </div>
            </div>
        </>
    );
};

export default TeamsArea;