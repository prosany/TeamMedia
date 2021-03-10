import React, { useEffect, useState } from 'react';
import LeaguesArea from '../LeaguesArea/LeaguesArea';
import './Home.css';

const Home = () => {
    const [leagueList, setLeagueList] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setLeagueList(data.teams))
        // console.log(leagues);
    }, [])
    return (
        <div>
            Total {leagueList.length}
            {
                leagueList.map(leagueData => <LeaguesArea leagueList={leagueData}></LeaguesArea>)
            }
        </div>
    );
};

export default Home;