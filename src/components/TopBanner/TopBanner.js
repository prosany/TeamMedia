import React from 'react';
import './TopBanner.css'

const TopBanner = (props) => {
    const {strTeamBadge, strTeam} = props.teamDetails;
    return (
        <>
            <div className="Top-banner">
                <div className="content-inside-banner">
                    <div className="teamlogo">
                        <img src={strTeamBadge} alt={strTeam} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBanner;