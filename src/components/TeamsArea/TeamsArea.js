import React from 'react';
import './TeamsArea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const TeamsArea = (props) => {
    const teamData = props.teamList;
    const {strTeam, strTeamBadge, strSport } = teamData;
    const iconCoffee = <FontAwesomeIcon icon={faLongArrowAltRight} />;
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
                    <Router>
                        <Link to="/">Explore <span>{iconCoffee}</span></Link>
                        <Switch>
                            <Route path="/about">
                                
                            </Route>
                            <Route path="/users">
                                
                            </Route>
                            <Route path="/">
                                
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
            {/* React Router */}
            
        </>
    );
};

export default TeamsArea;