import React, { useEffect, useState } from 'react';
import TeamsArea from '../TeamsArea/TeamsArea';
import './Home.css';

const Home = () => {
    const [teamList, setTeamList] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeamList(data.teams))
    }, [])
    return (
        <div>
            {/* Total {teamList.length} */}
            <div className="box">{
                teamList.map(teamData => <TeamsArea teamList={teamData}></TeamsArea>)
            }
            </div>
        </div>
    );
};

export default Home;