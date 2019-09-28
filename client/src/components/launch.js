import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const launch = props => {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);
  return (
    <Fragment>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>loading...</h4>;
          if (error) console.log(error);
          const {
            flight_number,
            launch_date_local,
            launch_success,
            launch_year,
            mission_name,
            rocket: { rocket_id, rocket_name, rocket_type }
          } = data.launch;
          return (
            <div>
              <h4 className>
                <span className="text-dark">Mission:</span> {mission_name}
              </h4>
              <div className="my-4">
                <h5>Launch Details</h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    Flight number : {flight_number}
                  </li>
                  <li className="list-group-item">
                    Launch Date :{" "}
                    <Moment format="YYYY-MMM-DD">{launch_date_local}</Moment>
                  </li>
                  <li className="list-group-item">
                    Launch Year : {launch_year}
                  </li>
                  <li className="list-group-item">
                    Launch Successful :{" "}
                    {launch_success ? (
                      <span className="text-success">Yes</span>
                    ) : (
                      <span className="text-danger">No</span>
                    )}
                  </li>
                </ul>
              </div>
              <div className="my-4">
                <h5>Rocket Details</h5>
                <ul className="list-group">
                  <li className="list-group-item">Rocket ID : {rocket_id}</li>
                  <li className="list-group-item">
                    Rocket Name : {rocket_name}
                  </li>
                  <li className="list-group-item">
                    Rocket Type : {rocket_type}
                  </li>
                </ul>
              </div>
              <Link to="/" className="btn btn-primary">
                Back
              </Link>
            </div>
          );
        }}
      </Query>
    </Fragment>
  );
};

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default launch;
