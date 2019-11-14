import React from "react";

const ActivityCard = props => {
    console.log("ActivityCard:", props);
    return (
        <div className='dogsPics'>
            <img src={props.ActivityList} alt='akita dogs' />
        </div>
    );
};

export default ActivityCard;