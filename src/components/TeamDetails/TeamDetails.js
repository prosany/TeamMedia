import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TopBanner from '../TopBanner/TopBanner';
import './TeamDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faMarsStroke, faGamepad, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faTwitter,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';

const TeamDetails = () => {
    const {teamId} = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    const { strTeam, intFormedYear, strCountry, strSport, strGender, strStadiumDescription, strDescriptionEN } = teamDetails;
    const genderMale = 'https://i.ibb.co/StXLKYQ/male.png';
    const genderFemale = 'https://i.ibb.co/brNNX58/female.png';

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]));
    }, [teamId])
    // console.log('This', teamDetails);
    return (
        <>
            <TopBanner teamDetails={teamDetails}></TopBanner>
            <div className="box">
                <div className="team-detail-body">
                    <div className="left-body">
                        <h1>{strTeam}</h1>
                        <h4><span><FontAwesomeIcon icon={faHistory} /></span> Founded: {intFormedYear}</h4>
                        <h4><span><FontAwesomeIcon icon={faGamepad} /></span> Sports Type: {strSport}</h4>
                        <h4><span><FontAwesomeIcon icon={faGlobe} /></span> Team Counrty: {strCountry}</h4>
                        <h4><span><FontAwesomeIcon icon={faMarsStroke} /></span> Gender: {strGender}</h4>
                    </div>
                    <div className="right-body">
                        {
                            strGender && (strGender === 'Male' ? (<img src={genderMale} alt="male" />) : (<img src={genderFemale} alt="male" />))
                        }
                    </div>
                </div>
                <div className="team-descriptions">
                    <h4>Stadium Description:</h4>
                    <p>{strStadiumDescription}</p>
                    <h4>Description:</h4>
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="social-icons">
                    <a href="https://twitter.com/MahabubSunny4" className="socialTwitter com"><span><FontAwesomeIcon icon={faTwitter} /></span></a>
                    <a href="https://facebook.com/mahabub.sunny.904" className="socialFacebook com"><span><FontAwesomeIcon icon={faFacebookF} /></span></a>
                    <a href="https://www.youtube.com/user/jhankarmahbub" className="socialYoutube com"><span><FontAwesomeIcon icon={faYoutube} /></span></a>
                </div>
            </div>
        </>
    );
};

export default TeamDetails;