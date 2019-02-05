import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  let { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> {project.title}</span>
            <p>{project.connect}</p>
            <div className="card-action gret lighten-4 gray-text">
              <div>
                Posted by {project.authorFirstName} {project.authorLastName}
              </div>
              <div className="gray-text">
                {moment(project.createdAt.toDate()).calendar()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading ... project</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);

  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  // returns collection from firebse  ( i.e an object whose keys are IDs and valus are documents in firebase)
  const project = projects ? projects[id] : null;
  // console.log(projects);

  return {
    project,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
