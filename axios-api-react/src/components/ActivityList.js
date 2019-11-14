import React from "react";
import { connect } from "react-redux";
import { fetchBored } from "../actions/index";
import { useDispatch } from 'react-redux';
import ActivityCard from './ActivityCard';

function ActivityList(props) {
    console.log("ActivityList", props);
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(fetchBored())}>Get Pictures</button>
            {props.isFetching && <span role="img" alt="clock">⏰</span>}
            {props.error && <div>{props.error.message}</div>}
            {props.activity &&
                props.activity.map(activity =>
                    <ActivityCard className="activity" key={activity.url} ActivityList={activity} />)}

        </>
    );
}

const mapStateToProps = state => {
    console.log('activityList', state)
    return {
        isFetching: state.isFetching,
        activity: state.activity
    };
};

export default connect(
    mapStateToProps,
    { fetchBored }
)(ActivityList);
