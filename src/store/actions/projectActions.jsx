export const createProject = project => {
  // we can return  action object or callback function
  // the callback function takes 'dispatch' i.e.(store.dispatch()) and 'state' i.e store.state as args
  return (dispatch, getState, { getFirestore }) => {
    // make async calss

    const firestore = getFirestore(); // ref to firestore
    const state = getState();
    const profile = state.firebase.profile;
    const autherId = state.firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        // collection name  and add doc
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: autherId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "ADD_PROJECT",
          project: project
        });
      })
      .catch(err => {
        dispatch({
          type: "ADD_PROJECT_ERR",
          err
        });
      });
  };

  /* 
    return {
        type:"ADD_PROJECT",
        project:project
    } */
};
