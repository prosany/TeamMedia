import React from 'react';

const LeaguesArea = (props) => {
    const leagueData = props.leagueList;
    const {strTeam, strTeamBadge } = leagueData;
    console.log(leagueData)
    return (
        <div>
            <h1>Hello: {strTeam}</h1>
            <img src={strTeamBadge} alt=""/>
        </div>
    );
};

export default LeaguesArea;