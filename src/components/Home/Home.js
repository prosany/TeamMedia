import React, { useEffect, useState } from 'react';
import TeamsArea from '../TeamsArea/TeamsArea';
import './Home.css';

const Home = () => {
    const [teamList, setTeamList] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeamList(data.teams))
    }, []);
    return (
        <>
            {/* Total {teamList.length} */}
            <div className="Top-banner">
                <div className="content-inside-banner">
                    <div className="teamlogo">
                        <h2 className="premier">Premier League Teams</h2>
                    </div>
                </div>
            </div>
            <div className="box">
                {
                    teamList.map(teamData => <TeamsArea teamList={teamData} key={teamData.idTeam}></TeamsArea>)
                }
            </div>
        </>
    );
};

export default Home;