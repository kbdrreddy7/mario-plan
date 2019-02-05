import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
class Dashboard extends Component {
  state = {};
  render() {
    const { projects, auth, notifications } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // now this 'state' i.e store state contains all our reducers , which are dedfined in rootReducer
  // console.log("in dashboard", state);
  return {
    // projects: state.project.projects
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 5, orderBy: ["time", "desc"] }
  ])
  // in this component the firestoreConnected to 'projects' collection in firebase
)(Dashboard);
//export default compose(connect(mapStateToProps))(Dashboard);
