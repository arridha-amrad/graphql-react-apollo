import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LaunchItem = ({
  launch: { launch_success, flight_number, mission_name, launch_date_local }
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <div className={launch_success ? "text-success" : "text-danger"}>
            <h4>{mission_name}</h4>
          </div>
          <p>
            Date: <Moment format="YYYY-MM-DD">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launches/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
